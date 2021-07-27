import styles from '@/styles/Footer.module.css'
import Link from 'next/link'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Copyright &copy; DJ Events 2012</p>
            <p>
                <Link href={"/about"}>
                    About This Project
                </Link>
            </p>
        </footer>
    );
}

export default Footer;