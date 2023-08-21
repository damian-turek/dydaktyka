import styles from './page.module.css'
import AboutMe from '@/components/aboutMe/aboutMe'
import Publications from '@/components/publications/publications'

export default function Home() {
  return (
    <main className={styles.main}>
      <AboutMe/>
      <Publications/>
    </main>
  )
}
