import axios from 'axios';
const route="http://localhost:3001/v1/"
const loginUrl=route+'user/login';
const userprofile=route+'user';
const logoutUrl=route+"user/logout"
const newAccessJWTurl=route+"token"

export const fetchNewAccessJWT=frmData=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const {refreshJWT}=JSON.parse(localStorage.getItem('crmSite'))
            
            if(!refreshJWT){
                reject("session Expired or token doesn't exist");
            }
            const res=await axios.get(newAccessJWTurl,{
                headers:{
                    Authorization:refreshJWT,
                },
            });
            if(res.data.status==="success"){
                sessionStorage.setItem('accessJWT', res.data.accessJWT);
                localStorage.setItem('crmSite',JSON.stringify({refreshJWT:res.data.refreshJWT}));
            }
            resolve(true);
        } catch (error) {
            if(error.message==="Request failed with status code 403"){
                localStorage.removeItem("crmSite");
            }
            reject(false);
        }
    })
}
export const fetchUser=frmData=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const accessJWT=sessionStorage.getItem('accessJWT')
            if(!accessJWT){
                reject("session Expired or token doesn't exist");
            }
            const res=await axios.get(userprofile,{
                headers:{
                    Authorization:accessJWT,
                }
            })
            resolve(res.data);
        } catch (error) {
            reject(error.message);
        }
    })
}

export const userLogin=frmData=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const res=await axios.post(loginUrl, frmData)
            resolve(res.data);
            if(res.data.status==="success"){
                sessionStorage.setItem('accessJWT', res.data.accessJWT);
                localStorage.setItem('crmSite',JSON.stringify({refreshJWT:res.data.refreshJWT}));
            }
        } catch (error) {
            reject(error);
        }
    })
};

export const userLogout=async()=>{
    try {
        await axios.delete(logoutUrl,{
            headers:{
                Authorization:sessionStorage.getItem("accessJWT")
            }
        })
    } catch (error) {
        console.log(error);
    }
}