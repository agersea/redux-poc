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
      </Head>
      <header className={styles.header}>
        <Counter />
        <Link href="/listings"><h2>Listings</h2></Link>
      </header>
    </div>
  )
}

export default IndexPage
