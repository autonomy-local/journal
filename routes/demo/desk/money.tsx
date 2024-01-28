import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";

export default function Money() {
  return (
    <>
      <Header />
      <Container active="/demo/desk/money" />
      <div class="container mx-auto border-b border-r border-l">
        <p>Money</p>
      </div>
    </>
  );
}
