import Link from 'next/link'
import { SVG_Logo } from './SVG_Logo'
import { BsGithub } from 'react-icons/bs'
import CustomHamburger from './CustomHamburger'

const Header = () => {
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

        <CustomHamburger />
      </div>
    </div>
  )
}

export default Header
