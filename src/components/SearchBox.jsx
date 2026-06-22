// import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchBox() {
  return (
    <>
        <div className="search_box">
            <input type="text" placeholder="Search for a course" />
            <button><FaSearch /></button>
        </div>
    </>
  )
}

export default SearchBox
