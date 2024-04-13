import { useState, useEffect } from 'react'
import useAxios from '../hooks/useAxios'
import refiner from '../utils/refiner'
import Spinner from './Spinner'
import Card from './Card'

const Collection = () => {
  const { response, loading, error } = useAxios({ method: 'get' })
  const [posts, setPosts] = useState([])

  const refineCats = async (res) => {
    const cats = await refiner(res)
    res !== null && setPosts(cats)
  }

  useEffect(() => {
    refineCats(response)
  }, [response])

  return (
    <main className='grid items-center'>
      <section className='mx-auto sm:columns-2 md:columns-3 max-w-7xl'>
        {error && <h5>{error.message}</h5>}
        {loading
          ? <Spinner />
          : posts.map(post => (
            <Card key={post.id} post={post} />)
          )
        }
      </section>
    </main>
  )
}

export default Collection
