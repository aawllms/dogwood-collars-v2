import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation CreateUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        savedResources {
          resourceId
          title
          description
          url
        }
      }
    }
  }
`;

export const SAVED_PRODUCT = gql`
  mutation saveResource(
    $description: String!
    $resourceId: String!
    $title: String!
    $url: String
  ) {
    saveResource(
      description: $description
      resourceId: $resourceId
      title: $title
      url: $url
    ) {
      _id
      username
      email
      savedResources {
        resourceId
        title
        description
        url
      }
    }
  }
`;




