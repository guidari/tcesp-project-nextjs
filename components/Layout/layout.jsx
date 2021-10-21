import Header from "../Header/header";
import Footer from "../Footer/footer";
import { MunicipioContext } from "../../src/hooks/useMunicipio";
import { useContext } from "react";

export default function Layout({ children }) {
  // const data = useContext(MunicipioContext);
  // console.log(data);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
