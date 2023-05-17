import { Link } from "react-router-dom";
import style from './Header.module.scss';
import { useState } from "react";

const Header = () => {
  const [citiesDrop, setCitiesDrop] = useState(false)
  const [cities, setCities] = useState([
    {title: 'Астана', link: 'astana', selected: true},
    {title: 'Алматы', link: 'almaty', selected: false},
    {title: 'Шымкент', link: 'shymkent', selected: false},
    {title: 'Қызылорда', link: 'qyzylorda', selected: false},
    {title: 'Қарағанды', link: 'qaragandy', selected: false},
    {title: 'Атырау', link: 'atyrau', selected: false},
    {title: 'Түркістан', link: 'turkistan', selected: false},
    {title: 'Жезқазған', link: 'zhezqazgan', selected: false},
    {title: 'Көкшетау', link: 'kokshetau', selected: false}
  ])
  return (
    <header className={style.header}>
      <div className={style.inner}>
        <div className={style.wrap}>
          <nav>
            <ul>
              <li className={style.active}>Главная</li>
              {/* <li><Link to="/">Главная</Link></li> */}
              <li>Турнирная таблица</li>
              {/* <li><Link to="/blogs">Турнирная таблица</Link></li> */}
              <li>Расписание</li>
              {/* <li><Link to="/contact">Расписание</Link></li> */}
              <li>Статистика игроков</li>
              {/* <li><Link to="/contact">Статистика игроков</Link></li> */}
              <li>Галерея</li>
              {/* <li><Link to="/contact">Галерея</Link></li> */}
              <li>EMF</li>
              {/* <li><Link to="/contact">EMF</Link></li> */}
              <li>О Нас</li>
              {/* <li><Link to="/contact">О Нас</Link></li> */}
              <li>Отзывы</li>
              {/* <li><Link to="/contact">Отзывы</Link></li> */}
            </ul>
          </nav>
          <div className={style.citiesDropdown} onClick={() => {
            setCitiesDrop(!citiesDrop)
          }}>
            <div className={`${style.selectedCity} ${citiesDrop ? style.active : ''}`}>Астана</div>
            {
              citiesDrop &&
              <ul>
                {
                  cities.map((i ,v) => {
                    return (
                      <li key={v} className={ i.selected ? style.activeLink : '' }><a href={i.link}>{i.title}</a></li>
                    )
                  })
                }
              </ul>
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header