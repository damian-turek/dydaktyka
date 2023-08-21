import styles from "./header.module.scss"
import Link from 'next/link'

export default function Header() {
    return (
        <header className={styles.header}>
            <nav>
                <Link href="#aboutUs">O mnie</Link>
                <Link href="#publications">Publikacje</Link>
                <Link href="#footer">Kontakt</Link>
            </nav>
        </header>
    )
}
