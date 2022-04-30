import Link from 'next/link'
import { SVG_Logo } from './SVG_Logo'
import { BsGithub } from 'react-icons/bs'
import CustomHamburger from './CustomHamburger'
import { useState } from 'react'
import CustomeBorder from '../CustomeBorder'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div className="fixed w-full py-3 px-4 shadow-lg shadow-primaryBlue md:py-4 md:px-7 lg:px-10">
      <div className="flex items-center justify-between">
        <div className={`flex items-center`}>
          <SVG_Logo customStyle="w-7 h-7 md:w-10 md:h-10" />
          <Link href={'/'}>
            <a>
              <h1
                className={`ml-2 text-base font-bold text-primaryBlue md:text-xl`}
              >
                Resume Assistance
              </h1>
            </a>
          </Link>
        </div>

        {/* Nav for desktop */}
        <ul className="hidden space-x-6 md:flex">
          <li className="headerLink">
            <Link href={'/resumetemplates'}>
              <a>Resume Templates</a>
            </Link>
          </li>
          <li className="headerLink">
            <Link href={'/coverletters'}>
              <a>Cover Letters</a>
            </Link>
          </li>
          <li className="headerLink">
            <Link href={'/careerblogs'}>
              <a>Career Blogs</a>
            </Link>
          </li>

          <li className="flex items-center">
            <Link
              href={'https://github.com/tech-introspectors/resume-assistance'}
              passHref
            >
              <a target="_blank">
                <BsGithub className="ml-5 h-6 w-6 text-lightTextColor transition duration-200 hover:text-brightTextColor" />
              </a>
            </Link>
          </li>
        </ul>

        {/* Nav for mobile */}

        <CustomHamburger toggle={toggle} handleToggle={handleToggle} />
        <div
          className={`${
            toggle ? 'translate-x-0' : '-translate-x-96'
          } absolute left-0 top-0 bottom-0 h-screen w-[70%] bg-secondaryDark  p-6 text-white transition duration-300 sm:w-[40%] md:hidden`}
        >
          <div className={`flex items-center`}>
            <SVG_Logo customStyle="w-7 h-7 md:w-10 md:h-10" />
            <Link href={'/'}>
              <a>
                <h1
                  className={`ml-2 text-base font-bold text-primaryBlue md:text-xl`}
                >
                  Resume Assistance
                </h1>
              </a>
            </Link>
          </div>
          <CustomeBorder customStyle="mt-5" />
          <div className="mt-5 flex h-[90%] flex-col justify-between ">
            <div className="flex flex-col space-y-5">
              <Link href={'/resumetemplates'}>
                <a className="headerLink" onClick={handleToggle}>
                  Resume Templates
                </a>
              </Link>

              <Link href={'/coverletters'}>
                <a className="headerLink" onClick={handleToggle}>
                  Cover Letters
                </a>
              </Link>

              <Link href={'/careerblogs'}>
                <a className="headerLink" onClick={handleToggle}>
                  Career Blogs
                </a>
              </Link>
            </div>

            <div className="py-4">
              <CustomeBorder customStyle="mb-5" />
              <Link
                href={'https://github.com/tech-introspectors/resume-assistance'}
              >
                <a
                  onClick={handleToggle}
                  target="_blank"
                  className="flex space-x-3"
                >
                  <BsGithub className="h-6 w-6 text-lightTextColor transition duration-200 hover:text-brightTextColor" />

                  <span className="text-lightTextColor">GitHub</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
