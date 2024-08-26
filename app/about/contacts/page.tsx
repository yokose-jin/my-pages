import React from 'react'
import styles from "./contacts.module.css"
import BaseLayout from '@/app/_components/layouts/BaseLayout'
import GitHubIcon from "@mui/icons-material/GitHub"
import Link from 'next/link'
import Image from "next/image";

const contactsPage = () => {
  return (
    <BaseLayout title="Contacts">
        <main className={styles.main}>
          <Link href={"s"} className={styles.link} target='_blank'>
            <Image src='/img/icons/zenn_icon.svg' alt="" width={100} height={100}/>
            <div className='text-cyan-500'>
              zenn
            </div>
          </Link>
          <Link href={"s"} className={styles.link} target='_blank'>
          <Image src='/img/icons/qiita_icon.png' alt="" width={100} height={100}/>
            <div className='text-lime-400'>
              Qiita
            </div>
          </Link>
          <Link href={"s"} className={styles.link} target='_blank'>
          <Image src='/img/icons/note_icon.svg' alt="" width={100} height={100}/>
            <div>
              note
            </div>
          </Link>
          <Link href={"s"} className={styles.link} target='_blank'>
            <GitHubIcon className={styles.icon}/>
            <div className='text-purple-800'>
              GitHub
            </div>
          </Link>
        </main>
    </BaseLayout>
  )
}

export default contactsPage