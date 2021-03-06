import Layout from "components/Layout";
import { getAllPostMetadata } from "lib/api";
import { Metadata, PageIndexProps } from "lib/models";
import Link from "next/link";
import React from "react";

const TextsIndex = (props: PageIndexProps) => (
  <Layout title='texts'>
    {props.postMetadata.map(metadataToListItem)}
  </Layout>
)

const metadataToListItem = (metadata: Metadata) => (
  <div key={metadata.slug}>
    <Link href={{ pathname: `/texts/${metadata.slug}` }}>
      <i>{metadata.title}</i>
    </Link>
    , {metadata.type}
    {metadata.externalSite && (
      <>, <a href={metadata.externalSite.url}>{metadata.externalSite.name}</a></>
    )}
  </div>
)

export default TextsIndex;

export async function getStaticProps() {
  const postMetadata = await getAllPostMetadata('text');
  return {
    props: {
      postMetadata
    }
  }
}
