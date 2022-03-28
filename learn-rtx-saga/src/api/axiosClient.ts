import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosCLient = axios.create({
    baseURL: 'http://js-post-api.herokuapp.com/api',
    headers: {
        'Content-Type': 'application/json',
    }
})
// interceptors: thực thi hành động nào đó trước khi request hoặc xử lý trả về response ( gửi kèm token trước khi login)

// Add a request interceptor
axiosCLient.interceptors.request.use(function (config:AxiosRequestConfig) {
    // Do something before request is sent
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosCLient.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default axiosCLient;