/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onCreateTodo(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
  onUpdateTodo(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
  onDeleteTodo(filter: $filter) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onCreateExternalUser = /* GraphQL */ `subscription OnCreateExternalUser(
  $filter: ModelSubscriptionExternalUserFilterInput
) {
  onCreateExternalUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateExternalUserSubscriptionVariables,
  APITypes.OnCreateExternalUserSubscription
>;
export const onUpdateExternalUser = /* GraphQL */ `subscription OnUpdateExternalUser(
  $filter: ModelSubscriptionExternalUserFilterInput
) {
  onUpdateExternalUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateExternalUserSubscriptionVariables,
  APITypes.OnUpdateExternalUserSubscription
>;
export const onDeleteExternalUser = /* GraphQL */ `subscription OnDeleteExternalUser(
  $filter: ModelSubscriptionExternalUserFilterInput
) {
  onDeleteExternalUser(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteExternalUserSubscriptionVariables,
  APITypes.OnDeleteExternalUserSubscription
>;
export const onCreateBTO = /* GraphQL */ `subscription OnCreateBTO($filter: ModelSubscriptionBTOFilterInput) {
  onCreateBTO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBTOSubscriptionVariables,
  APITypes.OnCreateBTOSubscription
>;
export const onUpdateBTO = /* GraphQL */ `subscription OnUpdateBTO($filter: ModelSubscriptionBTOFilterInput) {
  onUpdateBTO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBTOSubscriptionVariables,
  APITypes.OnUpdateBTOSubscription
>;
export const onDeleteBTO = /* GraphQL */ `subscription OnDeleteBTO($filter: ModelSubscriptionBTOFilterInput) {
  onDeleteBTO(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBTOSubscriptionVariables,
  APITypes.OnDeleteBTOSubscription
>;
