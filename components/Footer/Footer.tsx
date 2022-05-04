import { SVG_Logo } from '../Header/SVG_Logo'
import SocialMediaIcon from '../SocialMediaIcon/SocialMediaIcon'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { BiCopyright } from 'react-icons/bi'
import { RiFacebookFill, RiLinkedinFill } from 'react-icons/ri'
import { footerData } from '../../constants/footerData'
import CustomBorder from '../CustomBorder'

const Footer = () => {
  return (
    <div className="mx-auto mt-10 h-auto w-full md:w-[90%]">
      <div className="h-full px-5 py-5 md:flex md:justify-between ">
        <div>
          <div className="flex items-center">
            <SVG_Logo customStyle="w-7 h-7 md:w-10 md:h-10" />
            <h1 className="ml-2 text-base font-bold text-primaryBlue md:text-xl">
              Resume Assistance
            </h1>
          </div>

          <p className="mt-5 text-lightTextColor">
            Build your resume instantly free!
          </p>
          <div className="mt-2 mb-5 flex md:mb-0">
            <SocialMediaIcon Icon={BsInstagram} />
            <SocialMediaIcon Icon={RiFacebookFill} />
            <SocialMediaIcon Icon={BsTwitter} />
            <SocialMediaIcon Icon={RiLinkedinFill} />
          </div>
        </div>
        {footerData.map((data, index) => {
          return (
            <div key={index}>
              <h1 className="footer_title">{data.section.title}</h1>
              <ul>
                {data.section.listItem.map((dataItem, key) => {
                  return (
                    <li key={key} className="footer_link group">
                      <a className="link" href={dataItem.link}>
                        {dataItem.item}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          )
        })}
      </div>
      <div className="px-5 md:px-0">
        <CustomBorder customStyle="px-5" />
        <div className="py-5 px-5 md:py-7 md:px-0">
          <div className="flex items-center justify-center gap-1">
            <BiCopyright className="hidden text-lightTextColor sm:block" />
            <p className=" text-center text-lightTextColor">
              Developed by{' '}
              <span className="text-primaryBlue">Team Introspectors</span>. All
              rights reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
