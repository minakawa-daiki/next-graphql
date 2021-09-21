import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Article = {
  __typename?: 'Article';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type ForSsr = {
  __typename?: 'ForSsr';
  content?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getArticle?: Maybe<Article>;
  getArticles?: Maybe<Array<Maybe<Article>>>;
  getForSsr?: Maybe<Array<Maybe<ForSsr>>>;
  getForSsrs?: Maybe<Array<Maybe<ForSsr>>>;
};


export type QueryGetArticleArgs = {
  id?: Maybe<Scalars['Int']>;
};

export type GetArticlesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetArticlesQuery = { __typename?: 'Query', getArticles?: Maybe<Array<Maybe<{ __typename?: 'Article', id?: Maybe<number>, title?: Maybe<string> }>>> };

export type GetForSsrsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetForSsrsQuery = { __typename?: 'Query', getForSsrs?: Maybe<Array<Maybe<{ __typename?: 'ForSsr', id?: Maybe<number>, content?: Maybe<string> }>>> };


export const GetArticlesDocument = gql`
    query GetArticles {
  getArticles {
    id
    title
  }
}
    `;

/**
 * __useGetArticlesQuery__
 *
 * To run a query within a React component, call `useGetArticlesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetArticlesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetArticlesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetArticlesQuery(baseOptions?: Apollo.QueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
      }
export function useGetArticlesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetArticlesQuery, GetArticlesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetArticlesQuery, GetArticlesQueryVariables>(GetArticlesDocument, options);
        }
export type GetArticlesQueryHookResult = ReturnType<typeof useGetArticlesQuery>;
export type GetArticlesLazyQueryHookResult = ReturnType<typeof useGetArticlesLazyQuery>;
export type GetArticlesQueryResult = Apollo.QueryResult<GetArticlesQuery, GetArticlesQueryVariables>;
export const GetForSsrsDocument = gql`
    query GetForSsrs {
  getForSsrs {
    id
    content
  }
}
    `;

/**
 * __useGetForSsrsQuery__
 *
 * To run a query within a React component, call `useGetForSsrsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetForSsrsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetForSsrsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetForSsrsQuery(baseOptions?: Apollo.QueryHookOptions<GetForSsrsQuery, GetForSsrsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetForSsrsQuery, GetForSsrsQueryVariables>(GetForSsrsDocument, options);
      }
export function useGetForSsrsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetForSsrsQuery, GetForSsrsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetForSsrsQuery, GetForSsrsQueryVariables>(GetForSsrsDocument, options);
        }
export type GetForSsrsQueryHookResult = ReturnType<typeof useGetForSsrsQuery>;
export type GetForSsrsLazyQueryHookResult = ReturnType<typeof useGetForSsrsLazyQuery>;
export type GetForSsrsQueryResult = Apollo.QueryResult<GetForSsrsQuery, GetForSsrsQueryVariables>;