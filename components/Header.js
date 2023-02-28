import Image from 'next/image'
import Logo from '../public/assets/FOGessentials_v2_logo.png'

const styles = {
    wrapper: 'flex justify-center gap-10 p-5 bg-[#8A865D]',
    content: 'max-w-7xl flex flex-1 justify-between',
    logoContainer: 'flex items-center flex-start',
    logo:'cursor-pointer object-contained',
    navbar: 'flex cursor-pointer items-center space-x-10',
    button: 'bg-black text-white py-2 px-4 rounded-full',
}

const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Image
                    className={styles.logo}
                    src={Logo}
                    height={40}
                    width={200}
                    />
                </div>

                <div className={styles.navbar}>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Sign In</div>
                    <div className={styles.button}>Get Started</div>
                </div>
            </div>
        </div>
    )
}

export default Header