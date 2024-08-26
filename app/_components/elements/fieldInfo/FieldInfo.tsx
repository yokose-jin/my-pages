import React from 'react'
import styles from "./fieldInfo.module.css"
import InsertDriveFile from '@mui/icons-material/InsertDriveFile'
import Link from 'next/link'

function FieldInfo({...props}) {
  return (
    <div className={styles.fileInfo}>
        <div className={styles.image}><Link href={props.link} target='_blank'><InsertDriveFile  className={styles.icon}/></Link></div>
        <div className={styles.info}>{props.info}</div>
        <span className={styles.title}>{props.title}</span>
    </div>
  )
}

export default FieldInfo