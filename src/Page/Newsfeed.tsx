import React, { useLayoutEffect, createContext } from 'react'
import Form from '../components/Form'
import Post from '../components/Post'
import dataPost from '../data/data.json'
import { post } from '../types/post'

export const postContext = createContext({})

const Newsfeed = () => {
    const [data, setData] = React.useState([] as post[])
    useLayoutEffect(() => {
        if (dataPost.posts) {
            setData(dataPost?.posts)
        }
    }, [])
    return (
        <div className="newfeed">
            <div className='newfeed_container'>
                <postContext.Provider value={{setData, data}}>
                    <Form />
                    <div className="newfeed_item">
                        {data.map((post, index) => (
                            <Post key={index} {...post} />
                        ))}
                    </div>
                </postContext.Provider>

            </div>
        </div>
    )
}

export default Newsfeed