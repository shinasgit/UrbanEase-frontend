adding user to db by service provider
1.create a file SP MW then so as in twt mw role change chey
2.house cntroller le fn define cheyth
3.postman le SP nte token kodthit formdata oke set aki send cheyth
4.sathanam kiti

ini front end

1.api call cheyynnm




add appliance in backend
1.app controler 
2.route
3.modelcreate
4.postman json format raw 

adding house through frnt end 
1.const [houseDetails,setHouseDetails]=useState({
    hostelName:"",
    location:"",
    rent:"",
    deposit:"",
    propertyType:"",
    metro:"",
    busStop:"",
    vacancy:"",
    furnishing:"",
    uploadImage:[]
    
  }) 

2.input box le onchange
onchange{e=>setState({...state,inputname:e.taregt.value})}

3.function for onclick

destructure onst {
    hostelName,
    location,
    rent,
    deposit,
    propertyType,
    metro,
    busStop,
    vacancy,
    furnishing} = houseDetails othervise on if we have to put housedetails.hostelName.....

const addHouseSP = async()=>{
 if(
    hostelName==""||
    location==""||
    rent==""||
    deposit==""||
    propertyType==""||
    metro==""||
    busStop==""||
    vacancy==""||
    furnishing==""){
    alert("Please fill the fields")
  }else{
    alert("House added")
    console.log(houseDetails); 
  }
}

4.button le onlick = {addhouseSP}

5.api for adding house create
//6 add house - SP
export const addHouseAPI = async(reqBody,reqHeader )=>{
    return await commonAPI('POST',`${serverURL}/api/housebookSP`,reqBody,reqHeader)}

6.image upload
image input chyyin avde onchange={(e)=>handleUpload(e)} 

pinne fn define:  const handleupload=(e)=>{
    
  console.log(e.target.files[0]);

  let imgArray = houseDetails.uploadImage
  imgArray.push(e.target.files[0])
  console.log(imgArray);
  

  setHouseDetails({...houseDetails,uploadImage:imgArray})

  //convert img to url
  const url = URL.createObjectURL(e.target.files[0])
  console.log(url);
  setPreview(url)
}










SEARCH AND FILTER
1. create a state to hold temp house details - array
2. set state le - asign response.data
3. function create
   const handleFilter = (location) =>{
    console.log(location);
    }
4. radio/input avde onclick={()=>handleFilter("location)}
5. inside fn
   state le : setGetHouseUser(filterHouse.filter(item=>(item.location).toLowerCase().trim()==location.toLowerCase().trim()))
6. Reset
   inside fn if(location == 'reset'){
    <!-- house kittan indakiya setstate : nte ullil braces le temp state  --> setHouseUserData(filterHouse)
   }else{
    setGetHouseUser(filterHouse.filter(item=>(item.location).toLowerCase().trim()==location.toLowerCase().trim()))
   }

   <!-- nnit reset buttonn or input/radio --> onclick={()=>handleFilter("Reset)}

   //search
   1. src>contextShareAPI>ContextShare.jsx>
   2. above fn : //context creation
      export const searchContext = createContext()
   3. create a global state
      <!-- global state for holding searchkey -->
      const [ searchKey,setSearchKey ] = useState('')
   4. inside div
       <searchContext.Provider value={{searchKey,setSearchKey}}>
        {children}
       </searchContext.Provider>
       also put {children }  inside function as para
   5. in main.jsx
      wrap App using <ContextShare> App </ContextShare>
      import : import  ContextShare  from './contextShareAPI/ContextShare.jsx'
   6. create state where search has to be implemented
      const {searchKey,setSearchKey} = useContext(searchContext)

      import searchContext

      also in search bar(input):value={searchkey}
      then onchange:{(e)=>setsearchkey(e.target.value)}
   7. - allApi pass searchKey along with req header also add `?search=${searchKey}`
      - on housebooking creating fn pass searchKey as para with token
      - async nte avdem await nte avdem
   8. Backend
      - console.log(req.query);
      - const searchKey = req.query.search
      - inside try:
        const query = {
        hostelName:{
          $regex:searchKey,
          $options:"i"
         }
        }
      - find(query) - pass query
      - test inn  postman after changing path
   9. Front end le 
       useEffect(()=>{
          setToken(sessionStorage.getItem('token'))
          if(token){
             getAllHouse(searchKey,token)
           }
          },[searchKey,token])


   DELETE USER ADMIN

   1. usercontroller:
      exports.deleteUser = async(req,res)=>{
        console.log("Inside delete user");
        console.log(req.params);
        const {id} = req.params
        try {
           const delUser = await User.findByIdAndDelete({_id:id}) 
           
           res.status(200).json({message:"Job deleted",delUser})
           
        } catch (error) {
           res.status(500).json("Err"+error) 
        }
        
    }

   2. routes 
      router.delete('/api/admin-user-delete/:id',adminjwtMiddleware,userController.deleteUser)
   3. postman
   FRONT END 
   4. all api
      export const deleteUserAdminAPI = async(id,reqHeader)=>{
      return await commonAPI("DELETE",`${serverURL}/api/admin-user-delete/${id}`,{},reqHeader)
      }
   5. Admin user .jsx
      button le onlick
      <!-- <button onClick={()=>handleDelete(item._id)} className="text-red-600 cursor-pointer hover:underline">
      Delete</button> -->

      const handleDelete = async(id)=>{
    
    try {
      const token = JSON.parse( sessionStorage.getItem("token") )
    // const updatedToken = token.replace(/"/g, "");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    console.log(reqHeader);
      const response = await deleteUserAdminAPI(id,reqHeader)
      console.log(response);
      alert(response.data.delUser.username+" is Deleted")
    } catch (error) {
      console.log("Error"+error);
      
    }
   }

   UPDATE PROFILE
   1. route
      //edit prof - admin
      router.put('/api/adminprofile-edit',adminJwtMiddleware,multerConfig.single('profile'),userController.editProf)

   2. usercontroller
      exports.editProf = async(req,res)=>{
        console.log("Inside edit prof");
        console.log(req.body);
        const {username,password,profile} = req.body
        const email = req.payload
        const role = req.role
        const uploadProfile = req.file?req.file.filename:profile
        try {
            const adminData = await User.findOneAndUpdate({email},{username,email,password,profile:uploadProfile,role})
            await adminData.save()
            res.status(200).json({message:"Admin Details Updated",adminData})
        } catch (error) {
            res.status(500).json("Err"+error) 
        }
      }
   
   3. postman
      form data:username , email ,password, role, profile

   FRONTEND
   4. creaet state 
      const [adminDetails, setAdminDetails] = useState({
      username: "",
       password: "",
      cpassword: "",
      email: "",
       });

   5. - onclick on button : onClick={handleUpdate}
      - fn define
        - const handleUpdate = async () => {
           console.log(adminDetails);

           alert("Profile Updated Successfully");
            } ;
      - on input
        onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      username: e.target.value,
                    })
                  } 

   6. image uplaod div>label>img
      label ->  htmlFor="imgfile"
      input ->  id="imgfile"
            ->  onChange={(e) => uploadFile(e)}    