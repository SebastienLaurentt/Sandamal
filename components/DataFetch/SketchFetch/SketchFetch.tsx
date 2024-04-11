import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "sketch"]`;

  const data = await client.fetch(query);

  return data;
}

export default async function SketchFetch() {
  const data = await getData();
  return (
    <div className="flex flex-col gap-y-4 md:grid md:grid-cols-3 md:gap-2 lg:gap-4 xl:grid-cols-5">
      {data.map((sketch: any, index: number) => (
        <div key={index}>
          <div>
            <Image
              src={urlFor(sketch.sketchImage).url()}
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
