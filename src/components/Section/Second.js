import Standings from '../Standings/Standings'
import Tournaments from '../Tournaments/Tournaments'
import './Second.scss'

const Second = () => {
  return (
    <div className="section">
      <div className="inner">
        <div className="wrap">
          <div className="flex">
            <div class="left">
              <h2>Турнирная таблица: Первенство Казахстана</h2>
              <Standings />
            </div>
            <div class="right">
              <h2>Турниры</h2>
              <Tournaments />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Second