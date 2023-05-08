import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <header className={styles.header}>
        <Counter />
        <Link href="/listings"><h2>Click Here for Redux POC</h2></Link>
      </header>
    </div>
  )
}

export default IndexPage
