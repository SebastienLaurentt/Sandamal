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
    "imageUrlMobile": mainImageMobile.asset->url,
    "imageUrlTab": mainImageTab.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function CollabFetch() {
  const data: simplifiedCollab[] = await getData();
  return (
    <div className="flex flex-col ">
      {data.map((collab: any, index: number) => (
        <div key={index}>
          <Link href={`/collab/${collab.slug}`}>
            <div className="relative -z-10 ">
              <Image
                src={collab.imageUrlMobile}
                alt="Great Photo"
                className=" size-full object-cover object-center md:hidden"
                priority
                width={500}
                height={500}
              />
              <Image
                src={collab.imageUrlTab}
                alt="Great Photo"
                className="hidden size-full object-cover object-center md:block"
                priority
                width={500}
                height={500}
              />
              <div className="absolute bottom-8 left-8 flex size-full flex-col items-center justify-center gap-y-2 uppercase text-white md:left-0 md:top-0 ">
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
