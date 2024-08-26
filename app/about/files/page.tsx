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
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"巡回群入門"} link={"a"}/>
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"問題"} link={"a"}/>
        </FieldBase>
        <FieldBase title="環論">
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
        </FieldBase>
        <FieldBase title="圏論">
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
        </FieldBase>
        <FieldBase title="ホモロジー代数">
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
          <FieldInfo info={"群の定義から始まって準同型定理までを解説します."} title={"群論入門"} link={"a"}/>
        </FieldBase>
      </main>
    </BaseLayout>
  )
}

export default filesPage