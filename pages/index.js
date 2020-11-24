import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tree Farm for Photos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Tree Farm for Photos
        </h1>

        <p className={styles.description}>
          We're Currently under construction. We'll be back soon!
        </p>

        <div className={styles.grid}>
         <h3>If you are interested in shooting holiday photos on a tree farm get in touch.&nbsp;
           <a href="mailto:jackiewieczorek@gmail.com" style={{  color: 'white', display: 'block', padding: '1em 4em', backgroundColor: 'green', textAlign:'center', margin: '1em auto', width: '320px', borderRadius: '4px'}}>Email Us</a>

         </h3>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Copyright &copy;2020 - Tree Farms For Photos</p>
      </footer>
    </div>
  )
}
