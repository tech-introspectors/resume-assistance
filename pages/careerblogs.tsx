import Head from 'next/head'
import Header from '../components/Header/Header'

const Careerblogs = () => {
  return (
    <>
      <Head>
        <title>Resume Assistance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen w-full items-center justify-center text-white">
        <h1 className="text-xl">Careerblogs</h1>
      </div>
    </>
  )
}

export default Careerblogs
