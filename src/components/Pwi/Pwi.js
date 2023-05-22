import { useState } from 'react'
import styles from './Pwi.module.scss'

const Pwi = () => {
  const [players, setPlayers] = useState([
    {
      fullName: 'Гусейнов Вагиф',
      number: 15,
      tShirtColor: '#2F5DFF',
      team: '1',
      games: 18,
      goals: 26
    },
    {
      fullName: 'Жолшорин Ахат',
      number: 7,
      tShirtColor: '#FF5C00',
      team: '1',
      games: 18,
      goals: 24
    },
    {
      fullName: 'Тулепов Абылай',
      number: 11,
      tShirtColor: '#FFF500',
      team: '1',
      games: 18,
      goals: 20
    },
    {
      fullName: 'Сейтжан Жанибек',
      number: 15,
      tShirtColor: '#FFF',
      team: '1',
      games: 18,
      goals: 19
    },
    {
      fullName: 'Сапабек Аслан',
      number: 11,
      tShirtColor: '#2F5DFF',
      team: '1',
      games: 18,
      goals: 17
    },
  ])
  return (
    <div className={ styles.pwi }>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Игрок</th>
            <th>Команда</th>
            <th>Игры</th>
            <th>Голы</th>
          </tr>
        </thead>
        <tbody>
          {
            players.map((i, v) => {
              return (
                <tr key={v}>
                  <td>{v + 1}</td>
                  <td>
                    <div className={styles.name}>
                      <span>{i.number}</span>
                      <svg className={ styles.tShirt } xmlns="http://www.w3.org/2000/svg" width="55" height="56" viewBox="0 0 60 60" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M23.5535 7.5C21.6434 8.00659 13.8447 11.0236 12.6044 12.1279C12.2558 12.4386 6.91312 25.2242 4.878 28.0399C4.63894 28.4236 14.0657 31.971 15.8169 32.6625V55.4993H44.1831V32.6625C45.9343 31.9711 55.3611 28.4236 55.122 28.0399C53.087 25.2237 47.7446 12.4382 47.3956 12.1279C46.1547 11.0236 38.3562 8.00657 36.4465 7.5C35.0463 12.8129 24.9531 12.8099 23.5542 7.5L23.5535 7.5Z"
                        fill={i.tShirtColor} stroke={
                          i.tShirtColor == "white" || i.tShirtColor == "#FFF" || i.tShirtColor == "#FFFFFF" ||
                          i.tShirtColor == "#fff" || i.tShirtColor == "#ffffff"
                           ? '#000' : ''
                          } />
                      </svg>
                      {i.fullName}
                    </div>
                  </td>
                  <td>{i.team}</td>
                  <td>{i.games}</td>
                  <td>{i.goals}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <div className={ styles.btnLR }>
        <button className={ styles.btnL }></button>
        <button className={ styles.btnR }></button>
      </div>
    </div>
  )
}

export default Pwi