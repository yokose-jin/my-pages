import styles from "./home.module.css"
import AppsIcon from '@mui/icons-material/Apps';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import ArticleIcon from '@mui/icons-material/Article'
import Mainthumbnail from "./_components/elements/mainThumbnail/Mainthumbnail";
import BaseLayout from "@/app/_components/layouts/BaseLayout";

export default function Home() {
  return (
    <BaseLayout title="Home">
      
      <div className={styles.apps}>
        <h1 className={styles.title}><AppsIcon/>latest-Apps</h1>
        <Mainthumbnail>app1</Mainthumbnail>
        <Mainthumbnail>app2</Mainthumbnail>
        <Mainthumbnail>app3</Mainthumbnail>
      </div>
      <div className={styles.files}>
        <h1 className={styles.title}><InsertDriveFileIcon/>latest-Files</h1>
        <Mainthumbnail>file1</Mainthumbnail>
        <Mainthumbnail>file2</Mainthumbnail>
        <Mainthumbnail>file3</Mainthumbnail>
      </div>
      <div className={styles.blogs}>
        <h1 className={styles.title}><ArticleIcon/>latest-Blogs</h1>
        <Mainthumbnail>blog1</Mainthumbnail>
        <Mainthumbnail>blog2</Mainthumbnail>
        <Mainthumbnail>blog3</Mainthumbnail>
      </div>
    </BaseLayout>
  );
}
