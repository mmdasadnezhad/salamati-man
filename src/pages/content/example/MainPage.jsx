import { Button } from 'react-bootstrap';
import styles from './MainPage.module.scss'
function MainPage() {
  return (
    <div className={`mx-2 ${styles.test}`}>
      
      <Button variant = "primary">click</Button>
      <div className={styles.title}></div>
    </div>
  );
}

export default MainPage;
