import styles from "./footer.module.scss"
import Link from 'next/link'

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div className={styles.layout}>
            <div>
                <h3>Colette Szczepaniak</h3>
                <p>Colette Szczepaniak, doktor nauk społecznych związana z Uniwersytetem Szczecińskim, to badaczka jakościowa i autoetnografka. Jej prace koncentrują się na płci kulturowej, kobiecości oraz socjologii morskiej. Jest współzałożycielką Kolektywu Myślowego Kobiet, który bada wpływ różnych zjawisk na życie kobiet z polskich uczelni – zarówno w sferze prywatnej, jak i zawodowej.</p>
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