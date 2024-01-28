import { useSignal } from "@preact/signals";
import Header from "../components/templates/Header.tsx";
import Footer from "../components/templates/Footer.tsx";
import Body from "../components/templates/Body.tsx";

export default function Home() {
  return (
    <>
      <Header />
      <div class="flex flex-col items-center justify-center m-4">
        <Body />
      </div>
      <Footer />
    </>
  );
}
