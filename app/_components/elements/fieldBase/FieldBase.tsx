import React, {HTMLAttributes, ReactNode} from 'react'
import styles from "./fieldBase.module.css"

interface FieldBaseTypes extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

const FieldBase=({...props})=> {
  return (
    <div className={styles.main}>
      <div className={styles.fieldTitle}>{props.title}</div>
      <div className={styles.files}>
        {props.children}
      </div>
    </div>
  )
}

export default FieldBase