"use client"
import { ItemResponse } from "@app/types/comom.types";
import BaseStaticPage from "@app/components/common/BaseStaticPage";
export default function CollectionsPage({ story }: {
  story: ItemResponse
}) {
  return (
    <BaseStaticPage story={story}/>
  )
}
export async function getStaticProps() {
  // Fetch data from the external API
  const res = await fetch(
    "https://api.uat.earthwise.games/stories/elowyn-the-elven-tree"
  );
  const data = await res.json();

  // Pass the fetched data to the page via props
  return {
    props: {
      story: data,
    },
  };
}
