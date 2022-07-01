import { gql } from '@apollo/client';

    export const AUTHENTICATE = gql`
    mutation auth($username: String!, $password: String!){
      authenticate(credentials: { username: $username, password: $password }) {
        accessToken
      }
    }
   `; 

   export const CREATE_REVIEW = gql`
  mutation CreateReview($review: CreateReviewInput) {
    createReview(review: $review) {
      repository {
        ownerName
      }
      text
      rating
      user {
        username
      }

      repositoryId
    }
    
   
  }
 
`;

export const CREATE_USER = gql`
mutation Mutation($user: CreateUserInput) {
  createUser(user: $user) {
    username
    id
  }
}`