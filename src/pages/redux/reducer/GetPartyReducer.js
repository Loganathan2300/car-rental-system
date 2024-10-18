import { getParty } from '../constants/Index'


let initialvalue ={
    GetPartyModel:[],
};

export const GetPartyReducer = (value=initialvalue,action) => {
    switch (action?.type) {
        case getParty.REQUEST:
            return { GetleadModel: action?.payload };
        case getParty.SUCCESS:
            return { GetleadModel: action?.payload };
        case getParty.ERROR:
            return { GetleadModel: action?.payload };
        case getParty.LOADING:
            return{ GetleadModel: action?.payload};
        default:
            return value;
    }
}
