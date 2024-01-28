import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";

export default function OnSite() {
  return (
    <>
      <Header />
      <Container active="/demo/desk/on-site" />
      <div class="container mx-auto border-b border-r border-l">
        <p>On-Site</p>
      </div>
    </>
  );
}
