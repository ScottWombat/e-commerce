import React, { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from "react-router-dom";
import styles from './remember-me.module.css'
import authReducer,{fetchToken,selectIsLoggedIn} from "src/store/authReducer";
import axios from 'axios';
import UserRepository , {IUser} from 'src/repositories/user-repository';
import ApiResponse from 'src/repositories/api-response';
import Toaster from 'src/components/ui/toast/toaster';
import { useAppDispatch,useAppSelector } from 'src/store/hooks';
import useLocalStorage from "src/utils/local_storage";
const RememberMe = () => {
  const dispatch = useAppDispatch();

  const [state, setState] = useState({
    toast: { message:'',type:''}
  });

  useEffect(() => {
    dispatch(fetchToken({'username':'johndoe','password':'secret'}));
    
  }, []);
  
  console.log("LDDD"+JSON.stringify(useAppSelector(selectIsLoggedIn)));
  const handleCheck1 = (e:any) => {
    alert("dd")
      //let data: IUser = {
      //  username: 'johndoe',
      //  password: 'secret'
     // };
     
      const repository: UserRepository = new UserRepository();
      const form = new FormData();
      form.append('username','johndoe');
      form.append('password','secret');
      setState({
        toast: { message: "Hold my beer", type: "info" }
      })
      /*
      repository.post(form).then((response: ApiResponse<IUser>) => {
        console.log("hee");
        console.log(response);
       
      });
      */
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
        
			<input type="checkbox" id="ossm" name="ossm" onChange={handleCheck1}/> 
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