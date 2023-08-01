import { useState } from 'react';
import SuperLeague from '../../components/SuperLeague/SuperLeague';
import styles from './Schedule.module.scss';

const Schedule = () => {
  let [schedule, setSchedule] = useState([
    {
      date: '22/01/2022', time: '17:10',
      command1: { name: 'Allur Qostanay', tshirtColor: '#c1cb36' },
      command2: { name: 'QURMAN', tshirtColor: '#fe4501' },
    },
    {
      date: '24/01/2022', time: '17:10',
      command1: { name: 'Eurasian Resources Group', tshirtColor: '#3322ff' },
      command2: { name: 'BLACK YELLOW TEAM', tshirtColor: '#49c941' },
    },
    {
      date: '28/01/2022', time: '17:10',
      command1: { name: 'QazAvtoJol', tshirtColor: '#991941' },
      command2: { name: 'Казаэронавигация', tshirtColor: '#8154f7' },
    },
    {
      date: '30/01/2022', time: '17:10',
      command1: { name: 'Казахтелеком', tshirtColor: '#248dcd' },
      command2: { name: 'QURMAN', tshirtColor: '#fe4501' },
    },
  ])
  return (
    <div className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.wrap}>
          <h2>Расписание: Первенство г.Астана по футзалу «зима-22», Супер лига</h2>
          <div className={styles.flex}>
            <SuperLeague />
            <div className={styles.table}>
              <div className={styles.tablechild}>
                <div className={styles.thead}>
                  <div className={styles.left}>Дата время</div>
                  <div className={styles.center}>Матч</div>
                  <div className={styles.right}>Поле</div>
                </div>
                <div className={styles.tbody}>
                  <div className={styles.td}>1-Тур</div>
                  {
                    schedule.map((i, v) => {
                      return (
                        <div className={styles.td} key={v}>
                          <div className={styles.left}>{i.date}&nbsp;&nbsp;{i.time}</div>
                          <div className={styles.center}>
                            <div className={styles.first}>
                              <div className={styles.text}>{i.command1.name}</div>
                              <svg className={ styles.tShirt } xmlns="http://www.w3.org/2000/svg" width="42" height="44" viewBox="0 0 60 60" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.5535 7.5C21.6434 8.00659 13.8447 11.0236 12.6044 12.1279C12.2558 12.4386 6.91312 25.2242 4.878 28.0399C4.63894 28.4236 14.0657 31.971 15.8169 32.6625V55.4993H44.1831V32.6625C45.9343 31.9711 55.3611 28.4236 55.122 28.0399C53.087 25.2237 47.7446 12.4382 47.3956 12.1279C46.1547 11.0236 38.3562 8.00657 36.4465 7.5C35.0463 12.8129 24.9531 12.8099 23.5542 7.5L23.5535 7.5Z"
                                fill={i.command1.tshirtColor} stroke={i.command1.tshirtColor == "#ffffff" ? '#00000' : ''} />
                              </svg>
                            </div>
                            <div className={styles.vs}>vs</div>
                            <div className={styles.second}>
                              <svg className={ styles.tShirt } xmlns="http://www.w3.org/2000/svg" width="42" height="44" viewBox="0 0 60 60" fill="none">
                                <path fillRule="evenodd" clipRule="evenodd" d="M23.5535 7.5C21.6434 8.00659 13.8447 11.0236 12.6044 12.1279C12.2558 12.4386 6.91312 25.2242 4.878 28.0399C4.63894 28.4236 14.0657 31.971 15.8169 32.6625V55.4993H44.1831V32.6625C45.9343 31.9711 55.3611 28.4236 55.122 28.0399C53.087 25.2237 47.7446 12.4382 47.3956 12.1279C46.1547 11.0236 38.3562 8.00657 36.4465 7.5C35.0463 12.8129 24.9531 12.8099 23.5542 7.5L23.5535 7.5Z"
                                fill={i.command2.tshirtColor} stroke={i.command1.tshirtColor == "white" ? '#000' : ''} />
                              </svg>
                              <div className={styles.text}>{i.command2.name}</div>
                            </div>
                          </div>
                          <div className={styles.right}>Жекпе Жек</div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule