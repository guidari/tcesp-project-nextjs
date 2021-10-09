import { useSession } from "next-auth/client";
import styles from "./index.module.scss";

import Layout from "../components/Layout/layout";
import SearchBox from "../components/SearchBox/searchBox";

export default function Home() {
  const [session, loading] = useSession();

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <main className={styles.main}>
          <p>Faça login para ver a página</p>
        </main>
      </Layout>
    );
  }

  // If session exists, display content
  return (
    <Layout>
      <main className={styles.main}>
        <section>
          <SearchBox />
        </section>

        <section>
          <h1>Últimas Consultas</h1>
        </section>
      </main>
    </Layout>
  );
}
