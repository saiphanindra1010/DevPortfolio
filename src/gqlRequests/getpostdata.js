import { gql } from "@apollo/client";
const env = import.meta.env;
const host=env.VITE_REACT_APP_BLog
// const host=process.env.REACT_APP_BLog

const FILTER_POSTS = gql`
  query Publication($filter: String!) {
    publication(host: "${host}") {
      series(slug: $filter) {
        posts(first: 20) {
          edges {
            node {
              title
              slug
              brief
              coverImage {
                url
              }
            }
          }
        }
      }
    }
  }
`;
const GET_ALL_POSTS = gql`
query Publication {
  publication(host: "${host}") {
      posts(first: 20) {
        edges {
          node {
            title
            slug
            brief
            coverImage {
              url
            }
          }
        }
      
    }
  }
}
`;

export {
  GET_ALL_POSTS,
  FILTER_POSTS,
  host
}
