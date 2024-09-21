import Image from 'next/image'
import Hero from '../../images/hero.jpg'
import styles from './aboutMe.module.scss'

export default function AboutMe() {
    return (
        <div id="aboutUs" className={styles.aboutMe}>
            <Image
                src={Hero}
                alt="image"
                id="hero"
            />
            <div className={styles.description}>
                <h2>Colette Szczepaniak</h2>
                <p>
                    Adiunktka w Instytucie Socjologii Uniwersytetu Szczecińskiego, specjalistka do spraw przedsięwzięć edukacyjnych w Zachodniopomorskim Centrum Doskonalenia Nauczycieli. Doktorka nauk społecznych w dyscyplinie pedagogika. Sekretarzyni czasopisma &ldquo;Parezja&ldquo;, będącego czasopismem Forum Młodych Pedagogów przy Komitecie Nauk Pedagogicznych PAN&ldquo;. Badaczka jakościowa, której zainteresowania badawcze związane są z płcią kulturową, kobiecością w różnych kontekstach społeczno – kulturowych oraz socjologią morską. Publikuje w takich czasopismach jak: „Qualitative Inquiry”, „Cultural Studies – Critical Methodologies”, “Dyskursy Młodych Andragogów”, „Przegląd Socjologii Jakościowej”, „Przegląd Badań Edukacyjnych” i innych. Monografia mojego autorstwa „Pedagogie kobiecości w polskim dyskursie prasy kobiecej” ukazała się w grudniu 2023 nakładem Wydawnictwa DSW, dzięki wygranej w konkursie im. Prof. im. R. Kwaśnicy zatytułowanego „Poza kulturową oczywistością”.
                </p>
            </div>
        </div>
    )
}