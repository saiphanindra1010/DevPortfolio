import React from "react";
import "./styles/Blog.css";
// import { Link } from "react-router-dom";
// import { GET_ALL_POSTS } from "../gqlRequests/getpostdata";
import { GET_GIT_POSTS, GET_SQL_POSTS} from "../gqlRequests/getpostdata";
import { useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useState } from "react";
export const Bloggrid = () => {
  const openLink = (x) => {
    // console.log(process.env.REACT_APP_Blog_api_key)
    // console.log(x)
    window.open(x);
  };
  // let filter="sql"
  const [filter, setFilter] = useState("sql");
    const getfilter = (clicked_object) => {
      console.log(clicked_object)
      setFilter(clicked_object);
    };
  
// console.log(useQuery(GET_ALL_POSTS2))
  // let { data, loading } = useQuery(GET_ALL_POSTS2);
 

  const { loading, error, data } = useQuery(GET_SQL_POSTS,{
    variables: { filter},
  });
  // console.log('Variables:',error);
  let { loading:loading2, error:error2, data:data2 } = useQuery(GET_GIT_POSTS);
  
  if (loading||loading2)
    return (
      <div className="container">
        <div className="posts">
          <div className="post">
            <Skeleton height={220} />
            <div className="post-content">
              <div className="post-inside">
                <h3 className="post-title">
                  <Skeleton />
                </h3>
                <p className="post-excerpt">
                  <Skeleton count={5} />
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="post">
            <Skeleton height={220} />
            <div className="post-content">
              <div className="post-inside">
                <h3 className="post-title">
                  <Skeleton />
                </h3>
                <p className="post-excerpt">
                  <Skeleton count={5} />
                </p>
              </div>
            </div>
          </div>{" "}
          <div className="post">
            <Skeleton height={220} />
            <div className="post-content">
              <div className="post-inside">
                <h3 className="post-title">
                  <Skeleton />
                </h3>
                <p className="post-excerpt">
                  <Skeleton count={5} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  
    if (error||error2) return `Error! ${error.message}`;
  return (
    <div className="container">
      {/* <h2>I write about Backend,system design,Databases,Networking and cryptograpghy</h2>
      <br></br> */}
      <div class="filters-controls">
      <button type="button" className="button-35 btnactive filter-control" data-filter="git" onClick={() =>
                  getfilter("git")
                }>ALL</button>
		<button type="button" className="button-35 btnactive filter-control" data-filter="git" onClick={() =>
                  getfilter("git")
                }>Backend</button>
                	<button type="button" className="button-35 btnactive filter-control" data-filter="git" onClick={() =>
                  getfilter("git")
                }>System Design</button>
                	<button type="button" className="button-35 btnactive filter-control" data-filter="git" onClick={() =>
                  getfilter("git")
                }>Low level design</button>
                	<button type="button" className="button-35 btnactive filter-control" data-filter="git" onClick={() =>
                  getfilter("git")
                }>Databases</button>
                                	<button type="button" className="button-35 btnactive filter-control" data-filter="git" onClick={() =>
                  getfilter("git")
                }>Networking</button>
    <button type="button" className="button-35 filter-control" data-filter="sql"onClick={() =>
                  getfilter("sql")
                }>Sql</button>
	</div>
      <br></br>
      <div className="posts">      
{
      data.publication.series.posts.edges.map(post => (
        <div className="post" key={post.node.slug}>
          <img className="post-image" src={post.node.coverImage.url} alt="Cover" />
          <div className="post-content">
            <div className="post-inside">
              <h3 className="post-title">{post.node.title}</h3>
              <p className="post-excerpt">
                {post.node.brief.slice(0, 100) + '...'}
              </p>
              <button
                className="btn post-button"
                onClick={() =>
                  openLink(
                    `https://${process.env.REACT_APP_BLog_user_name ||'default'}.hashnode.dev/${post.node.slug}`
                  )
                }
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      ))
}
{
      data2.publication.series.posts.edges.map(post => (
        <div className="post" key={post.node.slug}>
          <img className="post-image" src={post.node.coverImage.url} alt="Cover" />
          <div className="post-content">
            <div className="post-inside">
              <h3 className="post-title">{post.node.title}</h3>
              <p className="post-excerpt">
                {post.node.brief.slice(0, 100) + '...'}
              </p>
              <button
                className="btn post-button"
                onClick={() =>
                  openLink(
                    `https://${process.env.REACT_APP_BLog_user_name}.hashnode.dev/${post.node.slug}`
                  )
                }
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      ))
}


      </div>
    </div>
  );
};
