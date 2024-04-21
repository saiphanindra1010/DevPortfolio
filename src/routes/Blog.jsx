import React from 'react'
import { Navbar } from '../components/Navbar'
import { Bloggrid } from '../components/Bloggrid'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
export const Blog = () => {

  const client = new ApolloClient({
    uri: 'https://gql.hashnode.com/',
    cache: new InMemoryCache(), 
  });

  return (
    <div>
        <Navbar/>   
        <ApolloProvider client={client}>
        <Bloggrid/>
        </ApolloProvider>
</div>
  )
}
