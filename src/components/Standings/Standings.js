import { useState } from "react";
import styles from './Standings.module.scss'

const Standings = () => {
  const [ commands, setCommands ] = useState([
    {
      id: 1,
      tShirtColor: 'yellow',
      name: 'BIRLIK',
      progress: {
        current: 14,
        max: 18
      },
      i: 18, v: 14, n: 2, p: 2, m: '104-60', o: 44
    },
    {
      id: 2,
      tShirtColor: 'orange',
      name: 'STAHLBAU',
      progress: {
        current: 13,
        max: 18
      },
      i: 18, v: 13, n: 0, p: 5, m: '80-71', o: 39
    },
    {
      id: 3,
      tShirtColor: 'white',
      name: 'Allur Qostanai',
      progress: {
        current: 12,
        max: 18
      },
      i: 18, v: 14, n: 2, p: 2, m: '104-60', o: 44
    },
    {
      id: 4,
      tShirtColor: 'blue',
      name: 'QURMAN',
      progress: {
        current: 10,
        max: 18
      },
      i: 18, v: 13, n: 0, p: 5, m: '80-71', o: 39
    },
    {
      id: 5,
      tShirtColor: '#a458cc',
      name: 'Торговый дом Есиль',
      progress: {
        current: 6,
        max: 18
      },
      i: 18, v: 13, n: 0, p: 5, m: '80-71', o: 39
    },
    {
      id: 6,
      tShirtColor: '#a458cc',
      name: 'Торговый дом Есиль',
      progress: {
        current: 6,
        max: 18
      },
      i: 18, v: 13, n: 0, p: 5, m: '80-71', o: 39
    },
    {
      id: 7,
      tShirtColor: '#a458cc',
      name: 'Торговый дом Есиль',
      progress: {
        current: 6,
        max: 18
      },
      i: 18, v: 13, n: 0, p: 5, m: '80-71', o: 39
    },
    {
      id: 8,
      tShirtColor: '#a458cc',
      name: 'Торговый дом Есиль',
      progress: {
        current: 6,
        max: 18
      },
      i: 18, v: 13, n: 0, p: 5, m: '80-71', o: 39
    },
    {
      id: 9,
      tShirtColor: '#a458cc',
      name: 'Торговый дом Есиль',
      progress: {
        current: 6,
        max: 18
      },
      i: 18, v: 13, n: 0, p: 5, m: '80-71', o: 39
    },
    {
      id: 10,
      tShirtColor: '#a458cc',
      name: 'Торговый дом Есиль',
      progress: {
        current: 6,
        max: 18
      },
      i: 18, v: 13, n: 0, p: 5, m: '80-71', o: 39
    },
  ])
  return (
    <div className={ styles.standings }>
      <table>
        <thead>
          <tr>
            <th>Команды</th>
            <th>И</th>
            <th>В</th>
            <th>Н</th>
            <th>П</th>
            <th>М</th>
            <th>О</th>
          </tr>
        </thead>
        <tbody>
          {
            commands.map((i, v) => {
              return (
                <tr key={v}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {i.id}
                      <svg className={ styles.tShirt } xmlns="http://www.w3.org/2000/svg" width="42" height="44" viewBox="0 0 60 60" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5535 7.5C21.6434 8.00659 13.8447 11.0236 12.6044 12.1279C12.2558 12.4386 6.91312 25.2242 4.878 28.0399C4.63894 28.4236 14.0657 31.971 15.8169 32.6625V55.4993H44.1831V32.6625C45.9343 31.9711 55.3611 28.4236 55.122 28.0399C53.087 25.2237 47.7446 12.4382 47.3956 12.1279C46.1547 11.0236 38.3562 8.00657 36.4465 7.5C35.0463 12.8129 24.9531 12.8099 23.5542 7.5L23.5535 7.5Z"
                        fill={i.tShirtColor} stroke={i.tShirtColor == "white" ? '#000' : ''} />
                      </svg>
                      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                        {i.name}
                        <span className={ styles.current }
                          style={{left: `calc(${(i.progress.current * 100 / i.progress.max)}% - 15px)`}}>
                            {i.progress.current}</span>
                        <span className={ styles.max }>{i.progress.max}</span>
                        <progress id="file" max={i.progress.max} value={i.progress.current}
                          style={{ height: 24, accentColor:
                            i.progress.current > 10 ? '#2F5DFF' :
                            i.progress.current <= 10 && i.progress.current >= 7 ? '#808899' :
                            i.progress.current < 7 ? '#dd5509' : null
                          }}> 14% </progress>
                      </div>
                    </div>
                  </td>
                  <td>{i.i}</td>
                  <td>{i.v}</td>
                  <td>{i.n}</td>
                  <td>{i.p}</td>
                  <td>{i.m}</td>
                  <td>{i.o}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Standings