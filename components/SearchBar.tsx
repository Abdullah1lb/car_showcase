"use client"

import { useState } from "react"
import { SearchManufacturer } from "."

const SearchBar = () => {
    const [manufacturer, setManufacturer] = useState('')
    const handleSearch=()=>{

    }
  return (
   <form action="" onSubmit={handleSearch} className="searchbar">
    <div className="searchbar__item">
        <SearchManufacturer
        manufacturer={manufacturer}
        setManufacturer={setManufacturer}
        />
    </div>
   </form>
  )
}

export default SearchBar