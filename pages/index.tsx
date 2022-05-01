import Head from 'next/head'
import AnimatedButton from '../components/Button/AnimatedButton'
import Header from '../components/Header/Header'

const Home = () => {
  return (
    <div>
      <Head>
        <title>Resume Assistance</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="mx-auto h-screen w-[93%] pt-36 text-white ">
        <div>
          <h1 className="text-4xl font-bold md:text-5xl">
            Create a Professional Resume for Free!
          </h1>
          <p className="mt-5 text-lightTextColor md:w-[50%]">
            Do you want to create a resume quickly for free? We all are tired of
            exploring so many websites to build our resume, only to realise that
            they charge money in the end. That’s why we have built an
            application for building a professional resume to help you create
            your own professional resume for free!{' '}
          </p>

          <div className="justify-between md:flex">
            <AnimatedButton label="Get Started" customStyle="mt-11" />

            <div className="relative mt-10 h-[200px] rounded-lg border-2 border-primaryBlue/25 bg-secondaryDark/75 p-5 backdrop-blur-md md:h-[450px] md:w-[70%]">
              <img src="/images/resume-demo.png" alt="resume-demo" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
