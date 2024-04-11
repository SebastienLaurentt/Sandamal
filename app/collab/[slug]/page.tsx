import { simplifiedCollab } from '@/app/interface';
import { client } from '@/app/lib/sanity';
import React from 'react'


async function getData(slug: string) {
  const query = `*[_type == "collab" && slug.current == "${slug}"][0] {
        _id,
          images,
          name,
          "slug": slug.current,
      }`;

  const data = await client.fetch(query);

  return data;
}

export const dynamic = "force-dynamic";

export default async function CollabPage ({
  params,
}: {
  params: { slug: string };
}) {
  const data: simplifiedCollab = await getData(params.slug);
  return (
  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
    {data.name}
  </h2>
  )
}

