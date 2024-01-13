import { AxiosResponse } from "axios";
import ApiClient from './api-client';
import ApiResponse from './api-response';
import * as Constants from 'src/constants';

export interface IBaseRepository<T> {
  get(id: any): Promise<ApiResponse<T>>;
  getMany(): Promise<ApiResponse<T[]>>;
  post(item: T): Promise<ApiResponse<T>>;
  update(id: any, item: T): Promise<ApiResponse<T>>;
  delete(id: any): Promise<ApiResponse<T>>;
}



const transform = (response: AxiosResponse): Promise<ApiResponse<any>> => {
  return new Promise((resolve, reject) => {
    console.log("DDDD");
    console.log(response.status);
    const result: ApiResponse<any> = {
      data: response,
      succeeded: response.status ===200,
      errors: "",
    };
    resolve(result);
  });
};

export abstract class BaseRepository<T> extends ApiClient implements IBaseRepository<T> {
    protected collection: string | undefined;
    protected path : string | undefined;

    public async get(id: string): Promise<ApiResponse<T>> {
      const instance = this.createInstance({api_base_url: Constants.API_BASE_URL,content_type: Constants.X_WWW_FORM_CONTENT_TYPE});
      const result = await instance.get(`${Constants.API_BASE_URL}/${this.collection}/${this.path}`).then(transform);
      return result as ApiResponse<T>;
    }
    
    public async getMany(): Promise<ApiResponse<T[]>> {
      const instance = this.createInstance({api_base_url: Constants.API_BASE_URL,content_type: Constants.X_WWW_FORM_CONTENT_TYPE});
      const result = await instance.get(`${Constants.API_BASE_URL}/${this.collection}/`).then(transform);
      return result as ApiResponse<T[]>;
    }
    
    public async post(item: T): Promise<ApiResponse<T>> {
      const instance = this.createInstance({api_base_url: Constants.API_BASE_URL,content_type: Constants.X_WWW_FORM_CONTENT_TYPE});
     
      const data = new FormData();
      data.append('username','johndoe');
      data.append('password','secret');
      const result = await instance.post(`${this.collection}/token`, data).then(transform);
      //return result;
      return result as ApiResponse<T>;
    }
    
    public async update(id: string, item: T): Promise<ApiResponse<T>> {
      const instance = this.createInstance({api_base_url: Constants.API_BASE_URL,content_type: Constants.X_WWW_FORM_CONTENT_TYPE});
      const result = await instance.put(`${Constants.API_BASE_URL}/${this.collection}/${id}`, item).then(transform);
      return result as ApiResponse<T>;
    }
    
    public async delete(id: any): Promise<ApiResponse<T>> {
      const instance = this.createInstance({api_base_url: Constants.API_BASE_URL,content_type: Constants.X_WWW_FORM_CONTENT_TYPE});
      const result = await instance.delete(`${Constants.API_BASE_URL}/${this.collection}/${id}`).then(transform);
      return result as ApiResponse<T>;
    }
    
  }

  export default BaseRepository;
