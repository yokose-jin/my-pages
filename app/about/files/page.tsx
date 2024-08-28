import React from 'react';
import FieldBase from '@/app/_components/elements/fieldBase/FieldBase';
import styles from "./files.module.css";
import BaseLayout from '@/app/_components/layouts/BaseLayout';
import FieldInfo from '@/app/_components/elements/fieldInfo/FieldInfo';

//各分野の最新記事３つをとってくる
function filesPage() {
  return (
    <BaseLayout title="Files">
      <main className={styles.main}>
        <FieldBase title="群論">
        </FieldBase>
        <FieldBase title="環論">
        </FieldBase>
        <FieldBase title="圏論">
          <FieldInfo info={"アーベル圏の定義から始まって,Mitchellの埋め込み定理までを解説します."} title={"アーベル圏入門"} link={"a"}/>
        </FieldBase>
        <FieldBase title="ホモロジー代数">
        </FieldBase>
      </main>
    </BaseLayout>
  )
}

export default filesPage