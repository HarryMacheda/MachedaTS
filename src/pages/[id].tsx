import React from "react";
import { useParams } from "react-router-dom";

function Home() {
  const { id } = useParams<{ id: string }>();
  return (<p>The number is: {id}</p>);
};

export default Home;