import Head from "next/head";
import styles from "../styles/home.module.css";
import Image from "next/image";
import ImageHome from "../../public/assets/hero.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tarefas +</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <Image src={ImageHome} alt={"Imagem"} priority></Image>

          <h1 className={styles.tittle}>
            Sistema feito para você organizar <br />
            seus estudos e tarefas
          </h1>

          <div className={styles.infoContent}>
            <section className={styles.box}>
              <span>+12 posts</span>
            </section>

            <section className={styles.box}>
              <span>+90 comentários</span>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
