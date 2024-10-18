import { getParty } from '../constants/Index'
import {getPartyApi} from '../../../constants/ApiService';

export const GetPartyAction = () =>async (dispatch) => {
    dispatch({
        type:getParty.LOADING,
        payload:{loading:true},
    });
    try{
        const  {data} = await getPartyApi() ;
        await dispatch({
            type:getParty.SUCCESS,
            payload:{loading:false,data:data}
        });
    } catch(err){
        await dispatch({
            type:getParty.ERROR,
            payload:{loading:false,data:{}}
        });
    }
}