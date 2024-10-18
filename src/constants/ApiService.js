import instance from "../global/Intersepter";


export const getData = (getData) => {
  return instance.get("/api/v1/super-admin/school", getData);
};
export const postData = (postData) => {
  return instance.post("/api/v1/super-admin/school", postData);
};

export const signIn = (signIn) =>{
    return instance.post("/api/v1/auth/signup",signIn);
}

export const signUp = (signUp) =>{
    return instance.post("/api/v1/auth//admin-signup",signUp);
}

export const getPartyApi = (getPartyApi) =>{
    return instance.get("/api/v1/school",getPartyApi)
}