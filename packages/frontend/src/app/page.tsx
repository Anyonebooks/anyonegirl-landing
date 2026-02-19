import styles from "./page.module.scss";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <header className={styles.title}>
          <span
            className={`${styles.typeLargeAllCaps} ${styles.linkExclusive}`}
          >
            anyonegirl.com
          </span>{" "}
          is now{" "}
          <h1
            className={`${styles.typeLargeAllCaps} ${styles.titleLink}  ${styles.linkExclusive}`}
          >
            <a href="https://www.anyonebooks.com/">anyonebooks.com</a>
          </h1>
        </header>

        <div className={styles.introduction}>
          <p>
            What has served as a digital archive of independent art and writings
            from contributors all over the world since 2009, is now realised in
            a publishing house, creating tangible books and catalogues, in
            collaboration with Natasha Mead and{" "}
            <a
              className={`${styles.italicLink} ${styles.linkExclusive}`}
              href="https://1of1studio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              1/1 Studio.
            </a>
          </p>
          <p>
            <span className={styles.typeLargeAllCaps}>ANYONEGIRL</span> was
            founded and edited by{" "}
            <a
              className={styles.linkExclusive}
              href="https://www.instagram.com/anyonegirl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Yasmine Ganley.
            </a>
            <br />
            Her current practice involves a combination of creative direction,
            brand consultancy, storytelling and photography, collaborating with
            independent brands, makers and artists.
          </p>
        </div>
      </div>

      <div className={styles.image}>
        <Image
          src="/images/anyonebooks_hero.jpg"
          alt="anyonegirl"
          width={1923}
          height={1281}
        />
      </div>

      <footer className={styles.footer}>
        <div className={styles.bookList}>
          <h2 className={styles.headingItalic}>Recent Books</h2>
          <ul className={styles.bookLinks}>
            <li>
              <a
                className={styles.linkNormal}
                href="https://www.anyonebooks.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                ALTARS by Jenna Saraco (2024), View Book
              </a>
            </li>
            <li>
              <a
                className={styles.linkNormal}
                href="https://www.anyonebooks.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Men Carrying Flowers Vol.2 (2025), View Book
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.footerLinks}>
          <a className={styles.linkNormal} href="mailto:yasmine@anyonegirl.com">
            yasmine@anyonegirl.com
          </a>

          <a
            className={styles.linkNormal}
            href="https://www.instagram.com/anyonegirl"
            target="_blank"
            rel="noopener noreferrer"
          >
            @anyonegirl
          </a>
        </div>
      </footer>
    </main>
  );
}
