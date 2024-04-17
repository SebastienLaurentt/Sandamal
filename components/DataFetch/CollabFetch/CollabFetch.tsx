import { simplifiedCollab } from "@/app/interface";
import { client } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == "collab"] {
    _id,
    name,
    shortDescription,
    "slug": slug.current,
    "imageUrl": collabMainImage.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function CollabFetch() {
  const data: simplifiedCollab[] = await getData();
  return (
    <div className="flex flex-col gap-y-4 md:grid md:grid-cols-3 md:gap-2 lg:gap-4 xl:grid-cols-5">
      {data.map((collab: any, index: number) => (
        <div key={index}>
          <Link href={`/collab/${collab.slug}`}>
            <div>
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
          <div className="flex flex-col uppercase ">
            <span className="py-2 text-2xl font-semibold leading-6">
              {collab.name}
            </span>
            <span className="leading-4">{collab.shortDescription}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
