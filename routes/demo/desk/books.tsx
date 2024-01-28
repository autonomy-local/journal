import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";

export default function Book() {
  return (
    <>
      <Header />
      <Container active="/demo/desk/books" />
      <div class="container mx-auto border-b border-r border-l">
        <p>Book</p>
      </div>
    </>
  );
}
