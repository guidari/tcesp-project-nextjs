import styles from "./notAuthorized.module.scss";

export default function NotAuthorized() {
  return (
    <>
      <div className={styles.content}>
        <h1>🚫 Ops! Parece que você não está logado 🚫</h1>

        <img src="/images/secure_login.svg" alt="" />
        <h3>Faça login para visualizar o conteúdo</h3>
      </div>
    </>
  );
}
