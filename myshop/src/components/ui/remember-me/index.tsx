import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styles from './remember-me.module.css'
import authReducer,{fetchToken} from "src/store/authReducer";
import axios from 'axios';
import UserRepository , {IUser} from 'src/repositories/user-repository';
import ApiResponse from 'src/repositories/api-response';
import Toaster from 'src/components/ui/toast/toaster';
const RememberMe = () => {
  const [state, setState] = useState({
    toast: { message:'',type:''}
  });

  const handleCheck1 = (e:any) => {
      let data: IUser = {
        username: 'johndoe',
        password: 'secret'
      };
      const repository: UserRepository = new UserRepository();
      repository.post(data).then((response: ApiResponse<IUser>) => {
        console.log(response);
       
      });
      
    };
    const handleCheck = (e:any) => {
		
    setState({
      toast: { message: "Hold my beer", type: "danger" }
    })
    let data = {
      password: 'secret',
      username: 'johndoe'
    };
    let axiosConfig = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    }
    axios.post('http://localhost:5000/api/users/token', data, axiosConfig)
    .then((res) => {
      console.log("RESPONSE RECEIVED: ", res);
    })
    .catch((err) => {
      let status = err.response.status
      let detail = err.response.data.detail
      console.log(`AXIOS ERROR: status=${status} deatail=${detail}`);
    });
    
    setState({
      toast: { message: "Hold my beer", type: "info" }
    })
   
	}
    return(
      <>
      <Toaster toast={state.toast} position="top-right"  autoDelete={true}/>
      <div className={styles.remember_root}>
			<form className={styles.myform}>	
        
			<input type="checkbox" id="ossm" name="ossm" onChange={handleCheck}/> 
            <label>Remember me</label> 
            
            </form>	
            <Link to="/forget-password">
            <div className={styles.forget_password}>Forget password?</div>
            </Link>	
		  </div>
      </>
    )
};

export default RememberMe;