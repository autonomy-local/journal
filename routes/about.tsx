import Header from "../components/templates/Header.tsx";
import Footer from "../components/templates/Footer.tsx";

export default function About() {
  return (
    <>
      <Header />
      <div class="flex flex-col items-center justify-center m-4">
        <h1 class="text-2xl font-bold">About</h1>
        <p class="text-xl">This is the about page.</p>
      </div>
      <Footer />
    </>
  );
}
