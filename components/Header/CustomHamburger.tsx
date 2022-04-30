import { useState } from 'react'

const CustomHamburger = () => {
  const [toggle, setToggle] = useState(false)

  const handleToggle = () => {
    setToggle(!toggle)
  }

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
