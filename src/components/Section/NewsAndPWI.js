import News from "../../components/News/News"
import styles from './NewsAndPWI.module.scss'

const NewsAndPWI = () => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.wrap}>
          <div className={styles.flex}>
            <div className={styles.left}>
              <h2>Новости</h2>
              <News />
            </div>
            <div className={styles.right}>
              <h2>Игроки с травмами</h2>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsAndPWI