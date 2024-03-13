import styles from "./footer.module.scss"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.layout}>
            <div>
                <h3>Kontakt</h3>
                <p><a href="mailto: colette.szczepaniak@usz.edu.pl">e-mail: colette.szczepaniak@usz.edu.pl</a></p>
                <p><a href="mailto: cszczepaniak@zcdn.edu.pl">e-mail: cszczepaniak@zcdn.edu.pl</a></p>
            </div>
            <div>
                <Link href="#aboutMe">O mnie</Link>
                <Link href="#publications">Publikacje</Link>
            </div>
            </div>
        </footer>
    )
}