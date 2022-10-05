import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMetamask, useAddress, useContract, useEditionDrop } from "@thirdweb-dev/react";


export default function Home() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();
  const editionDrop =   useEditionDrop("0xDBa85c85E6589F687Fe10C53D6966Bd5aBc16ffe");
  // `useEditionDrop()` is deprecated and will be removed in a future major version. Please use `useContract<EditionDrop>()` instead.
  // useEditionDrop("0xDBa85c85E6589F687Fe10C53D6966Bd5aBc16ffe");
  // useContract<EditionDrop>("0xDBa85c85E6589F687Fe10C53D6966Bd5aBc16ffe");
  const tokenId = 2;
  const quantity = 1;

const claimNFT = async () => {
  try {
    await editionDrop?.claimTo(address, tokenId, quantity);
    console.log("🎉 NFT claimed successfully!");
  } catch (err) {
    console.log("💩 Error claiming NFT: ", err);
  }
};
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">coNFT!</a>
        </h1>

        <div className={styles.description}>
            {address ? ( 
              <>
              <p>You are signed in as {address}</p>
              <button onClick={claimNFT}>Claim NFT</button>
              </>
            ) : (
              <button onClick={connectWithMetamask}>Sign in with metamask</button>
            )}
          </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
