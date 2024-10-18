import { getUsersList } from "../constant/UsersConstants";

let initialValues = {
    getuserslist: [],
};
export const usersReducer = (value = initialValues, action) => {
    switch (action?.type) {
        case getUsersList.REQUEST:
            return { getuserslist: action?.payload };
        case getUsersList.SUCCESS:
            return { getuserslist: action?.payload };
        case getUsersList.ERROR:
            return { getuserslist: action?.payload };
        default:
            return value;
    }
};