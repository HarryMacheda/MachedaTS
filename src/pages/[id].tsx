import React from "react";
import { useParams } from "react-router-dom";
import CenteredLayout from "../layouts/CenteredLayout";

function Home() {
  const { id } = useParams<{ id: string }>();
  return (<p>The number is: {id}</p>);
};

(Home as any).layout = CenteredLayout;
export default Home;