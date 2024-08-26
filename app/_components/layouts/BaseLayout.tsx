import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import ArticleIcon from '@mui/icons-material/Article';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ContactPageIcon from '@mui/icons-material/ContactPage'
import styles from "./BaseLayout.module.css"
import Link from "next/link";

const BaseLayout = ({...props}) => {
  return (
    <div className={styles.home}>
    <header className={styles.header}>
      <span>{props.title}</span>
    </header>
    <aside className={styles.sidebar}>
      <Link href={"/"} className={styles.sidebarBox}>
        <div className={styles.icon}>
        <HomeIcon/> 
        </div>
        <span className={styles.content}>Home</span>
      </Link>
      <Link href={"/about/applications"} className={styles.sidebarBox}>
        <div className={styles.icon}>
          <AppsIcon/>
        </div>
        <span className={styles.content}>Apps</span>
      </Link>
      <Link href={"/about/files"} className={styles.sidebarBox}>
        <div className={styles.icon}>
          <InsertDriveFileIcon/>
        </div>
        <span className={styles.content}>Files</span>
      </Link>
      <Link href={"/about/blogs"} className={styles.sidebarBox}>
        <div className={styles.icon}>
          <ArticleIcon/>
        </div>
        <span className={styles.content}>Blogs</span>
      </Link>
      <Link href={"/about/contacts"} className={styles.sidebarBox}>
        <div className={styles.icon}>
          <ContactPageIcon/>
        </div>
        <span className={styles.content}>Contacts</span>
      </Link>
    </aside>
    <main className={styles.main}>
      {props.children}
    </main>
  </div>
  )
}

export default BaseLayout