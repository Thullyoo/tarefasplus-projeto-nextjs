import Link from "next/link";
import styles from "./styles.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.navContainer}>
          <Link href={"/"}>
            <h1 className={styles.tittle}>
              Tarefas <span>+</span>
            </h1>
          </Link>
          <Link className={styles.dashboardBtn} href={"/dashboard"}>
            Meu painel
          </Link>
        </nav>
        <button className={styles.loginBtn}>Acessar</button>
      </section>
    </header>
  );
}
