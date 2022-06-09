import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
    repositories {
     edges {
       node {
         language
        ownerAvatarUrl
        ownerName
         description
         name
         stargazersCount
         forksCount
         reviewCount
         ratingAverage
       }
     }
    }
  }
`;