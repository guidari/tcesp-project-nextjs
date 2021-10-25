import { useSession } from "next-auth/client";
import styles from "./testeUrl.module.scss";

import Layout from "../../components/Layout/layout";
import { useRouter } from "next/router";
import NotAuthorized from "../../components/NotAuthorized/notAuthorized";




function Home() {
  const [session, loading] = useSession();
  const router = useRouter();

  const {
    query: { name, url, tipo_url },
  } = router;

  const props = {
    name,
    url,
    tipo_url
  };

  console.log(props.name);
  pega(props);


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
      foi
    </Layout>
  );
}

async function pega(props) {

  //console.log(props);

  const response = await fetch('http://localhost:8080/?q=passar&test=' + props.name);
  const data = await response.json();
  console.log(data.datahome.text_one)

  return { props: { data } };
}


export default Home;