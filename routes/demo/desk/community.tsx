import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";

export default function Community() {
  return (
    <>
      <Header />
      <Container active="/demo/desk/community" />
      <div class="container mx-auto border-b border-r border-l">
        <p>Community</p>
      </div>
    </>
  );
}
