import Image from 'next/image'
import { AiFillPlayCircle } from 'react-icons/ai'
import { IoLogoTwitter } from 'react-icons/io'
import { FaFacebook } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { HiOutlineLink } from 'react-icons/hi'
import { BiBookmarks } from 'react-icons/bi'
import { FiMoreHorizontal } from 'react-icons/fi'
import Profilephoto from '../public/assets/Profile.png'
import Banner from '../public/assets/banner.png'


const styles = {
    wrapper: 'flex items-center justify-center flex-[3] border-l border-r',
    content: ' h-screen p-[2rem]',
    postHeaderContainer: 'flex justify-between items-center mt-{2.2rem] mb-[1,2rem]',
    authorContainer: 'flex gap-[1rem]',
    authorProfileImageContainer: 'h-[3rem] w-[3rem] grid center rounded-full overflow-hidden',
    column: 'flex flex-1 flex-col justify-center',
    postDetails: 'flex gap-[.2rem] text-[#787878]',
    listenButton: 'flex items-center gap-[.2rem] text-[#1A8917]',
    socials: 'flex gap-[1rem] text-[#787878] cursor-pointer',
    space: 'w-[1.5rem]',
    bannerContainer: 'h-[18rem] w-full grid center overflow-hidden mb-[2rem]',
    articleMainContainer: 'flex flex-col gap-[1rem] mt-[1rem]',
    image: 'object-cover',
    title: 'font-bold text-3xl',
    subtitle: 'font-russo-one text-[1.4rem] text-[#292929]',
    articleText: 'font-russo-one text-[1.4rem] text-[#292929]'

}

const ArticleMain = () => {
    return(
 
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer}>
                        <div className={styles.authorProfileImageContainer}>
                            <Image 
                            className={'object-cover'}
                            src={Profilephoto}
                            width={100}
                            height={100}
                            />
                        </div>
                        <div className={styles.column}>
                            <div>Fear of GOD</div>
                            <div className={styles.postDetails}>
                                <span>June 15 • 7min read •</span>
                                    <span className={styles.listenButton}>
                                        <AiFillPlayCircle /> Listen
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <IoLogoTwitter />
                        <FaFacebook />
                        <GrLinkedin />
                        <HiOutlineLink />
                        <div className={styles.space} />
                        <BiBookmarks />
                        <FiMoreHorizontal />
                    </div>
                </div>
                <div className={styles.articleMainContainer}>
                    <div className={styles.bannerContainer}>
                        <Image
                        className={styles.image}
                        src={Banner}
                        height={400}
                        width={500}
                        />
                    </div>
                    <h1 className={styles.title}>
                    API in Nextjs with Firebase
                    </h1>
                    <h4 className={styles.subtitle}>
                        <div>
                            Fear Of GOD, June 15 ,2022
                        </div>
                        <div>
                            Brief: Learining how to code.
                        </div>
                    </h4>
                    <div className={styles.articleText}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </div>
                </div>
            </div>
        </div>
   
    )
}

export default ArticleMain