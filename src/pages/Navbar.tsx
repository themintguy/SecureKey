import  { useEffect, useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
        setIsMenuOpen(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-[var(--color-night)] text-[var(--color-leaf)] shadow-md'>
      <div className='text-2xl font-extrabold tracking-wide'>
        <span className='text-[var(--color-ocean)]'>Secure</span>Key
      </div>

      {isMobile && (
        <button
          className='text-3xl focus:outline-none text-[var(--color-ocean)]'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'X' : '☰'}
        </button>
      )}

      <ul
        className={`flex gap-8 font-medium transition-all duration-300 ${
          isMobile
            ? `absolute left-0 top-16 w-full bg-[var(--color-night)] flex flex-col items-center py-6 ${
                isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`
            : 'items-center'
        }`}
      >
        <li className='hover:text-[var(--color-ocean)] cursor-pointer transition'>
          Home
        </li>
        <a href='/about'>
          <li className='hover:text-[var(--color-sunset)] cursor-pointer transition'>
            About
          </li>
        </a>
        <li className='hover:text-[var(--color-ocean)] cursor-pointer transition'>
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar