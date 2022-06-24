import React, { useState, useEffect, useRef } from 'react'

import './FilterSearchBar.scss'


export default function FilterSearchBar() {
    const [seach, setSeach] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
      }

    return (
        <div className="filterSearchBar">
            <form className="filterSearchBar-form" onSubmit={handleSubmit}>
                <div className="filterSearchBar-div">
                    <input onChange={(e) => setSeach(e.target.value)}
                        type="text" className="InstructorName" id="InstructorName" placeholder="type instructor name here" required />
                </div>
                <div>
                    <button type="submit" id="searchInstructor" >Search instructor</button>
                </div>
            </form>
        </div>
    )
}
