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
        current: 14,
        max: 18
      },
      i: 18, v: 14, n: 2, p: 2, m: '104-60', o: 44
    },
    {
      id: 4,
      tShirtColor: 'blue',
      name: 'QURMAN',
      progress: {
        current: 13,
        max: 18
      },
      i: 18, v: 13, n: 0, p: 5, m: '80-71', o: 39
    },
  ])
  return (
    <div className={ styles.standings }>
      <table>
          <tr>
            <th>Команды</th>
            <th>И</th>
            <th>В</th>
            <th>Н</th>
            <th>П</th>
            <th>М</th>
            <th>О</th>
          </tr>
          {
            commands.map((i, v) => {
              return (
                <tr key={v}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {i.id}
                      <span className={styles.tShirt} style={{ backgroundColor: i.tShirtColor, border: i.tShirtColor == "white" ? '1px solid black' : 'none' }}></span>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {i.name}
                        <progress id="file" max={i.progress.max} value={i.progress.current} style={{ height: 24 }}> 14% </progress>
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
      </table>
    </div>
  )
}

export default Standings