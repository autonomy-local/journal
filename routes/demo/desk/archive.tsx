import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";

export default function Archive() {
  return (
    <>
      <Header />
      <Container active="/demo/desk/archive" />
      <div class="container mx-auto border-b border-r border-l">
        <p>Archive</p>
      </div>
    </>
  );
}
