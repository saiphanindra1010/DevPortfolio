import { gql } from "@apollo/client";

export const GET_ALL_POSTS=gql`{
    user(username:"manavgupta") {
      publication {
        posts(page: 0) {
         slug
         title
         brief
         coverImage
        }
      }
    }
  }
    `