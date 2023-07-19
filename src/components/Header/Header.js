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
              <li className={style.active}>
                <Link to="/">Главная</Link>
              </li>
              <li><Link to="/">Турнирная таблица</Link></li>
              <li><Link to="/schedule">Расписание</Link></li>
              <li><Link to="/">Статистика игроков</Link></li>
              <li><Link to="/">Галерея</Link></li>
              <li><Link to="/">EMF</Link></li>
              <li><Link to="/">О Нас</Link></li>
              <li><Link to="/">Отзывы</Link></li>
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