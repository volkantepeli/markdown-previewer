import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import Header from './Header';

function Main() {
  const [markdown,setMarkdown] = useState("this is user input");
  
  return (
    <div>
        <Header />
        <div className='markdown__container'>
            <textarea 
            value={markdown}
            onChange={e => setMarkdown(e.target.value)}
            />
            <ReactMarkdown 
            children={markdown} 
            id="preview" 
            className="markdown__preview"/>
        </div>
    </div>
  )
}


export default Main