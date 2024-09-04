import React from "react";
import { Container } from "@mui/material";
import axios from "axios";
export const customStyles = `
<style>
  .faq-container h1,h2,h3,h4,h5 {
    color: #ff9900; 
    background:  linear-gradient(180deg, #AF862C 8.59%, #F8F29C 45.7%, #D9BD5C 66.66%, #AD842A 95.83%);
    font-size: 1.6em;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
margin-top:69px;
  }
  .faq-container br {
    margin-top:10px;
    margin-bottom:10px;
  }
  .faq-container p {
    line-height: 28px;
    text-align:justify;
    color:black !important;

  }
  .faq-container p span{
    background-color: transparent !important;
    color:black !important;

  }
  .faq-container ol li span {
    background-color: transparent;
    color:#D0D5DD !important;  
  }
  .faq-container ul li span {
    color:#D0D5DD !important;
    background-color: transparent;
  }
  .faq-container a {
    text-decoration:underline !important;
    text-decoration-color: #d8d38c !important;
    background:  linear-gradient(180deg, #AF862C 8.59%, #F8F29C 45.7%, #D9BD5C 66.66%, #AD842A 95.83%);
    font-size: 16px;
    background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
  }
  line-height:28px;

</style>
`;
export default function BlogPage({ data }: any) {
  console.log('data :>> ', data);
  if(!data){
    return null
  }
  return (
    <div className="relative z-10 xs:pb-10 lg:pb-20">
      <div
        dangerouslySetInnerHTML={{
          __html: `<div class="faq-container">${customStyles}${data.data.html}</div>`,
        }}
        className="relative text-gray-300 container mx-auto mt-10 text-16px max-w-[1216px]"
      />
    </div>
  );
}
export const getServerSideProps = async () => {
  try {
    const res = await fetch(
      "https://api.uat.earthwise.games/configuration/static-page/faq"
    );
    const data = await res.json();

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: {},
      },
    };
  }
};
