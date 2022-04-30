import { useState } from 'react'

const CustomHamburger = ({ toggle, handleToggle }: any) => {
  return (
    <button
      onClick={handleToggle}
      type="button"
      className={`hamburger group md:hidden ${toggle ? 'active' : ''}`}
    >
      <span className="line group-hover:bg-brightTextColor"></span>
      <span className="line group-hover:bg-brightTextColor"></span>
      <span className="line group-hover:bg-brightTextColor"></span>
    </button>
  )
}

export default CustomHamburger
