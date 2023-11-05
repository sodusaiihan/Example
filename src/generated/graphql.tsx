import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createUser: User;
  deleteUser: Scalars['Boolean']['output'];
  updateUser: User;
};


export type MutationCreateUserArgs = {
  address: Scalars['String']['input'];
  birthday: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phonenumber: Scalars['String']['input'];
  role: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  address: Scalars['String']['input'];
  birthday: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
  phonenumber: Scalars['String']['input'];
  role: Scalars['String']['input'];
};

export type OverView = {
  __typename?: 'OverView';
  role: Scalars['String']['output'];
  total: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  getAllAdmin: Array<User>;
  getAllUser: Array<User>;
  getOverView: Array<OverView>;
  getRecentUsers: Array<User>;
  user: User;
  users: Array<User>;
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  birthday: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phonenumber: Scalars['String']['output'];
  role: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateUserMutationVariables = Exact<{
  role: Scalars['String']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phonenumber: Scalars['String']['input'];
  address: Scalars['String']['input'];
  birthday: Scalars['DateTime']['input'];
  gender: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, role: string, name: string, email: string, phonenumber: string, address: string, birthday: any, gender: string, createdAt: any, updatedAt: any } };

export type DeleteUserMutationVariables = Exact<{
  deleteUserId: Scalars['String']['input'];
}>;


export type DeleteUserMutation = { __typename?: 'Mutation', deleteUser: boolean };

export type UpdateUserMutationVariables = Exact<{
  updateUserId: Scalars['String']['input'];
  role: Scalars['String']['input'];
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phonenumber: Scalars['String']['input'];
  address: Scalars['String']['input'];
  birthday: Scalars['DateTime']['input'];
  gender: Scalars['String']['input'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string, role: string, name: string, email: string, phonenumber: string, address: string, birthday: any, gender: string } };

export type GetAllAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAdminQuery = { __typename?: 'Query', getAllAdmin: Array<{ __typename?: 'User', id: string, role: string, name: string, email: string, phonenumber: string, address: string, birthday: any, gender: string, createdAt: any, updatedAt: any }> };

export type GetAllUserAndAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserAndAdminQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, role: string, name: string, email: string, phonenumber: string, address: string, birthday: any, gender: string, createdAt: any, updatedAt: any }> };

export type GetAllUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserQuery = { __typename?: 'Query', getAllUser: Array<{ __typename?: 'User', id: string, role: string, name: string, email: string, phonenumber: string, address: string, birthday: any, gender: string, createdAt: any, updatedAt: any }> };

export type GetOverViewQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOverViewQuery = { __typename?: 'Query', getOverView: Array<{ __typename?: 'OverView', role: string, total: number }> };

export type GetRecentUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRecentUsersQuery = { __typename?: 'Query', getRecentUsers: Array<{ __typename?: 'User', id: string, role: string, name: string, email: string, phonenumber: string, address: string, birthday: any, gender: string, createdAt: any, updatedAt: any }> };

export type GetUserByIdQueryVariables = Exact<{
  userId: Scalars['String']['input'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', user: { __typename?: 'User', id: string, role: string, name: string, email: string, phonenumber: string, address: string, birthday: any, gender: string, createdAt: any, updatedAt: any } };


export const CreateUserDocument = gql`
    mutation CreateUser($role: String!, $name: String!, $email: String!, $phonenumber: String!, $address: String!, $birthday: DateTime!, $gender: String!) {
  createUser(
    role: $role
    name: $name
    email: $email
    phonenumber: $phonenumber
    address: $address
    birthday: $birthday
    gender: $gender
  ) {
    id
    role
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
    updatedAt
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      role: // value for 'role'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      phonenumber: // value for 'phonenumber'
 *      address: // value for 'address'
 *      birthday: // value for 'birthday'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($deleteUserId: String!) {
  deleteUser(id: $deleteUserId)
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      deleteUserId: // value for 'deleteUserId'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($updateUserId: String!, $role: String!, $name: String!, $email: String!, $phonenumber: String!, $address: String!, $birthday: DateTime!, $gender: String!) {
  updateUser(
    id: $updateUserId
    role: $role
    name: $name
    email: $email
    phonenumber: $phonenumber
    address: $address
    birthday: $birthday
    gender: $gender
  ) {
    id
    role
    name
    email
    phonenumber
    address
    birthday
    gender
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      updateUserId: // value for 'updateUserId'
 *      role: // value for 'role'
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      phonenumber: // value for 'phonenumber'
 *      address: // value for 'address'
 *      birthday: // value for 'birthday'
 *      gender: // value for 'gender'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const GetAllAdminDocument = gql`
    query GetAllAdmin {
  getAllAdmin {
    id
    role
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAllAdminQuery__
 *
 * To run a query within a React component, call `useGetAllAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetAllAdminQuery, GetAllAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllAdminQuery, GetAllAdminQueryVariables>(GetAllAdminDocument, options);
      }
export function useGetAllAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllAdminQuery, GetAllAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllAdminQuery, GetAllAdminQueryVariables>(GetAllAdminDocument, options);
        }
export function useGetAllAdminSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllAdminQuery, GetAllAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllAdminQuery, GetAllAdminQueryVariables>(GetAllAdminDocument, options);
        }
export type GetAllAdminQueryHookResult = ReturnType<typeof useGetAllAdminQuery>;
export type GetAllAdminLazyQueryHookResult = ReturnType<typeof useGetAllAdminLazyQuery>;
export type GetAllAdminSuspenseQueryHookResult = ReturnType<typeof useGetAllAdminSuspenseQuery>;
export type GetAllAdminQueryResult = Apollo.QueryResult<GetAllAdminQuery, GetAllAdminQueryVariables>;
export const GetAllUserAndAdminDocument = gql`
    query GetAllUserAndAdmin {
  users {
    id
    role
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAllUserAndAdminQuery__
 *
 * To run a query within a React component, call `useGetAllUserAndAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserAndAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserAndAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserAndAdminQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserAndAdminQuery, GetAllUserAndAdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserAndAdminQuery, GetAllUserAndAdminQueryVariables>(GetAllUserAndAdminDocument, options);
      }
export function useGetAllUserAndAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserAndAdminQuery, GetAllUserAndAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserAndAdminQuery, GetAllUserAndAdminQueryVariables>(GetAllUserAndAdminDocument, options);
        }
export function useGetAllUserAndAdminSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserAndAdminQuery, GetAllUserAndAdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUserAndAdminQuery, GetAllUserAndAdminQueryVariables>(GetAllUserAndAdminDocument, options);
        }
export type GetAllUserAndAdminQueryHookResult = ReturnType<typeof useGetAllUserAndAdminQuery>;
export type GetAllUserAndAdminLazyQueryHookResult = ReturnType<typeof useGetAllUserAndAdminLazyQuery>;
export type GetAllUserAndAdminSuspenseQueryHookResult = ReturnType<typeof useGetAllUserAndAdminSuspenseQuery>;
export type GetAllUserAndAdminQueryResult = Apollo.QueryResult<GetAllUserAndAdminQuery, GetAllUserAndAdminQueryVariables>;
export const GetAllUserDocument = gql`
    query GetAllUser {
  getAllUser {
    id
    role
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetAllUserQuery__
 *
 * To run a query within a React component, call `useGetAllUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUserQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
      }
export function useGetAllUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export function useGetAllUserSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUserQuery, GetAllUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUserQuery, GetAllUserQueryVariables>(GetAllUserDocument, options);
        }
export type GetAllUserQueryHookResult = ReturnType<typeof useGetAllUserQuery>;
export type GetAllUserLazyQueryHookResult = ReturnType<typeof useGetAllUserLazyQuery>;
export type GetAllUserSuspenseQueryHookResult = ReturnType<typeof useGetAllUserSuspenseQuery>;
export type GetAllUserQueryResult = Apollo.QueryResult<GetAllUserQuery, GetAllUserQueryVariables>;
export const GetOverViewDocument = gql`
    query GetOverView {
  getOverView {
    role
    total
  }
}
    `;

/**
 * __useGetOverViewQuery__
 *
 * To run a query within a React component, call `useGetOverViewQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOverViewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOverViewQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetOverViewQuery(baseOptions?: Apollo.QueryHookOptions<GetOverViewQuery, GetOverViewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetOverViewQuery, GetOverViewQueryVariables>(GetOverViewDocument, options);
      }
export function useGetOverViewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetOverViewQuery, GetOverViewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetOverViewQuery, GetOverViewQueryVariables>(GetOverViewDocument, options);
        }
export function useGetOverViewSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetOverViewQuery, GetOverViewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetOverViewQuery, GetOverViewQueryVariables>(GetOverViewDocument, options);
        }
export type GetOverViewQueryHookResult = ReturnType<typeof useGetOverViewQuery>;
export type GetOverViewLazyQueryHookResult = ReturnType<typeof useGetOverViewLazyQuery>;
export type GetOverViewSuspenseQueryHookResult = ReturnType<typeof useGetOverViewSuspenseQuery>;
export type GetOverViewQueryResult = Apollo.QueryResult<GetOverViewQuery, GetOverViewQueryVariables>;
export const GetRecentUsersDocument = gql`
    query GetRecentUsers {
  getRecentUsers {
    id
    role
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetRecentUsersQuery__
 *
 * To run a query within a React component, call `useGetRecentUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecentUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecentUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRecentUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetRecentUsersQuery, GetRecentUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecentUsersQuery, GetRecentUsersQueryVariables>(GetRecentUsersDocument, options);
      }
export function useGetRecentUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecentUsersQuery, GetRecentUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecentUsersQuery, GetRecentUsersQueryVariables>(GetRecentUsersDocument, options);
        }
export function useGetRecentUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRecentUsersQuery, GetRecentUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRecentUsersQuery, GetRecentUsersQueryVariables>(GetRecentUsersDocument, options);
        }
export type GetRecentUsersQueryHookResult = ReturnType<typeof useGetRecentUsersQuery>;
export type GetRecentUsersLazyQueryHookResult = ReturnType<typeof useGetRecentUsersLazyQuery>;
export type GetRecentUsersSuspenseQueryHookResult = ReturnType<typeof useGetRecentUsersSuspenseQuery>;
export type GetRecentUsersQueryResult = Apollo.QueryResult<GetRecentUsersQuery, GetRecentUsersQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($userId: String!) {
  user(id: $userId) {
    id
    role
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export function useGetUserByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdSuspenseQueryHookResult = ReturnType<typeof useGetUserByIdSuspenseQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;