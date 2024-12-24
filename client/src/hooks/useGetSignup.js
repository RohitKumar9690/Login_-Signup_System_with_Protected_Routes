import axiosPrivate from "../axios/privateAxios";

const SignupAPI = async(name,email,phone_no,password)=>{
    try {
        const response = await axiosPrivate.put(`/api/user/signup`,{
          name,
          password,
          email,
          phone_no
        });
        console.log(response);
        
        return response.data
    } catch (error) {
        console.log(error);
        
    }       
}

export {SignupAPI}