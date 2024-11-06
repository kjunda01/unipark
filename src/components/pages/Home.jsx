import LinkButton from "../layout/LinkButton";

import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.homeContainer}>
      <h1>
        Bem-vindo(a) ao <span>Projeto Unipark</span>
      </h1>
      <p>Para visualizar em tempo real a câmera clique abaixo</p>
      <LinkButton to="/aovivo" texto="Mostrar câmera" />
    </section>
  );
}

export default Home;
