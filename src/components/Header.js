import React from 'react'

function Header() {
  return (
    <div className='markdown__header'>
        
        <div className='btn-all'>
            <button className='btn-delete'>Delete</button>
            <button className='btn-copy'>Copy</button>
        </div>
        <div className='head'>
            <p className='deneme'>Markdown Previewer</p>
        </div>
        <div>
            <button className='btn-go'>Basic Syntax</button>
        </div>  
    </div>
  )
}

export default Header