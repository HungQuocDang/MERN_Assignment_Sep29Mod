import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password:String!) {
    addUser(username: $username, email:$email, password:$passowrd) {
     token
     user {
      username
      _id
      email
     }
    }
  }
`;
export const LOGIN = gql`
  mutation login($email: String!, $password:String!) {
    login( email:$email, password:$password) {
     token
     user {
      username
      _id
      email
     }
    }
  }
`;
export const ADD_BOOK = gql`
  mutation addBook($bookdata: BookInput! ) {
    addBook(bookdata: $bookdata) {
     token
     user {
      username
      _id
      email
     }
    }
  }
`;
