import { useState } from 'react'
import styles from './SuperLeague.module.scss'

const SuperLeague = () => {
  const [superLeagueList, setSuperLeagueList] = useState([
    {
      title: 'Супер лига',
      active: true
    },
    {
      title: 'Лига A',
      active: false
    },
    {
      title: 'Лига B',
      active: false
    },
    {
      title: 'Лига C',
      active: false
    },
    {
      title: 'Лига D',
      active: false
    },
    {
      title: 'Лига E',
      active: false
    },
    {
      title: 'Лига F',
      active: false
    },
  ])
  return (
    <>
      <ul className={ styles.superLeague }>
        {
          superLeagueList.map((i, v) => {
            return (
              <li key={v} className={ i.active ? styles.active : '' }>{i.title}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default SuperLeague