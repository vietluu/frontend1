import React from 'react'
import { post } from  '../types/post'	

const Post = (Props: post) => {
  return (
      <div>
            <h3>{Props.author}</h3>
            <p>{Props.title}</p>
            <p>{Props.content}</p>
    </div>
  )
}

export default Post