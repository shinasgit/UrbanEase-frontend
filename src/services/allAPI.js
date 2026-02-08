import commonAPI from "./commonAPI";
import { serverURL } from "./serverURL";


//1 register user
export const registerUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,{})
}

//2 login user
export const loginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,{})
}

//3 googlrlogin user
export const GoogleloginUserAPI = async(reqBody)=>{
    return await commonAPI('POST',`${serverURL}/api/google-login`,reqBody,{})
}

//4 get user details-admin
export const GetUserAdminAPI = async(reqHeader)=>{
    return await commonAPI('GET',`${serverURL}/api/admin-users`,{},reqHeader)
}

//5 get house - user
export const GetHouseUserAPI = async(searchKey,reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/api/housebook?search=${searchKey}`,{},reqHeader)
}

//6 add house - SP
export const addHouseAPI = async(reqBody,reqHeader )=>{
    return await commonAPI('POST',`${serverURL}/api/housebookSP`,reqBody,reqHeader)
}

//7 add app - SP
export const addAppAPI = async(reqBody,reqHeader )=>{
    return await commonAPI('POST',`${serverURL}/api/applianceSP`,reqBody,reqHeader)
}

//8 add helper - SP
export const addHelperAPI = async(reqBody,reqHeader )=>{
    return await commonAPI('POST',`${serverURL}/api/helperSP`,reqBody,reqHeader)
}

//9 get App - user
export const GetAppUserAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/api/appliance`,{},reqHeader)
}

//10 get help - user
export const GetHelpUserAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/api/helper`,{},reqHeader)
}

//11 delete user - admin
export const deleteUserAdminAPI = async(id,reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/api/admin-user-delete/${id}`,{},reqHeader)
}

//12 update prof - admin
export const updateProfAdminAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/api/adminprofile-edit`,reqBody,reqHeader)
}

//13 get App - user
export const GetModalViewUser = async(id,reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/api/modalView/${id}`,{},reqHeader)
}

//14 add booking - user
export const addBookingAPI = async(reqBody,reqHeader )=>{
    return await commonAPI('POST',`${serverURL}/api/booking`,reqBody,reqHeader)
}

//15 get Bookings - admin
export const getBookingAdmin = async(reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/api/userbooking`,{},reqHeader)
}