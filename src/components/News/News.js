import styles from './News.module.scss'
import Item from './Item'
import { useState } from 'react'

const News = () => {
  const [item, setItem] = useState([
    {
      img: 'news_1.jpg',
      title: 'Протокол решения ДК г. Шымкент от 12.04.2022 г.',
      date: '12 Апреля, 2022 года'
    },
    {
      img: 'news_1.jpg',
      title: 'Правильный выбор - Ерлан Джарылкасинов!',
      date: '08 Апреля, 2022 года'
    },
    {
      img: 'news_1.jpg',
      title: 'Казахстанская лига любителей футбола г. Нур–султан, приглашает всех желающих принять участие в Первенстве КЛЛФ по футзалу «Зима-2022».',
      date: '05 Апреля, 2022 года'
    },
    {
      img: 'news_1.jpg',
      title: 'Протокол решения дк Туркестанской области кллф от 3.04.2022 г.',
      date: '03 Апреля, 2022 года'
    }
  ])
  return (
    <div className={ styles.news }>
      {
        item.map((i, v) => {
          return (
            <Item key={v}
              img={i.img}
              title={i.title}
              date={i.date}
            />
          )
        })
      }
      <button className={ styles.allNews }>Все новости</button>
    </div>
  )
}

export default News