import React from "react";
import { Container } from "@mui/material";
import BaseStaticPage from "@app/components/common/BaseStaticPage";
import { ItemResponse } from "@app/types/comom.types";
export default function ResourcesPage({ data }: { data: ItemResponse }) {
  return <BaseStaticPage story={data} />;
}
export async function getStaticProps() {
  // Fetch data from the external API
  const res = await fetch(
    "https://api.uat.earthwise.games/stories/the-new-time"
  );
  console.log("res :>> ", res);
  const data = await res.json();

  // Pass the fetched data to the page via props
  return {
    props: {
      data
    },
  };
}
