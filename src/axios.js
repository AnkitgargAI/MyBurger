import axios from "axios";

const instance  = axios.create({
    baseURL:"https://react-my-burger-e703c.firebaseio.com/"
});

instance.interceptors.request.use(request=>{
        console.log(request);
        return request;
},error=>{
    console.log(error);
    return error;
})
export default instance;