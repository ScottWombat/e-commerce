import styles from './or-seperator.module.css'
const OrSeperator = () => {
    return(
        <div className={styles.seperator }><div className={styles.or + " " + styles.or_x}>or</div></div>
    )
};

export default OrSeperator;