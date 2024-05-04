import { gql } from "@apollo/client";

// export const GET_ALL_POSTS = gql`
//   {
//     user(username: "saiphanindra") {
//       publication {
//         posts(page: 0) {
//           slug
//           title
//           brief
//           coverImage
//         }
//       }
//     }
//   }
// `;

export const GET_SQL_POSTS = gql`
  query Publication($filter: String!) {
    publication(host: "saiphanindra.hashnode.dev") {
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
export const GET_GIT_POSTS = gql`
  query Publication {
    publication(host: "saiphanindra.hashnode.dev") {
      series(slug: "git") {
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
export const GET_ALL_POSTS = gql`
query Publication {
  publication(host: "saiphanindra.hashnode.dev") {

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
