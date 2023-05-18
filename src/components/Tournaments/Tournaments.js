import styles from './Tournaments.module.scss'

const Tournaments = () => {
  return (
    <div className={ styles.tournaments }>
      <div className={ styles.currentGame }>
        <span className={ styles.textLive }>Live</span>
        <span className={ styles.textLeague }>Лига С</span>
        <div className={ styles.teams }>
          <div className={ styles.team1 }>
            <svg className={ styles.tShirt } xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5535 7.5C21.6434 8.00659 13.8447 11.0236 12.6044 12.1279C12.2558 12.4386 6.91312 25.2242 4.878 28.0399C4.63894 28.4236 14.0657 31.971 15.8169 32.6625V55.4993H44.1831V32.6625C45.9343 31.9711 55.3611 28.4236 55.122 28.0399C53.087 25.2237 47.7446 12.4382 47.3956 12.1279C46.1547 11.0236 38.3562 8.00657 36.4465 7.5C35.0463 12.8129 24.9531 12.8099 23.5542 7.5L23.5535 7.5Z"
              fill={'#FF5C00'} />
            </svg>
            <p>Birlik</p>
          </div>
          <div className={ styles.table }>
            <div className={ styles.score }>
              <span style={{ color: '#613CEA' }}>2</span>:<span style={{ color: '#000' }}>0</span>
            </div>
            <p><span style={{ color: '#FF5C00' }}>16’</span> Азамат Кайыржанов</p>
            <p><span style={{ color: '#FF5C00' }}>24’</span> Даурен Маскат</p>
          </div>
          <div className={ styles.team2 }>
            <svg className={ styles.tShirt } xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5535 7.5C21.6434 8.00659 13.8447 11.0236 12.6044 12.1279C12.2558 12.4386 6.91312 25.2242 4.878 28.0399C4.63894 28.4236 14.0657 31.971 15.8169 32.6625V55.4993H44.1831V32.6625C45.9343 31.9711 55.3611 28.4236 55.122 28.0399C53.087 25.2237 47.7446 12.4382 47.3956 12.1279C46.1547 11.0236 38.3562 8.00657 36.4465 7.5C35.0463 12.8129 24.9531 12.8099 23.5542 7.5L23.5535 7.5Z"
              fill={'#2F5DFF'} />
            </svg>
            <p>Zhalyn</p>
          </div>
        </div>
        <div className={ styles.more }>Подробнее</div>
      </div>
      <div className={ styles.result }>
        <p>Результаты 3 тура</p>
        <p>Четверг, 28 Апреля, 2022</p>
        <div className={ styles.game }>
          <div className={ styles.team1 }>Alash</div>
            <div className={ styles.score }>
              <span>3</span>:<span>2</span>
            </div>
          <div className={ styles.team1 }>Nurtas</div>
        </div>
        <div className={ styles.game }>
          <div className={ styles.team1 }>Allur Qostanai</div>
            <div className={ styles.score }>
              <span>1</span>:<span>2</span>
            </div>
          <div className={ styles.team1 }>QURMAN</div>
        </div>
        <div className={ styles.game }>
          <div className={ styles.team1 }>Alash</div>
            <div className={ styles.score }>
              <span>1</span>:<span>0</span>
            </div>
          <div className={ styles.team1 }>Казахтелеком</div>
        </div>
      </div>
      <h2>Calendar</h2>
    </div>
  )
}

export default Tournaments