import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
query 
Repositories(
  $orderDirection: OrderDirection
  $orderBy: AllRepositoriesOrderBy
  $searchKeyword: String

  
) 

{
    repositories(
      orderDirection: $orderDirection
      orderBy: $orderBy
      searchKeyword: $searchKeyword

     
    ) {
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
         reviews {
          totalCount
          edges {
            node {
              id
              text
              rating
              createdAt
              user {
                username
                id
              }
            }
            cursor
          }
  }
  }
}

`

export const ME =gql`

query me($includeReviews: Boolean = false){
 
  me {
    id
    username

    reviews @include(if: $includeReviews) {
      edges {
        node {
          repository {
            id
          }
          id
          text
          rating
          createdAt
          user {
            username
            id
          }
        }
      }
  }
  }
}
  
`;