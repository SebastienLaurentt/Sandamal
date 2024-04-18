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
              <div className="lg:left-[440px] xl:lg:left-[640px] 2xl:lg:left-[900px] absolute bottom-8 left-8 flex h-full w-fit flex-col items-start justify-end gap-y-2 text-white md:left-80 md:top-0  md:flex-row md:items-center md:justify-center md:gap-x-2 ">
                <span className="text-3xl font-semibold uppercase leading-8">
                  {collab.name}
                </span>
                <span className="text-md leading-5 md:max-w-[160px]">
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
