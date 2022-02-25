import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react';
import 'usfm-editor/dist/style.css'
import { createUsfmEditor } from 'usfm-editor'

const loading = String.raw`
\id XXA LOADING
\ide UTF-8
\c 1
\p
\v 1 Loading, please wait...
`.trimStart()

const CustomEditor = createUsfmEditor()

export default function Home() {
  const [sourceString, setSourceString] = useState(loading);
  useEffect(() => {
    window.fetch("https://git.door43.org/unfoldingWord/en_ult/raw/tag/25/27-DAN.usfm")
          .then(r=> r.text())
          .then(text => { setSourceString(text) })
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>USFM Editor Next.js demo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <CustomEditor
          usfmString={sourceString}
          />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/aunger/editor-demo-nextjs">
          https://github.com/aunger/editor-demo-nextjs
        </a>
      </footer>
    </div>
  )
}
