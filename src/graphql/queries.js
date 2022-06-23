import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query {
    repositories {
     edges {
       node {
        id
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

export const REPOSITORY = gql`
query ($id: ID!) {
  repository(id: $id ){
    id
    url
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

`

export const ME =gql`

query{
 
  me {
    id
    username
  }

}
  
`;