import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/assets/FOGessentials_v2_logo.png'
import {FiBookmark} from 'react-icons/fi'
import { db } from '../firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'


const styles={
    wrapper: 'flex max-w-[46rem] h[10rem] items-center gap-[1rem] cursor-pointer',
    authorContainer: 'flex gap-1',
    authorImageContainer: 'grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    authorImage: 'object-cover',
    authorName:'font-semibold',
    title:'font-bold text-2xl',
    briefing: 'text-[#787878]',
    detailsContainer: 'flex items-center justify-between text-[#787878]',
    articleDetails: 'my-2 text-[0.8rem]',
    category:'bg-[#F3F3F3] rounded-full px-2 py-1',
    bookmarkContainer: 'cursor-pointer',
    postDetails: 'flex flex-[2.5] flex-col',
    thumbnailContainer: 'flex-1',
}

const PostCard = ({post}) => {
    const[authorData, setAuthorData] = useState(null)

    useEffect(() => {
        const getAuthorData = async () => {
                      
            console.log((await getDoc(doc(db, 'users', post.data.author))).data())
            setAuthorData(
                (await getDoc(doc(db, 'users', post.data.author))).data()
            )
        }

        getAuthorData()
    },[] )
    return (
        <Link href={`/post/${post.id}`}>
            <div className={styles.wrapper}>
                <div className={styles.postDetails}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorImageContainer}>
                            <Image
                            src={`https://res.cloudinary.com/demo/image/fetch/${authorData?.imageUrl}`}
                            className={styles.authorImage}
                            width={40}
                            height={50}
                            />
                        </div>

                        <div className={styles.authorName}>
                            {authorData?.name}
                        </div>
                    </div>

                    <h1 className={styles.title}>{post.data.title}</h1>

                    <div className={styles.briefing}>{post.data.brief}</div>

                    <div className={styles.detailsContainer}>
                        <span className={styles.articleDetails}>
                            {new Date(post.data.postedOn).toLocaleString(
                                'en-us',{day:'numeric', month:'short'}
                                )} • {post.data.postLength} min read • <span className={styles.category}>{post.data.category}</span>
                        </span>
                        <span className={styles.bookmarkContainer}>
                            <FiBookmark className='h-5 w-5'></FiBookmark>
                        </span>
                    </div>
                </div>
                <div className={styles.thumbnailContainer}>
                    <Image 
                    //check out next.config.js for explaination
                    src={`https://res.cloudinary.com/demo/image/fetch/${post.data.bannerImage}`}
                    height={100}
                    width={100}
                    />
                </div> 
            </div>
        </Link>
    )    
}

export default PostCard