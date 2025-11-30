/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type SubscribeMailchimpInput = {
  email: string,
  name: string,
};

export type CreateTodoInput = {
  id?: string | null,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  not?: ModelTodoConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Todo = {
  __typename: "Todo",
  id: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateTodoInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type CreateExternalUserInput = {
  id?: string | null,
  name: string,
  title?: string | null,
  role: string,
  company?: string | null,
  companyLogoUrl?: string | null,
  discipline?: string | null,
  registration_date?: string | null,
  registration_branch?: string | null,
  registration_number?: string | null,
  email: string,
  linkedin?: string | null,
  telephone?: string | null,
  skills?: Array< string | null > | null,
  imageUrl?: string | null,
  status?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelExternalUserConditionInput = {
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  role?: ModelStringInput | null,
  company?: ModelStringInput | null,
  companyLogoUrl?: ModelStringInput | null,
  discipline?: ModelStringInput | null,
  registration_date?: ModelStringInput | null,
  registration_branch?: ModelStringInput | null,
  registration_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  linkedin?: ModelStringInput | null,
  telephone?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExternalUserConditionInput | null > | null,
  or?: Array< ModelExternalUserConditionInput | null > | null,
  not?: ModelExternalUserConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ExternalUser = {
  __typename: "ExternalUser",
  id: string,
  name: string,
  title?: string | null,
  role: string,
  company?: string | null,
  companyLogoUrl?: string | null,
  discipline?: string | null,
  registration_date?: string | null,
  registration_branch?: string | null,
  registration_number?: string | null,
  email: string,
  linkedin?: string | null,
  telephone?: string | null,
  skills?: Array< string | null > | null,
  imageUrl?: string | null,
  status?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateExternalUserInput = {
  id: string,
  name?: string | null,
  title?: string | null,
  role?: string | null,
  company?: string | null,
  companyLogoUrl?: string | null,
  discipline?: string | null,
  registration_date?: string | null,
  registration_branch?: string | null,
  registration_number?: string | null,
  email?: string | null,
  linkedin?: string | null,
  telephone?: string | null,
  skills?: Array< string | null > | null,
  imageUrl?: string | null,
  status?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteExternalUserInput = {
  id: string,
};

export type CreateBTOInput = {
  id?: string | null,
  name?: string | null,
  estate?: string | null,
  type?: string | null,
  floorPlanUrl?: string | null,
  brochureUrl?: string | null,
  model3DUrl?: string | null,
  status?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type ModelBTOConditionInput = {
  name?: ModelStringInput | null,
  estate?: ModelStringInput | null,
  type?: ModelStringInput | null,
  floorPlanUrl?: ModelStringInput | null,
  brochureUrl?: ModelStringInput | null,
  model3DUrl?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBTOConditionInput | null > | null,
  or?: Array< ModelBTOConditionInput | null > | null,
  not?: ModelBTOConditionInput | null,
};

export type BTO = {
  __typename: "BTO",
  id: string,
  name?: string | null,
  estate?: string | null,
  type?: string | null,
  floorPlanUrl?: string | null,
  brochureUrl?: string | null,
  model3DUrl?: string | null,
  status?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type UpdateBTOInput = {
  id: string,
  name?: string | null,
  estate?: string | null,
  type?: string | null,
  floorPlanUrl?: string | null,
  brochureUrl?: string | null,
  model3DUrl?: string | null,
  status?: boolean | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteBTOInput = {
  id: string,
};

export type ModelTodoFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelTodoFilterInput | null > | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  not?: ModelTodoFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelExternalUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  title?: ModelStringInput | null,
  role?: ModelStringInput | null,
  company?: ModelStringInput | null,
  companyLogoUrl?: ModelStringInput | null,
  discipline?: ModelStringInput | null,
  registration_date?: ModelStringInput | null,
  registration_branch?: ModelStringInput | null,
  registration_number?: ModelStringInput | null,
  email?: ModelStringInput | null,
  linkedin?: ModelStringInput | null,
  telephone?: ModelStringInput | null,
  skills?: ModelStringInput | null,
  imageUrl?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelExternalUserFilterInput | null > | null,
  or?: Array< ModelExternalUserFilterInput | null > | null,
  not?: ModelExternalUserFilterInput | null,
};

export type ModelExternalUserConnection = {
  __typename: "ModelExternalUserConnection",
  items:  Array<ExternalUser | null >,
  nextToken?: string | null,
};

export type ModelBTOFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  estate?: ModelStringInput | null,
  type?: ModelStringInput | null,
  floorPlanUrl?: ModelStringInput | null,
  brochureUrl?: ModelStringInput | null,
  model3DUrl?: ModelStringInput | null,
  status?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBTOFilterInput | null > | null,
  or?: Array< ModelBTOFilterInput | null > | null,
  not?: ModelBTOFilterInput | null,
};

export type ModelBTOConnection = {
  __typename: "ModelBTOConnection",
  items:  Array<BTO | null >,
  nextToken?: string | null,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionTodoFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionExternalUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  company?: ModelSubscriptionStringInput | null,
  companyLogoUrl?: ModelSubscriptionStringInput | null,
  discipline?: ModelSubscriptionStringInput | null,
  registration_date?: ModelSubscriptionStringInput | null,
  registration_branch?: ModelSubscriptionStringInput | null,
  registration_number?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  linkedin?: ModelSubscriptionStringInput | null,
  telephone?: ModelSubscriptionStringInput | null,
  skills?: ModelSubscriptionStringInput | null,
  imageUrl?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionExternalUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionExternalUserFilterInput | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionBTOFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  estate?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  floorPlanUrl?: ModelSubscriptionStringInput | null,
  brochureUrl?: ModelSubscriptionStringInput | null,
  model3DUrl?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBTOFilterInput | null > | null,
  or?: Array< ModelSubscriptionBTOFilterInput | null > | null,
};

export type TriggerNotificationMutationVariables = {
  input?: string | null,
};

export type TriggerNotificationMutation = {
  triggerNotification?: string | null,
};

export type SubscribeMailchimpMutationVariables = {
  input?: SubscribeMailchimpInput | null,
};

export type SubscribeMailchimpMutation = {
  subscribeMailchimp?: string | null,
};

export type CreateTodoMutationVariables = {
  input: CreateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  input: UpdateTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  input: DeleteTodoInput,
  condition?: ModelTodoConditionInput | null,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateExternalUserMutationVariables = {
  input: CreateExternalUserInput,
  condition?: ModelExternalUserConditionInput | null,
};

export type CreateExternalUserMutation = {
  createExternalUser?:  {
    __typename: "ExternalUser",
    id: string,
    name: string,
    title?: string | null,
    role: string,
    company?: string | null,
    companyLogoUrl?: string | null,
    discipline?: string | null,
    registration_date?: string | null,
    registration_branch?: string | null,
    registration_number?: string | null,
    email: string,
    linkedin?: string | null,
    telephone?: string | null,
    skills?: Array< string | null > | null,
    imageUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateExternalUserMutationVariables = {
  input: UpdateExternalUserInput,
  condition?: ModelExternalUserConditionInput | null,
};

export type UpdateExternalUserMutation = {
  updateExternalUser?:  {
    __typename: "ExternalUser",
    id: string,
    name: string,
    title?: string | null,
    role: string,
    company?: string | null,
    companyLogoUrl?: string | null,
    discipline?: string | null,
    registration_date?: string | null,
    registration_branch?: string | null,
    registration_number?: string | null,
    email: string,
    linkedin?: string | null,
    telephone?: string | null,
    skills?: Array< string | null > | null,
    imageUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteExternalUserMutationVariables = {
  input: DeleteExternalUserInput,
  condition?: ModelExternalUserConditionInput | null,
};

export type DeleteExternalUserMutation = {
  deleteExternalUser?:  {
    __typename: "ExternalUser",
    id: string,
    name: string,
    title?: string | null,
    role: string,
    company?: string | null,
    companyLogoUrl?: string | null,
    discipline?: string | null,
    registration_date?: string | null,
    registration_branch?: string | null,
    registration_number?: string | null,
    email: string,
    linkedin?: string | null,
    telephone?: string | null,
    skills?: Array< string | null > | null,
    imageUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateBTOMutationVariables = {
  input: CreateBTOInput,
  condition?: ModelBTOConditionInput | null,
};

export type CreateBTOMutation = {
  createBTO?:  {
    __typename: "BTO",
    id: string,
    name?: string | null,
    estate?: string | null,
    type?: string | null,
    floorPlanUrl?: string | null,
    brochureUrl?: string | null,
    model3DUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateBTOMutationVariables = {
  input: UpdateBTOInput,
  condition?: ModelBTOConditionInput | null,
};

export type UpdateBTOMutation = {
  updateBTO?:  {
    __typename: "BTO",
    id: string,
    name?: string | null,
    estate?: string | null,
    type?: string | null,
    floorPlanUrl?: string | null,
    brochureUrl?: string | null,
    model3DUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteBTOMutationVariables = {
  input: DeleteBTOInput,
  condition?: ModelBTOConditionInput | null,
};

export type DeleteBTOMutation = {
  deleteBTO?:  {
    __typename: "BTO",
    id: string,
    name?: string | null,
    estate?: string | null,
    type?: string | null,
    floorPlanUrl?: string | null,
    brochureUrl?: string | null,
    model3DUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetExternalUserQueryVariables = {
  id: string,
};

export type GetExternalUserQuery = {
  getExternalUser?:  {
    __typename: "ExternalUser",
    id: string,
    name: string,
    title?: string | null,
    role: string,
    company?: string | null,
    companyLogoUrl?: string | null,
    discipline?: string | null,
    registration_date?: string | null,
    registration_branch?: string | null,
    registration_number?: string | null,
    email: string,
    linkedin?: string | null,
    telephone?: string | null,
    skills?: Array< string | null > | null,
    imageUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListExternalUsersQueryVariables = {
  filter?: ModelExternalUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListExternalUsersQuery = {
  listExternalUsers?:  {
    __typename: "ModelExternalUserConnection",
    items:  Array< {
      __typename: "ExternalUser",
      id: string,
      name: string,
      title?: string | null,
      role: string,
      company?: string | null,
      companyLogoUrl?: string | null,
      discipline?: string | null,
      registration_date?: string | null,
      registration_branch?: string | null,
      registration_number?: string | null,
      email: string,
      linkedin?: string | null,
      telephone?: string | null,
      skills?: Array< string | null > | null,
      imageUrl?: string | null,
      status?: boolean | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetBTOQueryVariables = {
  id: string,
};

export type GetBTOQuery = {
  getBTO?:  {
    __typename: "BTO",
    id: string,
    name?: string | null,
    estate?: string | null,
    type?: string | null,
    floorPlanUrl?: string | null,
    brochureUrl?: string | null,
    model3DUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type ListBTOSQueryVariables = {
  filter?: ModelBTOFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBTOSQuery = {
  listBTOS?:  {
    __typename: "ModelBTOConnection",
    items:  Array< {
      __typename: "BTO",
      id: string,
      name?: string | null,
      estate?: string | null,
      type?: string | null,
      floorPlanUrl?: string | null,
      brochureUrl?: string | null,
      model3DUrl?: string | null,
      status?: boolean | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ExternalUserByEmailQueryVariables = {
  email: string,
  createdAt?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelExternalUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ExternalUserByEmailQuery = {
  externalUserByEmail?:  {
    __typename: "ModelExternalUserConnection",
    items:  Array< {
      __typename: "ExternalUser",
      id: string,
      name: string,
      title?: string | null,
      role: string,
      company?: string | null,
      companyLogoUrl?: string | null,
      discipline?: string | null,
      registration_date?: string | null,
      registration_branch?: string | null,
      registration_number?: string | null,
      email: string,
      linkedin?: string | null,
      telephone?: string | null,
      skills?: Array< string | null > | null,
      imageUrl?: string | null,
      status?: boolean | null,
      createdAt?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    id: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateExternalUserSubscriptionVariables = {
  filter?: ModelSubscriptionExternalUserFilterInput | null,
};

export type OnCreateExternalUserSubscription = {
  onCreateExternalUser?:  {
    __typename: "ExternalUser",
    id: string,
    name: string,
    title?: string | null,
    role: string,
    company?: string | null,
    companyLogoUrl?: string | null,
    discipline?: string | null,
    registration_date?: string | null,
    registration_branch?: string | null,
    registration_number?: string | null,
    email: string,
    linkedin?: string | null,
    telephone?: string | null,
    skills?: Array< string | null > | null,
    imageUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateExternalUserSubscriptionVariables = {
  filter?: ModelSubscriptionExternalUserFilterInput | null,
};

export type OnUpdateExternalUserSubscription = {
  onUpdateExternalUser?:  {
    __typename: "ExternalUser",
    id: string,
    name: string,
    title?: string | null,
    role: string,
    company?: string | null,
    companyLogoUrl?: string | null,
    discipline?: string | null,
    registration_date?: string | null,
    registration_branch?: string | null,
    registration_number?: string | null,
    email: string,
    linkedin?: string | null,
    telephone?: string | null,
    skills?: Array< string | null > | null,
    imageUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteExternalUserSubscriptionVariables = {
  filter?: ModelSubscriptionExternalUserFilterInput | null,
};

export type OnDeleteExternalUserSubscription = {
  onDeleteExternalUser?:  {
    __typename: "ExternalUser",
    id: string,
    name: string,
    title?: string | null,
    role: string,
    company?: string | null,
    companyLogoUrl?: string | null,
    discipline?: string | null,
    registration_date?: string | null,
    registration_branch?: string | null,
    registration_number?: string | null,
    email: string,
    linkedin?: string | null,
    telephone?: string | null,
    skills?: Array< string | null > | null,
    imageUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateBTOSubscriptionVariables = {
  filter?: ModelSubscriptionBTOFilterInput | null,
};

export type OnCreateBTOSubscription = {
  onCreateBTO?:  {
    __typename: "BTO",
    id: string,
    name?: string | null,
    estate?: string | null,
    type?: string | null,
    floorPlanUrl?: string | null,
    brochureUrl?: string | null,
    model3DUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateBTOSubscriptionVariables = {
  filter?: ModelSubscriptionBTOFilterInput | null,
};

export type OnUpdateBTOSubscription = {
  onUpdateBTO?:  {
    __typename: "BTO",
    id: string,
    name?: string | null,
    estate?: string | null,
    type?: string | null,
    floorPlanUrl?: string | null,
    brochureUrl?: string | null,
    model3DUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteBTOSubscriptionVariables = {
  filter?: ModelSubscriptionBTOFilterInput | null,
};

export type OnDeleteBTOSubscription = {
  onDeleteBTO?:  {
    __typename: "BTO",
    id: string,
    name?: string | null,
    estate?: string | null,
    type?: string | null,
    floorPlanUrl?: string | null,
    brochureUrl?: string | null,
    model3DUrl?: string | null,
    status?: boolean | null,
    createdAt?: string | null,
    updatedAt?: string | null,
  } | null,
};
