import styles from './home.module.css'
export const HomePage = () =>{
    return(
       <div className={styles.wrapper}>
         <img 
         className={styles.banner}
         src= '/images/photo2.jpg' alt='gfg' /> 
       </div>
    )
}