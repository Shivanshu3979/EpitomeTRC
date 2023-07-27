import { fetchUser } from "../../api/userApi";
import { getUserFail,getUserSuccess,getUserPending } from "./userSlice";

export const getUserProfile=()=>async(dispatch)=>{
    try {
        dispatch(getUserPending());
        const result= await fetchUser();
        if(result.user && result.user.id)
        return dispatch(getUserSuccess(result.user))
        dispatch(getUserFail("User Not Found!"));
    } catch (error) {
        dispatch(getUserFail(error.message));
    }
}