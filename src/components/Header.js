import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';


function Header(props) {
  const {markdown, setMarkdown} = props ;

  const handleDelete = () => {
    setMarkdown(" ")
  }
 const handleGo = () => {
   // window.location.href="https://www.markdownguide.org/basic-syntax/"
   window.open("https://www.markdownguide.org/basic-syntax/","_blank")
 }

  return (
    


    <div className='markdown__header'>
        <div className='btn-all'>
            <button onClick={handleDelete} className='btn-delete'>Delete</button>
            <CopyToClipboard text={markdown}>
                <button className='btn-copy'>Copy</button>
            </CopyToClipboard>
        </div>
        <div className='head'>
            <p className='deneme'>Markdown Previewer</p>
        </div>
        <div>
            <button onClick={handleGo} className='btn-go'>Basic Syntax</button>
        </div>  
    </div>
  )
}

export default Header