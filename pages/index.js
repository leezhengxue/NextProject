import Header from '../components/Header'
import Banner from '../components/Banner'
import PostCard from '../components/PostCard'
import { NextProjectContext } from '../context/NextProjectContext'
import { useContext } from 'react'

const styles ={
  wrapper: 'mx-auto',
  main: 'flex justify-center',
  container: 'max-w-7xl flex-1',
  postLists: 'flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap- lg:grid-cols-3',

}

export default function Home() {

  //console logging the data from database for post aka article (change to users to get user data)
  const{ posts } = useContext(NextProjectContext)
    console.log(posts, 'this is the post logs')

  return (
    <div className={styles.wrapper}>
    <Header />
    <Banner />
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.postLists}>
          {posts.map(post => (
            <PostCard post={post} key={post.id}/>
          ))}
          
        </div>
      </div>
    </div>
    </div>
  )
}
