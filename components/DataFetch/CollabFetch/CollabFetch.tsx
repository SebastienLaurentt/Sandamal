import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "collab"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function CollabFetch() {
  const data = await getData();
  return (
    <div className="flex flex-col gap-y-4 md:grid md:grid-cols-2 md:gap-2 md:px-4 lg:grid-cols-3 lg:gap-4 lg:px-6  xl:px-8">
      {data.map((collab: any, index: number) => (
        <div key={index} className=" ">
          <div className="rounded-md   ">
            <Image
              src={urlFor(collab.collabMainImage).url()}
              alt="Great Photo"
              className="size-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
