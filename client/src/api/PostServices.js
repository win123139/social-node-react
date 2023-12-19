
import client from "./client";

const PostServices = {
  // list: async function() {
  //   const state = store.getState();
  //   const token = state.token;
  //   const response = await fetch("http://localhost:3001/posts", {
  //     method: "GET",
  //     headers: { Authorization: `Bearer ${token}` },
  //   });
  //   return await response.json();
  // },
  listPost: async function() {
    return client.get('posts');
  },
  createPost: async function(data) {
    return client.post(`posts`, { body : data })
  },
  getUserPosts: async function(userId) {
    return client.get(`posts/${userId}/posts`);
  },
  patchLike: async function(postId,data) {
    return client.patch(`posts/${postId}/like`,{ json : data})
  }
};

export default PostServices;