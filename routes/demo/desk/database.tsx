import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";

export default function Database() {
  return (
    <>
      <Header />
      <Container active="/demo/desk/database" />
      <div class="container mx-auto border-b border-r border-l">
        <p>Database</p>
      </div>
    </>
  );
}
