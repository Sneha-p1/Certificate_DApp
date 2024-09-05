import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className="flex gap-2 float-right mt-2">
        <a href="/">
        <input type="button" name="" value="Home" className="w-28 h-10 text-center hover:bg-sky-600 border-2 rounded hover:text-white shadow bg-white mr-5" /></a>
        <a href="/Certi">
        <input type="button" name="" value="Issue Certificate" className="w-36 h-10 text-center hover:bg-sky-600 border-2 rounded hover:text-white shadow bg-white mr-5" /></a>
    </div>
    </>
  )
}

export default Navbar