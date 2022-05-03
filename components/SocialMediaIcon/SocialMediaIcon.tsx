const SocialMediaIcon = ({ Icon }: any) => {
  return (
    <div className="m-1 block w-fit cursor-pointer rounded-md p-2 text-primaryBlue transition-all duration-300 first:ml-0 hover:bg-primaryBlue hover:text-primaryDark lg:hover:animate-bounce">
      <Icon />
    </div>
  )
}

export default SocialMediaIcon
