import ReadersNav from '../../components/ReadersNav'
import ArticleMain from '../../components/ArticleMain'
import Recommendations from '../../components/Recommendations'
import { useContext, useEffect, useState } from 'react'
import { NextProjectContext } from '@/context/NextProjectContext'
import { useRouter } from 'next/router'

const styles = {
    content: 'flex',
}
const Post = () => {
    const {posts, users} = useContext(NextProjectContext)
    const router = useRouter()
    const [post,setPost] = useState ([])
    const [author,setAuthor] = useState([])

    useEffect(() => {
        if (posts.length === 0){
            return
        }
        //to check if router is actually performing correctly (it will log your slug)
        // console.log(router.query.slug, 'router thing')
        setPost(posts.find(post => post.id === router.query.slug))
        //console to see what users data u pulling
        // console.log(users,'user thing')
        //console to see particular ID user data
        // console.log(users.find(user => user.id === post?.data?.author),'actual user')
        setAuthor(users.find(user => user.id === post.data?.author))
    },[post])
    return (
        <div className={styles.content}>
        <ReadersNav />
        <ArticleMain 
        post={post} author={author}
        />
        <Recommendations />
        </div>
    )       
}

export default Post