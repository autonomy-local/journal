import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";

export default function Area() {
  return (
    <>
      <Header />
      <Container active="/demo/desk/area" />
      <div class="container mx-auto border-b border-r border-l">
        <p>Area</p>
      </div>
    </>
  );
}
