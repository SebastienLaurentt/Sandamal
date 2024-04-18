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
    <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-3">
      {data.map((paint: any, index: number) => (
        <div key={index}>
          <div>
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
