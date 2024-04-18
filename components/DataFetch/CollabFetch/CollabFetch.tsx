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
    <div className="  flex flex-col md:grid md:grid-cols-2 xl:grid-cols-5">
      {data.map((collab: any, index: number) => (
        <div key={index}>
          <Link href={`/collab/${collab.slug}`}>
            <div className="relative -z-10 ">
              <Image
                src={collab.imageUrl}
                alt="Great Photo"
                className="size-full object-cover object-center"
                priority
                width={500}
                height={500}
              />
              <div className="absolute bottom-8 left-8 flex w-fit flex-col gap-y-2 uppercase text-white ">
                <span className="text-3xl font-semibold leading-8">
                  {collab.name}
                </span>
                <span className="text-lg leading-5">
                  {collab.shortDescription}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
