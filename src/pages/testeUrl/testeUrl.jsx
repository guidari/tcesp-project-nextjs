import { useSession } from "next-auth/client";
import styles from "./testeUrl.module.scss";

import Layout from "../../components/Layout/layout";
import { useRouter } from "next/router";
import NotAuthorized from "../../components/NotAuthorized/notAuthorized";
import { useEffect, useState } from "react";





export default function Home() {
  const [session, loading] = useSession();
  const router = useRouter();
  const [dados, setDados] = useState();


  const getPython = () => {
    fetch('http://localhost:8080/?url=' + props.name).then((res) => {
      res.json;
    }).then((data) => {
      setDados(data);
    });
  }


  const {
    query: { name, url, tipo_url },
  } = router;

  const props = {
    name,
    url,
    tipo_url
  };

  useEffect(() => {
    getPython();
  }, [])



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



