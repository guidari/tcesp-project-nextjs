import { useSession } from "next-auth/client";
import styles from "./municipio.module.scss";

import Layout from "../../../components/Layout/layout";
import MunicipioData from "../../../components/MunicipioData/municipioData";
import { useRouter } from "next/router";
import NotAuthorized from "../../../components/NotAuthorized/notAuthorized";

export default function Home() {
  const [session, loading] = useSession();

  const router = useRouter();

  const {
    query: { name, year, month, info },
  } = router;

  const props = {
    name,
    year,
    month,
    info,
  };
  // console.log(name, year, month, info);

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== "undefined" && loading) return null;

  // If no session exists, display access denied message
  if (!session) {
    return (
      <Layout>
        <NotAuthorized />
      </Layout>
    );
  }

  // If session exists, display content
  return (
    <Layout>
      <main className={styles.main}>
        <section>
          <h1>Status</h1>
        </section>

        <section>
          <MunicipioData props={props} />
        </section>
      </main>
    </Layout>
  );
}
