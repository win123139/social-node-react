import client from "./client";

const AuthServices = {
  register : async  function(data){
    return client.post(`auth/register`,{body : data})
  },
  login : async function(data){
    return client.post(`auth/login`,{json: data})
  }
}

export default AuthServices;