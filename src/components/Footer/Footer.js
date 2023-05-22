import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.inner}>
          <div className={styles.wrap}>
            <div className={styles.top}>
              <div className={styles.logo}>
                <img src="logo.png" alt="Logo" />
              </div>
              <p>
                Казахстанская лига любителей футбола<br />
                League of fans football of Kazakhstan
              </p>
              <ul>
                <li>
                  <a href="#">Главная</a>
                </li>
                <li>
                  <a href="#">Турнирная таблица</a>
                </li>
                <li>
                  <a href="#">Расписание</a>
                </li>
                <li>
                  <a href="#">Статистика игроков</a>
                </li>
                <li>
                  <a href="#">Галерея</a>
                </li>
                <li>
                  <a href="#">EMF</a>
                </li>
              </ul>
            </div>
            <div className={styles.bottom}>
              <p className={styles.copyright}>
                &copy; 2011-2023 Все права защищены Казахстанская Лига Любителей Футбола LLF-AST.KZ
              </p>
              <div className={styles.socialMedia}>
                <ul>
                  <li>
                    <a href='#'>
                      <img src='instagram-167-svgrepo-com.svg' alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='tiktok-svgrepo-com.svg' alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='youtube-168-svgrepo-com.svg' alt="Instagram" />
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <img src='telegram-svgrepo-com.svg' alt="Instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Footer