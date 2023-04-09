import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [chosenGender, setChosenGender] = useState('');

  const handleGenderChoice = (choice) => {
    setChosenGender(choice)
    let m = document.querySelector('#male-btn');
    let f = document.querySelector('#female-btn');
    if(choice === "Male"){
      m.classList.add('selected');
      f.classList.remove('selected');
    }
    if (choice === "Female") {
      m.classList.remove('selected');
      f.classList.add('selected');
    }
  }

  const handleMint = () => {

  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.genderOptions}> 
            <div
              id="male-btn"
              className={styles.genderButton}
              onClick={() => handleGenderChoice('Male')}  
            >
                Male
            </div>
            <div
              id="female-btn"
              className={styles.genderButton}
              onClick={() => handleGenderChoice('Female')}  
            >
                Female
            </div>
        </div>
        <button 
          id="mint-btn"
          className={styles.button}
          onClick={() => handleMint()}
        >
          Mint
        </button>
      </main>
    </>
  )
}
