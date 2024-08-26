import { ReactNode } from 'react'
import styles from "./Mainthumbnail.module.css"
import Link from "next/link";

interface mainThubnailTypes {
  children: ReactNode;
}

const Mainthumbnail = ({children, ...props}:mainThubnailTypes) => {
  return (
    <div className={styles.content}>
        <h1 className={styles.title}>{children}</h1>
        <div className={styles.fileLink}><Link href={"/about/applications"}>""へ</Link></div>
        <div className={styles.fileAlg}>filealg</div>
    </div>
  )
}

export default Mainthumbnail