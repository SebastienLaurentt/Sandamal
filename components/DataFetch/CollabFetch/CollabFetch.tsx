import { simplifiedCollab } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "collab"] {
    _id,
    name,
    "slug": slug.current,
    "imageUrl": collabMainImage.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function CollabFetch() {
  const data: simplifiedCollab[] = await getData();
  return (
    <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-5">
      {data.map((collab: any, index: number) => (
        <div key={index} className=" ">
          <Link href={`/collab/${collab.slug}`}>
            <div className="rounded-md">
              <Image
                src={collab.imageUrl}
                alt="Great Photo"
                className="size-full object-cover object-center"
                priority
                width={500}
                height={500}
              />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
