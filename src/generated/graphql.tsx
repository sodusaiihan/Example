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

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER'
}

export type Mutation = {
  __typename?: 'Mutation';
  createRole: Role;
  createUser: User;
  deleteRole: Role;
  deleteUser: User;
  updateRole: Role;
  updateUser: User;
};


export type MutationCreateRoleArgs = {
  name: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  address: Scalars['String']['input'];
  birthday: Scalars['DateTime']['input'];
  email: Scalars['String']['input'];
  gender: Gender;
  name: Scalars['String']['input'];
  phonenumber: Scalars['Int']['input'];
  roleId: Scalars['String']['input'];
};


export type MutationDeleteRoleArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateRoleArgs = {
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateUserArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
  birthday?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Gender>;
  id: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  phonenumber?: InputMaybe<Scalars['Int']['input']>;
  roleId?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  getAllAdmin: Array<User>;
  getAllUser: Array<User>;
  role?: Maybe<Role>;
  roles: Array<Role>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryRoleArgs = {
  id: Scalars['String']['input'];
};


export type QueryUserArgs = {
  id: Scalars['String']['input'];
};

export type Role = {
  __typename?: 'Role';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  user: Array<User>;
};

export type User = {
  __typename?: 'User';
  address: Scalars['String']['output'];
  birthday: Scalars['DateTime']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  gender: Gender;
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
  phonenumber: Scalars['Int']['output'];
  role: Role;
  roleId: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String']['input'];
  email: Scalars['String']['input'];
  phonenumber: Scalars['Int']['input'];
  address: Scalars['String']['input'];
  birthday: Scalars['DateTime']['input'];
  gender: Gender;
  roleId: Scalars['String']['input'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string, email: string, phonenumber: number, address: string, birthday: any, gender: Gender, createdAt: any, updatedAt: any, roleId: string, role: { __typename?: 'Role', id: string, name: string } } };

export type GetAllAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllAdminQuery = { __typename?: 'Query', getAllAdmin: Array<{ __typename?: 'User', id: string, name: string, email: string, phonenumber: number, address: string, birthday: any, gender: Gender, createdAt: any }> };

export type GetAllUserAndAdminQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUserAndAdminQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, name: string, email: string, phonenumber: number, address: string, birthday: any, gender: Gender, createdAt: any, updatedAt: any, roleId: string, role: { __typename?: 'Role', id: string, name: string } }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUser: Array<{ __typename?: 'User', id: string, name: string, email: string, phonenumber: number, address: string, birthday: any, gender: Gender, createdAt: any }> };

export type GetRolesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRolesQuery = { __typename?: 'Query', roles: Array<{ __typename?: 'Role', id: string, name: string }> };


export const CreateUserDocument = gql`
    mutation CreateUser($name: String!, $email: String!, $phonenumber: Int!, $address: String!, $birthday: DateTime!, $gender: Gender!, $roleId: String!) {
  createUser(
    name: $name
    email: $email
    phonenumber: $phonenumber
    address: $address
    birthday: $birthday
    gender: $gender
    roleId: $roleId
  ) {
    id
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
    updatedAt
    roleId
    role {
      id
      name
    }
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
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      phonenumber: // value for 'phonenumber'
 *      address: // value for 'address'
 *      birthday: // value for 'birthday'
 *      gender: // value for 'gender'
 *      roleId: // value for 'roleId'
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
export const GetAllAdminDocument = gql`
    query GetAllAdmin {
  getAllAdmin {
    id
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
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
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
    updatedAt
    roleId
    role {
      id
      name
    }
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
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  getAllUser {
    id
    name
    email
    phonenumber
    address
    birthday
    gender
    createdAt
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export function useGetAllUsersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersSuspenseQueryHookResult = ReturnType<typeof useGetAllUsersSuspenseQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetRolesDocument = gql`
    query GetRoles {
  roles {
    id
    name
  }
}
    `;

/**
 * __useGetRolesQuery__
 *
 * To run a query within a React component, call `useGetRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRolesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRolesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetRolesQuery(baseOptions?: Apollo.QueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
      }
export function useGetRolesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export function useGetRolesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetRolesQuery, GetRolesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetRolesQuery, GetRolesQueryVariables>(GetRolesDocument, options);
        }
export type GetRolesQueryHookResult = ReturnType<typeof useGetRolesQuery>;
export type GetRolesLazyQueryHookResult = ReturnType<typeof useGetRolesLazyQuery>;
export type GetRolesSuspenseQueryHookResult = ReturnType<typeof useGetRolesSuspenseQuery>;
export type GetRolesQueryResult = Apollo.QueryResult<GetRolesQuery, GetRolesQueryVariables>;