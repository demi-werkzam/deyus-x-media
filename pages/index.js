import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>COMING SOON</title>
        <meta name="description" content="DEYUS EX MEDIA" />
        <link rel="icon" href="/dem_favicon.png" />
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>
         COMING SOON.
        </h1>
        <span>
      <Image src="/dem_logo2.svg" alt="Deyus Ex Media Logo" width={800} height={600} />
      </span>
      </main>
    </div>
  )
}
