import axios, { AxiosInstance, AxiosResponse } from "axios";


export interface ApiSettings{
    api_base_url: string,
    content_type: string
}


abstract class ApiClient {
  protected instance: AxiosInstance | undefined;
    
  protected createInstance(apiSettings: ApiSettings): AxiosInstance {
    console.log(apiSettings.api_base_url)
    this.instance = axios.create({
      baseURL: apiSettings.api_base_url,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    this.initializeResponseInterceptor();
    return this.instance;
  }

  private initializeResponseInterceptor = () => {
    this.instance?.interceptors.response.use(this.handleResponse, this.handleError);
    const token = localStorage.getItem("jwtToken");
    this.instance?.interceptors.request.use((config: any) => {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
      return config;
    });
  };

  private handleResponse = ({ data }: AxiosResponse) => data;

  private handleError = (error: any) => Promise.reject(error);
}

export default ApiClient;