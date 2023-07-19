import SuperLeague from '../../components/SuperLeague/SuperLeague';
import styles from './Schedule.module.scss';

const Schedule = () => {
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.wrap}>
          <h2>Расписание: Первенство г.Астана по футзалу «зима-22», Супер лига</h2>
          <div className={styles.flex}>
            <SuperLeague />
            <div className={styles.table}>
              <table>
                <thead>
                  <tr>
                    <th>Дата время</th>
                    <th>Матч</th>
                    <th>Поле</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan='3'>1-Тур</td>
                  </tr>
                  <tr>
                    <td>22/01/2022 17 : 10</td>
                    <td>
                      BIRLIK
                      <svg className={ styles.tShirt } xmlns="http://www.w3.org/2000/svg" width="42" height="44" viewBox="0 0 60 60" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.5535 7.5C21.6434 8.00659 13.8447 11.0236 12.6044 12.1279C12.2558 12.4386 6.91312 25.2242 4.878 28.0399C4.63894 28.4236 14.0657 31.971 15.8169 32.6625V55.4993H44.1831V32.6625C45.9343 31.9711 55.3611 28.4236 55.122 28.0399C53.087 25.2237 47.7446 12.4382 47.3956 12.1279C46.1547 11.0236 38.3562 8.00657 36.4465 7.5C35.0463 12.8129 24.9531 12.8099 23.5542 7.5L23.5535 7.5Z"
                        fill={'#558aac'} stroke={'#ffeffe' == "white" ? '#000' : ''} />
                      </svg>
                      vs
                      <svg className={ styles.tShirt } xmlns="http://www.w3.org/2000/svg" width="42" height="44" viewBox="0 0 60 60" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.5535 7.5C21.6434 8.00659 13.8447 11.0236 12.6044 12.1279C12.2558 12.4386 6.91312 25.2242 4.878 28.0399C4.63894 28.4236 14.0657 31.971 15.8169 32.6625V55.4993H44.1831V32.6625C45.9343 31.9711 55.3611 28.4236 55.122 28.0399C53.087 25.2237 47.7446 12.4382 47.3956 12.1279C46.1547 11.0236 38.3562 8.00657 36.4465 7.5C35.0463 12.8129 24.9531 12.8099 23.5542 7.5L23.5535 7.5Z"
                        fill={'#fe4501'} stroke={'#ffeffe' == "white" ? '#000' : ''} />
                      </svg>
                      STAHLBAU
                    </td>
                    <td>
                      Жекпе Жек
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule