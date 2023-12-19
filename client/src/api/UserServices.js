import client from "./client";

const UserServices = {
  getUserById : async function(userId){
    return client.get(`users/${userId}`)
  },
  getFriends : async function(userId) {
    return client.get(`users/${userId}/friends`)
  },
  patchFriend : async function(userId, friendId){
    return client.patch(`users/${ userId }/${ friendId }`)
  }
};

export default UserServices;