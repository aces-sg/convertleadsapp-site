/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const triggerNotification = /* GraphQL */ `mutation TriggerNotification($input: String) {
  triggerNotification(input: $input)
}
` as GeneratedMutation<
  APITypes.TriggerNotificationMutationVariables,
  APITypes.TriggerNotificationMutation
>;
export const subscribeMailchimp = /* GraphQL */ `mutation SubscribeMailchimp($input: SubscribeMailchimpInput) {
  subscribeMailchimp(input: $input)
}
` as GeneratedMutation<
  APITypes.SubscribeMailchimpMutationVariables,
  APITypes.SubscribeMailchimpMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $input: CreateTodoInput!
  $condition: ModelTodoConditionInput
) {
  createTodo(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $input: UpdateTodoInput!
  $condition: ModelTodoConditionInput
) {
  updateTodo(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $input: DeleteTodoInput!
  $condition: ModelTodoConditionInput
) {
  deleteTodo(input: $input, condition: $condition) {
    id
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const createExternalUser = /* GraphQL */ `mutation CreateExternalUser(
  $input: CreateExternalUserInput!
  $condition: ModelExternalUserConditionInput
) {
  createExternalUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateExternalUserMutationVariables,
  APITypes.CreateExternalUserMutation
>;
export const updateExternalUser = /* GraphQL */ `mutation UpdateExternalUser(
  $input: UpdateExternalUserInput!
  $condition: ModelExternalUserConditionInput
) {
  updateExternalUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateExternalUserMutationVariables,
  APITypes.UpdateExternalUserMutation
>;
export const deleteExternalUser = /* GraphQL */ `mutation DeleteExternalUser(
  $input: DeleteExternalUserInput!
  $condition: ModelExternalUserConditionInput
) {
  deleteExternalUser(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteExternalUserMutationVariables,
  APITypes.DeleteExternalUserMutation
>;
export const createBTO = /* GraphQL */ `mutation CreateBTO(
  $input: CreateBTOInput!
  $condition: ModelBTOConditionInput
) {
  createBTO(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateBTOMutationVariables,
  APITypes.CreateBTOMutation
>;
export const updateBTO = /* GraphQL */ `mutation UpdateBTO(
  $input: UpdateBTOInput!
  $condition: ModelBTOConditionInput
) {
  updateBTO(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateBTOMutationVariables,
  APITypes.UpdateBTOMutation
>;
export const deleteBTO = /* GraphQL */ `mutation DeleteBTO(
  $input: DeleteBTOInput!
  $condition: ModelBTOConditionInput
) {
  deleteBTO(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteBTOMutationVariables,
  APITypes.DeleteBTOMutation
>;
