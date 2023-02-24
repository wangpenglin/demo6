import axios, { AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, AxiosStatic } from 'axios'

type TAxiosOption = {
  baseURL: string;
  timeout: number;
}

const config = {
  baseURL: 'http://192.168.10.3:8080',
  timeout: 120000
}


class Http {
  // service: AxiosInstance;
  service: any;
  constructor(config: TAxiosOption) {
    this.service = axios.create(config);

    this.service.interceptors.request.use((config: AxiosRequestConfig) => {
      if (localStorage.getItem('token')) {
        (config.headers as AxiosRequestHeaders).token = localStorage.getItem('token') as string
      }

      return config
    }, (error: any) => {
      return Promise.reject(error) // 为了可以在代码中catch到错误信息
    })


    /* 响应拦截   this.service.interceptors.response.use(response => response.data, error => Promise.reject(error))*/
    this.service.interceptors.response.use((response: AxiosResponse<any>) => {
      const data = response.data
      const { code } = data
      console.log(code);
      return response.data
    }, (error: any) => {
      //ElMessage.error('请求失败',)
      return Promise.reject(error)
    })
  }
  get<T>(url: string, params?: object, _object = {}): Promise<any> {
    return this.service.get(url, { params, ..._object })
  }
  post<T>(url: string, params?: object, _object = {}): Promise<any> {
    return this.service.post(url, params, _object)
  }
  put<T>(url: string, params?: object, _object = {}): Promise<any> {
    return this.service.put(url, params, _object)
  }
  delete<T>(url: string, params?: any, _object = {}): Promise<any> {
    return this.service.delete(url, { params, ..._object })
  }
}

export default new Http(config)
