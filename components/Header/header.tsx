import { signIn, signOut, useSession } from "next-auth/client";
import styles from "./header.module.scss";

export default function Header() {
  const [session, loading] = useSession();

  return (
    <header>
      <noscript>
        <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
      </noscript>
      <div>
        <p
          className={`nojs-show ${
            !session && loading ? styles.loading : styles.loaded
          }`}
        >
          <section className={styles.header}>
            <div>
              <img src="/images/logo_tcesp.png" alt="tcesp" />
            </div>
            {!session && (
              <>
                <div>
                  <a
                    href={`/api/auth/signin`}
                    className={styles.buttonPrimary}
                    onClick={(e) => {
                      e.preventDefault();
                      signIn("github");
                    }}
                  >
                    Entrar
                  </a>
                </div>
              </>
            )}
            {session?.user && (
              <>
                <section className={styles.loggedIn}>
                  <span
                    style={{ backgroundImage: `url(${session.user.image})` }}
                    className={styles.avatar}
                  />
                  <div className={styles.userName}>
                    <span>
                      <strong>{session.user.name}</strong>
                    </span>
                    <br />
                    <a
                      href={`/api/auth/signout`}
                      onClick={(e) => {
                        e.preventDefault();
                        signOut();
                      }}
                    >
                      Sair
                    </a>
                  </div>
                </section>
              </>
            )}
          </section>
        </p>
      </div>
    </header>
  );
}
