import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "paint"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function PaintFetch() {
  const data = await getData();
  return (
    <div className="flex flex-col gap-y-4 md:grid md:grid-cols-3 md:gap-2 lg:grid-cols-3 lg:gap-4 xl:grid-cols-5">
      {data.map((paint: any, index: number) => (
        <div key={index} className=" ">
          <div className="rounded-md   ">
            <Image
              src={urlFor(paint.paintImage).url()}
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
