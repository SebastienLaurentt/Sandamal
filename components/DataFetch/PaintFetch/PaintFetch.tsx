import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "paint"][0]`;

  const data = await client.fetch(query);

  return data;
}

export default async function PaintFetch() {
  const data = await getData();
  return (
    <div>
        <div className="group relative">
          <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
            <Image
              src={urlFor(data.paintImage).url()}
              alt="Great Photo"
              className="size-full object-cover object-center"
              priority
              width={500}
              height={500}
            />
          </div>
        </div>
    </div>
  );
}
