import { Link } from "react-router-dom";
import styles from './remember-me.module.css'
import authReducer,{fetchToken} from "src/store/authReducer";
import axios from 'axios';
import UserRepository , {IUser} from 'src/repositories/user-repository';
import ApiResponse from 'src/repositories/api-response';
const RememberMe = () => {
    const handleCheck = (e:any) => {
      let data: IUser = {
        username: 'johndoe',
        password: 'secret'
      };
      const repository: UserRepository = new UserRepository();
      repository.post(data).then((response: ApiResponse<IUser>) => {
        console.log(response);
       
      });
      
    };
    const handleCheck1 = (e:any) => {
		console.log('d');
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
      console.log("AXIOS ERROR: ", err);
    });
    
    
    console.log('dk');
	}
    return(
      <div className={styles.remember_root}>
			<form className={styles.myform}>	
        
			<input type="checkbox" id="ossm" name="ossm" onChange={handleCheck}/> 
            <label>Remember me</label> 
            
            </form>	
            <Link to="/forget-password">
            <div className={styles.forget_password}>Forget password?</div>
            </Link>	
		  </div>
    )
};

export default RememberMe;