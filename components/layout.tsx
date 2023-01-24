import styles from "./layout.module.css"
import Head from 'next/head';
import Image from 'next/image';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Longsur - 我的世界基岩版服务器';
export const siteTitle = 'longsur服务器官方网站';

const Layout = ({ children, home }: any) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/title.png"
              className={utilStyles.borderNormal}
              height={144}
              width={344}
              alt=""
            />
            <h1 className={utilStyles.heading1Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/title.png"
                className={utilStyles.borderCircle}
                height={108}
                width={308}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}

export default Layout