import styles from '@/styles/Header.module.css';
import Link from 'next/link'

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href={'/'}>
                    {/*When you want to style the link you should put the styles inside it, the link itself doesn't take styles*/}
                    <a>DJ Events</a>
                </Link>
            </div>

            <nav>
                <ul>
                    <li>
                        <Link href={"/events"}>
                            <a>Events</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;