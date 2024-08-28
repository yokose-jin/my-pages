import React from 'react'
import BaseLayout from '@/app/_components/layouts/BaseLayout';
import styles from "./application.module.css"
import FavoriteHeart from '@/app/_components/elements/favoriteHeart/FavoriteHeart';

function appsPage() {
  return (
    <BaseLayout title="Apps">
      <main className={styles.main}>
        <FavoriteHeart/>
      </main>
    </BaseLayout>
  )
}

export default appsPage