import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import { WalletConnectButton } from '../components/WalletConnectButton'
import { UserCard } from '../components/UserCard'
import { UserNft } from '../components/UserNft'
import { NetworkToggle } from '../components/NetworkToggle'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>
          <a href='https://nfttransfer.app'>NFTtransfer.app</a>
        </h2>
        <UserCard />
        <WalletConnectButton />
        <UserNft />
      </main>
    </div>
  )
}

export default Home
