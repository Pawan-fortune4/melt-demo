import React from 'react'

interface IProps {}

export const Header: React.FC<IProps> = (): JSX.Element => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="text-lg font-semibold">Logo</div>
          <a href="#" className="hidden md:inline-block">
            Home
          </a>
          <a href="#" className="hidden md:inline-block">
            About
          </a>
          <a href="#" className="hidden md:inline-block">
            Services
          </a>
          <a href="#" className="hidden md:inline-block">
            Marketing
          </a>
          <a href="#" className="hidden md:inline-block">
            Media
          </a>
          <a href="#" className="hidden md:inline-block">
            Advertising
          </a>
          <a href="#" className="hidden md:inline-block">
            Research
          </a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu button */}
          <button className="text-white focus:outline-none">
            search
            {/* You can customize the button text or use an icon library for the menu icon */}
            Menu
          </button>
        </div>
      </nav>
    </header>
  )
}

// import React, { useState, useEffect } from 'react'

// export const Content = () => {
//   const [activeTab, setActiveTab] = useState('A')

//   const handleScroll = () => {
//     const scrollPosition = window.scrollY

//     if (scrollPosition < 500) {
//       setActiveTab('A')
//     } else if (scrollPosition < 1000) {
//       setActiveTab('B')
//     } else {
//       setActiveTab('C')
//     }
//   }

//   const handleTabClick = (tab: string) => {
//     setActiveTab(tab)

//     let scrollPosition = 0

//     if (tab === 'B') {
//       scrollPosition = 500
//     } else if (tab === 'C') {
//       scrollPosition = 1000
//     }

//     window.scrollTo({
//       top: scrollPosition,
//       behavior: 'smooth',
//     })
//   }

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <div className="flex justify-center items-center min-h-screen flex-col">
//       <div
//         className={`tab ${activeTab === 'A' ? 'active' : ''}`}
//         onClick={() => handleTabClick('A')}
//       >
//         Tab A
//       </div>
//       <div
//         className={`tab ${activeTab === 'B' ? 'active' : ''}`}
//         onClick={() => handleTabClick('B')}
//       >
//         Tab B
//       </div>
//       <div
//         className={`tab ${activeTab === 'C' ? 'active' : ''}`}
//         onClick={() => handleTabClick('C')}
//       >
//         Tab C
//       </div>
//     </div>
//   )
// }
