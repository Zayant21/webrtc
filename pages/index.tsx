import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import logo from '../img/main/logo.png'
import { Socket } from 'socket.io'

export default function Home() {
  const router = useRouter()
  const [roomName, setRoomName] = useState('')


  const joinRoom = () => {
    router.push(`/room/${roomName || Math.random().toString(36).slice(2)}`)
  }

  return (
    
    <div className={styles.index_container}>
      
      <Head>
        <title>WebRTC with Next.js, Socket.io</title>
        <meta name="description" content="Native WebRTC" />
        <link rel="icon" href="/video-chat.ICO" />
      </Head>
      
      <div className={styles.heading}>
      <h2>WebRTC with Next.js and Socket.io (Beta)</h2>
      </div>

      <div className ={styles.image_container}>
      <h2>Group Members</h2>
      <h4>Edmond (FrontEnd)</h4>
      <h4>Jimmy (FrontEnd)</h4>
      <h4>Adam (FrontEnd)</h4>
      <h4>Aman (Backend, Frontend)</h4>
      <h4>Zayan (Backend, FrontEnd)</h4>
      

      <main className={styles.main}>
      <h1>Lets Join a Room !</h1>
      

      <input onChange={(e) => setRoomName(e.target.value)} value={roomName} placeholder = {'Room'}className={styles.searchbar} />
      <button onClick={joinRoom} type="button" className={styles.fancybutton}>Join Room</button>
      </main>
      </div>
    </div>
  )
}

