import styles from '../styles/Home.module.css'

import Link from 'next/link'; 
import ImgCard from '../comps/ImgCard';
import NavBar from '../comps/NavBar/index.js'; 

export default function Home() {
  return (
    <div className={styles.container}>
      <Link href ="/boiler">go to boiler</Link>
      <ImgCard bg="#000000">
        <h3>YOLO you only live once</h3>
      </ImgCard>
      <ImgCard img="http://placekitten.com/300/300" name="this is a cat meow" tcl="#ABC980"/>
      <NavBar />
    </div>
  )
}
