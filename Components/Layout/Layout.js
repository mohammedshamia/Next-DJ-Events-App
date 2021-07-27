import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from '@/styles/Layout.module.css'
import Showcase from "@/Components/Showcase/Showcase";
import {useRouter} from "next/router";


function Layout({title ,keywords, description, children}) {
    const router =useRouter()
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
            {router.pathname === '/' &&
                <Showcase/>
            }            <main className={styles.container}>{children}</main>
            <Footer/>
        </>
    );
}

Layout.defaultProps={
    title:"DJ-APP",
    description:"Welcome to GJ app",
    keywords:"music, dj, edm, events"
}

export default Layout;