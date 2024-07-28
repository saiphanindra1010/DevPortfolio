import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { Footer } from "../components/Footer";
import { GET_ALL_POSTS, FILTER_POSTS, host } from "../gqlRequests/getpostdata";
import "./styles/Blog.css";

const env = import.meta.env;

export const Bloggrid = () => {
  const openLink = (x) => {
    window.open(x);
  };

  const [filter, setFilter] = useState("all");

  const getfilter = (clicked_object) => {
    setFilter(clicked_object);
  };

  const { loading, error, data } = useQuery(
    filter === "all" ? GET_ALL_POSTS : FILTER_POSTS,
    {
      variables: { filter },
    }
  );

  if (loading)
    return (
      <div className="container">
        <div className="posts">
          {Array(3).fill().map((_, index) => (
            <div className="post" key={index}>
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
          ))}
        </div>
      </div>
    );

  if (error) return `Error! ${error.message}`;

  const renderPosts = (posts) => (
    posts.edges.map((post) => (
      <div className="post" key={post.node.slug}>
        <img
          className="post-image"
          src={post.node.coverImage.url}
          alt="Cover"
        />
        <div className="post-content">
          <div className="post-inside">
            <h3 className="post-title">{post.node.title}</h3>
            <p className="post-excerpt">
              {post.node.brief.slice(0, 100) + "..."}
            </p>
            <button
              className="btn post-button"
              onClick={() =>
                openLink(
                  `https://${
                    env.VITE_REACT_APP_BLog_user_name || "default"
                  }.hashnode.dev/${post.node.slug}`
                )
              }
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    ))
  );

  const filters = [
    { label: "ALL", value: "all" },
    { label: "Backend", value: "backend" },
    { label: "Low Level Design", value: "low_level_design" },
    { label: "High Level Design", value: "High Level Design" },
    { label: "Databases", value: "databases" },
    { label: "Networking", value: "networking" },
    { label: "SQL", value: "sql" },
  ];

  return (
    <div className="container">
      <div className="filters-controls">
        {filters.map((filterItem) => (
          <button
            key={filterItem.value}
            type="button"
            className={`button-35 filter-control ${filter === filterItem.value ? 'btnactive' : ''}`}
            data-filter={filterItem.value}
            onClick={() => getfilter(filterItem.value)}
          >
            {filterItem.label}
          </button>
        ))}
      </div>
      <br />
      <div className="posts">
        {data.publication?.series?.posts ? (
          renderPosts(data.publication.series.posts)
        ) : data.publication?.posts ? (
          renderPosts(data.publication.posts)
        ) : (
          <div>No posts available</div>
        )}
      </div>
    </div>
  );
};
