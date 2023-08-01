import axios from "axios";

const serverUri="http://localhost:3001/v1/";
export const getAllCandidates=()=>{
    
    return new Promise(async(resolve,reject)=>{
        try {
            const result=await axios.get(
                serverUri+'hiring',{
                    headers:{
                        Authorization: sessionStorage.getItem("accessJWT")
                    }
                }
            );
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

export const updateStatusCandidates=(_id,msg)=>{
    const uri=serverUri+'hiring/'+_id;
    return new Promise(async(resolve, reject)=>{
        try {
            const result=await axios.put(
                uri,msg,{
                    headers:{
                        Authorization: sessionStorage.getItem("accessJWT")
                    }
                }
            );
            
            resolve(result.data);
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    })
}

export const getSingleCandidates = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(serverUri+"hiring/" + _id, {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        });
        resolve(result);
      } catch (error) {
        console.log(error.message);
        reject(error);
      }
    });
  };

export const closeCandidates=(_id,msg)=>{
    const uri=serverUri+'hiring/close-application/'+_id;
    return new Promise(async(resolve, reject)=>{
        try {
            const result=await axios.patch(
                uri,{},{
                    headers:{
                        Authorization: sessionStorage.getItem("accessJWT")
                    }
                }
            );
            
            resolve(result.data);
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    })
}

export const addNewCandidates=(frmData)=>{
    const uri=serverUri+'hiring/';
    return new Promise(async(resolve, reject)=>{
        try {
            const result=await axios.post(
                uri,frmData,{
                    headers:{
                        Authorization: sessionStorage.getItem("accessJWT")
                    }
                }
            );
            
            resolve(result.data);
        } catch (error) {
            console.log(error.message);
            reject(error);
        }
    })
}