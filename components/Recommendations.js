import Image from 'next/image'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdMarkEmailUnread } from 'react-icons/md'
import ReplitLogo from '../public/assets/FOGessentials_v2_logo.png'
import TutorialImg from '../public/assets/FOGessentials_v2_logo.png'
import CPLogo from '../public/assets/FOGessentials_v2_logo.png'
import Profilephoto from '../public/assets/Profile.png'
import JSLogo from '../public/assets/FOGessentials_v2_logo.png'

const styles ={
    wrapper: 'h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]',
    accentedButton: 'flex items-center justify-center bg-black text-sm text-white my-[2rem] py-[.6rem] rounded-full',
    searchBar:'flex items-center gap-[.6rem] h-[2.6rem] px-[1rem] border rounded-full',
    searchInput: 'border-none outline-none bg-none w-full',
    authorContainer:'my-[2rem]',
    authorProfileImageContainer: 'h-[5rem] w-[5rem] rounded-full overflow-hidden',
    authorName: 'dont-semibold mb-[.2rem] mt-[1rem]',
    authorFollowing: 'text-[#787878] text-sm',
    authorActions: 'flex gap-[.6rem] my-[1rem]',
    actionButton: 'bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm',
    recommendationAuthorProfileImageContainer: 'rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]',
    recommendationAuthorName: 'text-sm',
    recommendationAuthorContainer: 'flex items-center gap-[.6rem]',
    recommendationThumbnailContainer: 'flex flex-1 items-center justify-center h=[4rem] w-[4rem]',
    recommendationThumbnail: 'object-cover',
    articleContentWrapper: 'flex items-center justify-between cursor-pointer my-[1rem]',
    articleContent: 'flex-[4]',
    


}   
const Recommendations = ({ author }) => {
    return(
        <>
        <div className={styles.wrapper}>
            <div className={styles.accentedButton}>
                Get Unlimited Access
            </div>
            <div className={styles.searchBar}>
                <AiOutlineSearch/>
                <input
                className={styles.searchInput}
                placeholder='Search'
                type='text'
                />
            </div>
            <div className={styles.authorContainer}>
                <div className={styles.authorProfileImageContainer}>
                    <Image 
                    src={Profilephoto}
                    width={100}
                    height={100}
                    />
                </div>
                <div className={styles.authorName}>Fear Of GOD</div>
                <div className={styles.authorFollowing}>1M followers</div>
                <div className={styles.authorActions}>
                    <button className={styles.actionButton}>Follow</button>
                    <button className={styles.actionButton}><MdMarkEmailUnread/></button>
                </div>
            </div>
            <div className={styles.recommendationContainer}>
                <div className={styles.title}>More from Site</div>
                <div className={styles.articlesContainer}>

                    {recommendedPosts.map(post => (
                    <div className={styles.articleContentWrapper}>
                        <div className={styles.articleContent}>
                            <div className={styles.recommendationAuthorContainer}>
                                <div className={styles.recommendationAuthorProfileImageContainer}>
                                    <Image src={post.author.image} height={100} width={100}/>
                                </div>
                                <div className={styles.recommendationAuthorName}>{post.author.name}</div>
                            </div>
                            <div className={styles.recommendationTitle}>{post.title}</div>
                        </div>
                        <div className={styles.recommendationThumbnailContainer}>
                            <Image className={styles.recommendationThumbnail}
                            src={post.image} 
                            height={100} 
                            width={100}/>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Recommendations

const recommendedPosts = [
    {
        title:'My previous web projects and designs', 
        image: ReplitLogo,
        author: {
            name:'SugaDaddy',
            image:Profilephoto
        }
    },
    {
        title:'Alternate pages', 
        image: TutorialImg,
        author: {
            name:'profile',
            image:Profilephoto
        }
    },
    {
        title:'How to become web developer 2022', 
        image: JSLogo,
        author: {
            name:'SugaDaddy',
            image:Profilephoto
        }
    },
]