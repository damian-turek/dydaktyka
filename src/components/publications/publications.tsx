import styles from "./publications.module.scss"

export default function Publications() {
    const publications:string[] = [
        "C. Szczepaniak, Pedagogie kobiecości w polskim dyskursie prasy kobiecej, Wydawnictwo DSW, listopad 2023, w druku, ISBN 978-83-65408-67-9.",
        "A. Cywiński, C. Szczepaniak, Pedagogia intelektualisty publicznego na przykładzie życia i twórczości Gordona Matthew Sumner`a (Sting), „Parezja” 2023, w druku.",
        "C. Szczepaniak, Dom to nie tylko dach, ściany i okna. Opowieść o tym jak próbowałam zaoferować subsydiarność, W: A. Cywiński, W. Lib, L. Marek, E. Perzycka-Borowska (red.) TROSKA. Co wojna w Ukrainie nam zrobiła? Autoetnograficzne opowieści studentów i nauczycieli akademickich, Wydawnictwo Uniwersytetu Rzeszowskiego, 2023, w druku",
        "D. Gruntkowska, E. Perzycka – Borowska, C. Szczepaniak, Multivocal Stories About Caring During The War In Ukraine, As Told by Polish Researchers, “Cultural Studies ↔ Critical Methodologies”, w druku.",
        "K. Dobosz, A. Kacperczyk, M. Kafar, K.T. Konecki, H. Kroczak, A. Melnikov, C. Szczepaniak, O. Szwabowski, The Reverberations of War: Ukrainian and Polish Academics Write a Collective Autoethnography of Experiencing War in Ukraine, “Cultural Studies ↔ Critical Methodologies”, 2023-06-06, DOI:10.1177/15327086231178013",
        "C. Szczepaniak, W „mikroświecie macierzyństwa”: doświadczanie samotności macierzyńskiej w badaniu autoetnograficznym, „Przegląd Socjologii Jakościowej”, t. XVIII, nr 4/2022.",
        "C. Szczepaniak, Cechy kobiecości w kontekstach społeczno – kulturowych. Badanie autoetnograficzne kobiety spodziewającej się córki, „Dyskursy Młodych Andragogów”, 23/2022.",
        "C. Szczepaniak, Pozorne doktoryzowanie się, pozorne matkowanie w czasie pandemii. Matka - doktorantka w czasie pandemii, w: Dzienniki z Pandemii. Autorefleksje nauczycieli akademickich i studentów w kontekście edukacji zdalnej w Polsce, E. Perzycka, E. Baron-Polańczyk, M. Gliniecka, W. Lib (red.), Wydawnictwo Uniwersytetu Zielonogórskiego, Wrzesień 2022.",
        "C. Szczepaniak, Autoetnografia trudów macierzyństwa, „Ars Educandi”, nr 18 / 2021.",
        "P. Kaczmarczyk, A. Madys, M. Pławski, C. Szczepaniak, O. Szwabowski, P. Wężniejewska, Kolektywne majsterkowanie albo zmiana, która nie nadchodzi, w: M. Kafar, A. Kacperczyk (red.), Autoetnograficzne „zbliżenia” i „oddalenia”, Wydawnictwo Uniwersytetu Łódzkiego, Łódź 2020.",
        "P. Wężniejewska, O. Szwabowski, C. Szczepaniak, M. Pławski, The Praise of Collective Autoetnography, „Cultural Studies – Critical Methodologies”, first published: 18. 07. 2019.",
        "M. Pławski, O.Szwabowski, C. Szczepaniak, P. Wężniejewska, Friendly writing as Non – inquiry: The problems of Collective Autoethnographic Writing About Collective Autoethnographic Wiritng, „Qualitative Inquiry”, Nov – Dec. 2019, vol. 25, numer 9 – 10.",
        "O. Szwabowski, C. Szczepaniak, M. Pławski, P. Wężniejewska, After the first review: A Trembling Poem, „Qualitative Inquiry”, Nov – Dec. 2019, vol. 25, numer 9 – 10.",
        "C. Szczepaniak, Ukorporacyjnienie uniwersytetu w badaniu autoetnograficznym, „Pedagogika Szkoły Wyższej”, nr 1/2018 (23)."
    ]
    const conferences:string[] = [
        "X Transdyscyplinarne Sympozjum Badań Jakościowych, „Krytyczne badania jakościowe dla lepszego świata”, Słupsk – Ustka, 13 – 16.06.2023, Uniwersytet Pomorski w Słupsku, tytuł wystąpienia: „On the authenthicity in autoethnography in the era of AI. Can AI write an autoethnography?”",
        "Kobiecość: Literatura – Sztuka – Popkultura, Uniwersytet Mikołaja Kopernika w Toruniu i Instytut Przeciwdziałania Wykluczeniom, online, 23 – 24.02.2023, tytuł wystąpienia: „Ciałopozytywność czy walka z ciałem i jego dyscyplinowanie? Krytyczna analiza dyskursu przekazów czasopisma „Women’s Health”.",
        "International Symposium on Autoethnography and Narrative, 03- 05. 01. 2023, online,  Wystąpienie wspólnie z : K. Dobosz, A. Kacperczyk, M. Kafar, K. T. Konecki, K. Kroczak, A. Melnikov, O. Szwabowski, zatytułowane: The Reverberations of War: Ukrainian and Polish Academics Perform a Collective Autoethnography of Experiencing War in Ukraine.",
        "XXXV Letnia Szkoła Młodych Pedagogów im. Marii Dudzikowej, Pedagogika i edukacja w wikiświecie; o zmianie/zmianach kultury edukacji w środowisku cyfrowym, (Dąbrowa Górnicza – Bielsko – Biała, 5-9.09.2022), tytuł wystąpienia (wspólnie z dr Aleksandrem Cywińskim US): Kategoria publicznego intelektualisty w ujęciu Henry’ego Giroux na przykładzie Stinga.",
        "International Symposium on Autoethnography and Narrative (3 - 5.01.2022, Chicago, online), tytuł wystąpienia: „What Does „for life” Mean? Autoethnography of Motherhood”.",
        "XXXIV Letnia Szkoła Młodych Pedagogów im. Marii Dudzikowej, Pedagogika w Uniwersytecie. Konteksty – Koncepcje – Praktyki, (Poznań – Obrzycko, 13 – 17.09.2021), tytuł wystąpienia: „Autoetnografia jako metoda badań nad kobiecością i macierzyństwem. Rozterki, zagwozdki, pytania”",
        "Niekongres Pedagogiczny Online, grupa robocza „Macierzyństwo” – koordynowanie i współprowadzenie prac grupy, 26.06.2021, online.",
        "IX Transdyscyplinarne Sympozjum Badań Jakościowych, Uniwersytet w Białymstoku (8-9.06.2021, online), tytuł wystąpienia: „Samotność rodzicielska – próba z(re)definiowania zjawiska w oparciu o badanie autoetnograficzne rodziny marynarskiej”.",
        "Ogólnopolska Konferencja Naukowa „Doświadczanie studiowania” (5-6.12.2017): Członkini komitetu organizacyjnego, Tytuł wystąpienia: „Korpo czy uczelnia? Z doświadczeń studentki”. "
    ]
    const seminaries:string[] = [
        "Ogólnopolskie Seminarium Naukowe, „Pedagogika Pozytywna: idee – badania – praktyki”, 25.03.2022.",
        "Konferencja „Zostań badaczką. Kobiety w nauce 2022”, 11.02.2022",
        "Ogólnopolskie Seminarium Naukowe \"Narracja w pedagogice\", 08.12.2021",
        "Konferencja przedzjazdowa PTP pt. „Przesilenie w kulturze jako przedmiot badań pedagogicznych”, 25.10.2021."
    ]
    const workshops:string[] = [
        "International Symposium on Autoethnography and Narrative workshops (3.01.2022).",
        "Warsztat Metodologiczny (6 godzin, online) „Analiza Dyskursu” prowadzony przez Annę Horolets i Joannę Bielecką – Prus w ramach IX Transdyscyplinarnego Sympozjum Badań Jakościowych organizowanego przez Uniwersytet w Białymstoku (07.06.2021)."
    ]

    return (
        <div id="publications" className={styles.publicationLayout}>
            <div className={styles.publication}>
                <h2>Publikacje</h2>
                {publications.map((publication) => (
                    <ul key={publication}>
                        <li>{publication}</li>
                        <br/>
                    </ul>
                ))}
            </div>
            <div className={styles.publication}>
                <h2>Konferencje</h2>
                {conferences.map((conferences) => (
                    <ul key={conferences}>
                        <li>{conferences}</li>
                        <br/>
                    </ul>
                ))}
            </div>
            <div className={styles.publication}>
                <h2>Seminaria</h2>
                {seminaries.map((seminary) => (
                    <ul key={seminary}>
                        <li>{seminary}</li>
                        <br/>
                    </ul>
                ))}
            </div>
            <div className={styles.publication}>
                <h2>Warsztaty</h2>
                {workshops.map((workshop) => (
                    <ul key={workshop}>
                        <li>{workshop}</li>
                        <br/>
                    </ul>
                ))}
            </div>
        </div>
    )
}