import React from 'react'

export default function InputSearchBar(props) {
  return (
    <div>
      <div>
        <input type="text" 
               className="input search-bar" 
               name="searchText" 
               placeholder="Search" 
               value={props.searchText} 
               onChange={(e) => props.handleSearchInput(e)} />
        </div>
    </div>
  )
}
