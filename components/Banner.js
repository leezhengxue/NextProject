import Image from 'next/image'
import Logo from '../public/assets/banner.png'

const styles = {
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
  wrapper: 'h-max-[10rem] flex items-center justify-center border-y border-black bg-[#8A865D]',
  content: 'max-w-7xl flex flex-1 items-center justify-between py-3',
 
} 

const Banner = () => {
    return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className='space-y-5 px-10 flex-[3]'>
          <h1 className='max-w-xl text-[6rem] font-russo-one'>
            Clean AF.
          </h1>
          <h3 className='space-y-5'>
            Just a very clean and tidy website for portfolio. Next.js. Tailwindcss. 
          </h3>
          <button className={styles.accentedButton}>
            Explore More
          </button>
        </div>
        <Image
        className='hidden h-31 md:inline-flex object-contain flex-1 p-3'
          src={Logo}
          height={400}
          width={500}
        />
      </div>
    </div>
    </>
    )
}

export default Banner