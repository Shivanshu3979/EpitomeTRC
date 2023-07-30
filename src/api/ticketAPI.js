import axios from "axios";

const serverUri="http://localhost:3001/v1/";
export const getAlltickets=()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const result=await axios.get(
                serverUri+'ticket',{
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

export const updateReplyTicket=(_id,msg)=>{
    const uri=serverUri+'ticket/'+_id;
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

export const getSingleTicket = (_id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(serverUri+"ticket/" + _id, {
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

export const closeTicket=(_id,msg)=>{
    const uri=serverUri+'ticket/close-ticket/'+_id;
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

export const addNewTicket=(frmData)=>{
    const uri=serverUri+'ticket/';
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