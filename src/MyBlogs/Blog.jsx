import React from 'react'
import data from './data'
import data1 from './data'
import './blog.css'
function Blog() {
  return (
    <div className='main'>
        <div className="main-blog">
 {data.map(({ title, content,author }) => {
                return (
                    <div className="blog">
                        <h2 className="title" >{title}</h2>
                        <p className="content">{content}</p>
                         <p className="content">{author}</p>
                    </div>
                )
          })}
          </div>
          <div className="main-content">
                <h2 className='content-title'>Content</h2>
                {data1.map(({ title1, description }) => {
                return (
                    <div className="blog1">
                        <h2 className="title" >{title1}</h2>
                        <p className="description1">{description}</p>
                    </div>
                )
          })}
                
                
          </div>
    </div>
  )
}

export default Blog