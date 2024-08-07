import React from 'react'

export default function Nav() {
  return (
    <>
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 bg-slate-800">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start rtl:justify-end">
        <a href="#" className="flex ms-2 md:me-24">
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">LosRoot</span>
        </a>
      </div>

    </div>
  </div>
</nav>
    </>
  )
}
