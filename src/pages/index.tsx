import CenteredLayout from "../layouts/CenteredLayout";

function Home() {
  return <h1>Index Page</h1>;
}

(Home as any).layout = CenteredLayout;
export default Home