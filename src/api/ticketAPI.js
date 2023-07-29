import axios from "axios";

export const getAlltickets=()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const result=await axios.get(
                'http://localhost:3001/v1/ticket',{
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
    const uri='http://localhost:3001/v1/ticket/'+_id;
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
        const result = await axios.get("http://localhost:3001/v1/ticket/" + _id, {
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
    const uri='http://localhost:3001/v1/ticket/close-ticket/'+_id;
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