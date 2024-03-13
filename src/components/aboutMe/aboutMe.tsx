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
                    Jestem doktorką nauk społecznych w dyscyplinie pedagogika. Specjalistka do spraw przedsięwzięć edukacyjnych w Zachodniopomorskim Centrum Doskonalenia Nauczycieli, zawodowo związana również z Instytutem Socjologii Uniwersytetu Szczecińskiego. Doktorka nauk społecznych w dyscyplinie pedagogika. Sekretarz czasopisma &quot;Parezja&quot;, będącego czasopismem Forum Młodych Pedagogów przy Komitecie Nauk Pedagogicznych PAN&quot;. Jestem badaczką jakościową i autoetnografką. Moje zainteresowania badawcze związane są z płcią kulturową, kobiecością, byciem kobietą w różnych kontekstach społeczno – kulturowych oraz socjologią morską. Jestem inicjatorką i współzałożycielką Kolektywu Myślowego Kobiet zrzeszającego kobiety z polskich uniwersytetów, w ramach którego badaczki zajmują się kwestiami i zjawiskami oddziałującymi na prywatne i zawodowe życie kobiet. Publikuję w takich czasopismach jak: „Qualitative Inquiry”, „Cultural Studies – Critical Methodologies”, “Dyskursy Młodych Andragogów”, „Przegląd Socjologii Jakościowej”, „Przegląd Badań Edukacyjnych” i innych. Monografia mojego autorstwa „Pedagogie kobiecości w polskim dyskursie prasy kobiecej” ukazała się w grudniu 2023 nakładem Wydawnictwa DSW, dzięki wygranej w konkursie im. Prof. im. R. Kwaśnicy zatytułowanego „Poza kulturową oczywistością”. Aktualnie prowadzę badania metodą jakościowych wywiadów narracyjnych z polskimi partnerkami marynarzy dalekomorskiej floty transportowej.
                </p>
            </div>
        </div>
    )
}