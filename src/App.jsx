import React from 'react'
import Collection from './components/collection'
import Header from './components/header'
import Layout from './components/layout'
import Hero from './components/hero'
import Main from './components/main'


const App = () => {
  return (
    <Layout>
      <Header />
      <Main>
        <Hero />
        <Collection />
      </Main>
    </Layout>
  )
}

export default App
