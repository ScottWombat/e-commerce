class ApiResponse<T> {
    data?: T;
    succeeded?: boolean;
    errors: any;
   
}

export default ApiResponse;

