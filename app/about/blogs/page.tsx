import React from 'react'
import BaseLayout from '@/app/_components/layouts/BaseLayout'
import styles from "./blogs.module.css"
import FieldBase from '@/app/_components/elements/fieldBase/FieldBase'
import Link from 'next/link'

function blogsPage() {
  return (
    <BaseLayout title="Blogs">
        <main className={styles.main}>
            <FieldBase title={<Link href={""} className="text-sky-700">数学ブログ</Link>}>
            </FieldBase>
            <FieldBase title={<Link href={""} className="text-sky-700">zennの記事</Link>}>
            </FieldBase>
            <FieldBase title={<Link href={""} className="text-sky-700">Qiitaの記事</Link>}>
            </FieldBase>
            <FieldBase title={<Link href={""} className="text-sky-700">noteの記事</Link>}>
            </FieldBase>
        </main>
    </BaseLayout>
  )
}

export default blogsPage