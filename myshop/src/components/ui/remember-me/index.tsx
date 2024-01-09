import styles from './remember-me.module.css'
const RememberMe = () => {
    const handleCheck = (e:any) => {
		console.log('d');
	}
    return(
      <div className={styles.remember_root}>
			<form className={styles.myform}>	
        
			<input type="checkbox" id="ossm" name="ossm"/> 
            <label>Remember me</label> 
            
            </form>	
            <div className={styles.forget_password}>Forget password?</div>	
		  </div>
    )
};

export default RememberMe;