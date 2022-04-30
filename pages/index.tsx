import Head from 'next/head'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Resume Assistance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>Let's start create Resume</main>
    </div>
  )
}

export default Home
