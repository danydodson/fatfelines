import Collection from './components/Collection'
import Header from './components/Header'
import Layout from './components/Layout'
import Hero from './components/Hero'
import Main from './components/Main'

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
