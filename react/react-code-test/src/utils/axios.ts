import axios from 'axios';

const instance = axios.create({});

instance.interceptors.response.use(((res: any)=> {
  console.log(res, '-----------------------------------');
  return res;
}), (rej => { console.log(rej, '-----------------------------------'); }))

export default instance;