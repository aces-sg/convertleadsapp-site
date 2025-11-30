/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const getExternalUser = /* GraphQL */ `query GetExternalUser($id: ID!) {
  getExternalUser(id: $id) {
    id
    name
    title
    role
    company
    companyLogoUrl
    discipline
    registration_date
    registration_branch
    registration_number
    email
    linkedin
    telephone
    skills
    imageUrl
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetExternalUserQueryVariables,
  APITypes.GetExternalUserQuery
>;
export const listExternalUsers = /* GraphQL */ `query ListExternalUsers(
  $filter: ModelExternalUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listExternalUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      title
      role
      company
      companyLogoUrl
      discipline
      registration_date
      registration_branch
      registration_number
      email
      linkedin
      telephone
      skills
      imageUrl
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListExternalUsersQueryVariables,
  APITypes.ListExternalUsersQuery
>;
export const getBTO = /* GraphQL */ `query GetBTO($id: ID!) {
  getBTO(id: $id) {
    id
    name
    estate
    type
    floorPlanUrl
    brochureUrl
    model3DUrl
    status
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetBTOQueryVariables, APITypes.GetBTOQuery>;
export const listBTOS = /* GraphQL */ `query ListBTOS($filter: ModelBTOFilterInput, $limit: Int, $nextToken: String) {
  listBTOS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      estate
      type
      floorPlanUrl
      brochureUrl
      model3DUrl
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListBTOSQueryVariables, APITypes.ListBTOSQuery>;
export const externalUserByEmail = /* GraphQL */ `query ExternalUserByEmail(
  $email: AWSEmail!
  $createdAt: ModelStringKeyConditionInput
  $sortDirection: ModelSortDirection
  $filter: ModelExternalUserFilterInput
  $limit: Int
  $nextToken: String
) {
  externalUserByEmail(
    email: $email
    createdAt: $createdAt
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      name
      title
      role
      company
      companyLogoUrl
      discipline
      registration_date
      registration_branch
      registration_number
      email
      linkedin
      telephone
      skills
      imageUrl
      status
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ExternalUserByEmailQueryVariables,
  APITypes.ExternalUserByEmailQuery
>;
