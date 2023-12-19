import ky from "ky";


const client = ky.extend({
  prefixUrl: process.env.REACT_APP_SERVER_HOST,
  hooks: {
    beforeRequest: [
      (request) => {
        // Do something before every request
        // This is a good place to authorize request if needed
        // const token = useSelector((state) => state.token);
        const token = JSON.parse(localStorage.getItem('persist:root'))?.token.replace(/"/g, '');
        // console.log(token)
        if(token) {
          request.headers.set ( 'Authorization', `Bearer ${ token }` );
        }
      }
    ],
    afterResponse: [
      (response) => {
        // Do something after every response
        // For example, check status code etc...
      }
    ]
  }
});

export default client;