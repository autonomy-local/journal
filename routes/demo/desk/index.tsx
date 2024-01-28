import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";

export default function Desk() {
  return (
    <>
      <Header />
      <Container />
      <div class="container mx-auto border-b border-r border-l">
        <p>You can work</p>
      </div>
    </>
  );
}
