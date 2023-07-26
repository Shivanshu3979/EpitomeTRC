import axios from "axios";

export const getAlltickets=()=>{
    return new Promise(async(resolve,reject)=>{
        try {
            const result=await axios.get(
                'http://localhost:3001/v1/ticket',{
                    headers:{
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QtdXNlci0yIiwiaWF0IjoxNjkwMzMyMjE5LCJleHAiOjE2OTA0MTg2MTl9.ILIUgcUKFa1vtXNHEUuJd4Kwkp6U20pU_4hkrQJwrlw'
                    }
                }
            );
            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}