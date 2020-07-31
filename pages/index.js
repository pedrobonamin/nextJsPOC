import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/Link'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 >
          <a href="https://nextjs.org">DevTter</a>
        </h1>
        <nav>
          <Link href="/timeline">
            <a>
              timeline
            </a>
          </Link>
        </nav>
      </main>
      <style jsx>
        {`
        h1 {
          text-align: center;
          font-size: 48px;
        }
        .another-title{
          color: #333;
          font-size: 24px;
        }

        nav {
          font-size: 24px;
          text-align: center;
        }
        
        a{
          color: #09f;
          text-decoration: none;
        }
        `}
      </style>
    </div>
  )
}
