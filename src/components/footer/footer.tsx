import styles from "./footer.module.scss"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer name="footer" className={styles.footer}>
            <div className={styles.layout}>
            <div>
                <h3>Colette Szczepaniak</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet faucibus dui, sed aliquet lectus sollicitudin ultricies. Suspendisse pellentesque sapien risus, et ultricies lorem placerat non. Nam tellus justo, placerat ac congue sed, aliquet eget augue. Curabitur justo erat, scelerisque vel pretium quis, tempus sit amet justo. </p>
            </div>
            <div>
                <h3>Kontakt</h3>
                <p>tel. 123 456 789</p>
                <p>e-mail: przykład@gmail.com</p>
                <p>facebook</p>
            </div>
            <div>
                <Link href="#">O mnie</Link>
                <Link href="#">Publikacje</Link>
                <Link href="#">Kontakt</Link>
            </div>
            </div>
        </footer>
    )
}