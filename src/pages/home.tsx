import CenteredLayout from "../layouts/CenteredLayout";

function Home() {
  return <h1>Home Page</h1>;
}

(Home as any).layout = CenteredLayout;
export default Home