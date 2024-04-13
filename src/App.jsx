import Collection from './components/Collection.jsx'
import Header from './components/Header.jsx'
import Layout from './components/Layout.jsx'
import Hero from './components/Hero.jsx'
import Main from './components/Main.jsx'

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
