import Header from "../../../components/templates/Header.tsx";
import Container from "../../../components/pages/desk/Container.tsx";
import AreaList from "../../../components/pages/desk/area/AreaList.tsx";
export default function Area() {
  return (
    <>
      <Header />
      <Container active="/demo/desk/area" />
      <div class="container mx-auto border-b border-r border-l">
        <AreaList />
      </div>
    </>
  );
}
