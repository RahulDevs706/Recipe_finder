import styles from "./Message.module.css"

const Message = ({text, status}) => {
  return (
    <span className={ status === "success"? styles.success: styles.fail  }>{text}</span>
  )
}


export default Message