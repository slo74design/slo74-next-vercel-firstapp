import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

export const MainLayout: FC = ({children}) => {
     return (
          <div className={styles.container}>
               <Head>
                    <title>Create App by Salva</title>
                    <meta name="description" content="Generated by create next app" />
                    <link rel="icon" href="/favicon.ico" />
               </Head>
          
               <Navbar></Navbar>
          
               <main className={styles.main}>
                    {children}
               </main>
      
          </div>
     )
}
