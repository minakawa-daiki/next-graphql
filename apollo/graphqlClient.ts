import {ApolloClient, HttpLink, InMemoryCache} from "@apollo/client";

// See. https://github.com/vercel/next.js/blob/canary/examples/with-apollo/lib/apolloClient.js
// https://github.com/vercel/next.js/discussions/10946
export const graphqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:3000/api/graphql",
  }),
  ssrMode: true,
  // ssrMode: typeof window === 'undefined', // See. https://www.apollographql.com/docs/react/performance/server-side-rendering/#initializing-apollo-client
});
