import React from "react";
import BaseStaticPage from "@app/components/common/BaseStaticPage";
import { ItemResponse } from "@app/types/comom.types";
export default function CategoriesPage({ data }: { data: ItemResponse }) {
  return <BaseStaticPage story={data} />;
}
export async function getStaticProps() {
  // Fetch data from the external API
  const res = await fetch(
    "https://api.uat.earthwise.games/stories/the-quest-of-the-elowyn-game"
  );
  const data = await res.json();

  // Pass the fetched data to the page via props
  return {
    props: {
      data,
    },
  };
}
