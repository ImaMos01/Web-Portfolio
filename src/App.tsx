import Header from "./components/Header.tsx";
import Main from "./pages/Main.tsx";
import Footer from "./components/Footer.tsx";
import {Toaster} from "sonner";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Toaster theme="dark" />
      <Footer />
    </>
  );
}

export default App;
