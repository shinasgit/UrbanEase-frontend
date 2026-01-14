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
