import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";

export default function Editor() {
  return (
    <>
      <Header />
      <Container active="/demo/desk/editor" />
      <div class="container mx-auto border-b border-r border-l">
        <p>Editor</p>
      </div>
    </>
  );
}
