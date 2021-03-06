import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {gql, useQuery} from "@apollo/client";
import {graphqlClient} from "../apollo/graphqlClient";

const GET_ARTICLE = gql`
  query ExampleQuery1 {
    getArticles {
      id
      title
    }
  }
`;

const GET_FOR_SSR = gql`
  query ExampleQuery2 {
    getForSsrs {
      id
      content
    }
  }
`;

const Home: NextPage<{ssrData: any}> = ({ssrData}) => {
  // Client Side Fetch
  const { loading, error, data } = useQuery(GET_ARTICLE);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        {data.getArticles.map((article: any) => <p>
          {article.id}: {article.title}
        </p>)}
        <p>Client Side Fetch</p>
        {!loading && data.getArticles.map((article: any) => <p>
          {article.id}: {article.title}
        </p>)}
      </div>
      <div>
        <p>Server Side Fetch</p>
        {ssrData.map((data: any) => <p>
          {data.id}: {data.content}
        </p>)}
      </div>
    </div>
  )
}

export default Home

export async function getServerSideProps() {
  const { data } = await graphqlClient.query({query: GET_FOR_SSR});
  return {
    props: {
      ssrData: data.getForSsrs,
    },
  }
}