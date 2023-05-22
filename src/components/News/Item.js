import styles from './Item.module.scss'

const Item = (props) => {
  return (
    <div className={styles.item}>
      <img src={props.img} alt="" />
      <div className={styles.text}>
        <p>{props.title}</p>
        <span>{props.date}</span>
      </div>
    </div>
  )
}

export default Item