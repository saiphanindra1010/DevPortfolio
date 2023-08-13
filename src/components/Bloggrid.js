import React from 'react'
import "./styles/Blog.css"
import { Link } from 'react-router-dom'
import { GET_ALL_POSTS } from '../gqlRequests/getpostdata'
import { useQuery } from '@apollo/client'

export const Bloggrid = () => {
const openLink=(x)=>
{

    // console.log(process.env.REACT_APP_Blog_api_key)
    // console.log(x)

window.open(x)
}
const {data,loading} =useQuery(GET_ALL_POSTS)
// const data =useQuery(GET_ALL_POSTS)
 
// console.log(BlogApi.data.user.publication.posts.slug)
// console.log(data)
// if(loading)return <h1>Loading</h1>
// if(error){


        // console.log()

    // if(BlogApi.data == undefined)
    // {
    //     console.log("BlogApi.data.user.publication.posts")
    // }
    if (loading) return 'Loading...';
    // if (error) return `Error! ${error.message}`;

  return ( 
   
    <div className='container'>
    <div className="posts"> 

      {/*GQL fetch  */}
{

// console.log(data.user.publication.posts[0].slug)
data.user.publication.posts.map(posts=>
    {
        return(
        // console.log(posts.slug)
        <div className="post">
        <img className="post-image" src={posts.coverImage} alt="Logo" />
            <div className="post-content">
                <div className="post-inside">
                    <h3 className="post-title">{posts.title}</h3>
                    <p className="post-excerpt">
                        {posts.brief}
                    </p>
                    <button className="btn post-button" onClick={()=>openLink("https://"+process.env.REACT_APP_BLog_user_name+".hashnode.dev/"+posts.slug)}>
                        Read more
                    </button>
                </div>
            </div>
        </div>
        )
    }
    )

}

    <div className="post">
    <img className="post-image" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1648991308634/CnVdgv-oK.jpg" alt="Logo" />
        <div className="post-content">
            <div className="post-inside">
                <h3 className="post-title">Lorem ipsum dolor</h3>
                <p className="post-excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis et sequi nulla sit totam, quidem consequuntur maiores sapiente assumenda.
                </p>
                <button className="btn post-button" onClick={()=>openLink("")}>
                    Read more
                </button>
            </div>
        </div>
    </div>

    {/* <div className="post">
<img className="post-image" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1645378843265/0YWQbCTZX.png" alt="Logo" />
        <div className="post-content">
            <div className="post-inside">
                <h3 className="post-title">Lorem ipsum dolor</h3>
                <p className="post-excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis et sequi nulla sit totam, quidem consequuntur maiores sapiente assumenda.
                </p>
                <button className="btn post-button" onClick={()=>openLink("")}>
                    Read more
                </button>
            </div>
        </div>
    </div>

    <div className="post">
<img className="post-image" src="https://cdn.hashnode.com/res/hashnode/image/upload/v1647451271384/ILR-2IZZC.jpg" alt="Logo" />
        <div className="post-content">
            <div className="post-inside">
                <h3 className="post-title">Lorem ipsum dolor</h3>
                <p className="post-excerpt">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem blanditiis et sequi nulla sit totam, quidem consequuntur maiores sapiente assumenda.
                </p>
                <button className="btn post-button" onClick={()=>openLink("")}>
                    Read more
                </button>
            </div>
        </div>
    </div> */}
</div>
</div>

  )

}
