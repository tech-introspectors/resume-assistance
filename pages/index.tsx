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
      <div className="flex h-screen w-full items-center justify-center text-white">
        <h1 className="text-xl">Resume Assistance</h1>
      </div>
    </div>
  )
}

export default Home
