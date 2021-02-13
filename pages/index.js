import Head from 'next/head';
import Image from 'next/image';

import { useAuth } from '../lib/auth';
import styles from '../styles/Home.module.css';

export default function Home() {
  const auth = useAuth();

  return (
    <div>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <main>
        <h1>Fast Feedback</h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
        {auth?.user ? (
          <button onClick={() => auth.signout()}>Sign Out</button>
        ) : (
          <button onClick={() => auth.signinWithGithub()}>Sign In</button>
        )}
        <div>{auth?.user?.email}</div>
        {auth?.user?.photoURL && (
          <div className={styles.profile_container}>
            <Image
              src={auth?.user?.photoURL}
              alt="Profile"
              width={500}
              height={500}
            />
          </div>
        )}
      </main>
    </div>
  );
}
