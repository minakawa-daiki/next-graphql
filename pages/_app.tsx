import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ApolloProvider} from "@apollo/client";
import {graphqlClient} from "../apollo/graphqlClient";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ApolloProvider client={graphqlClient}>
        <Component {...pageProps} />
      </ApolloProvider>
  )
}
export default MyApp
