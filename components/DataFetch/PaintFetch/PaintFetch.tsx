import { client } from "@/app/lib/sanity";
import Image from "next/image";

async function getData() {
  const query = `*[_type == "paint"][0...4] | order(_createdAt desc) {
        _id,
          price,
        name,
          "slug": slug.current,
          "categoryName": category->name,
          "imageUrl": images[0].asset->url
      }`;

  const data = await client.fetch(query);

  return data;
}

export default async function PaintFetch() {
  const data = await getData();
  return (
    <div>
      {data.map((paint:any) => (
        <div key={paint._id} className="group relative">
          <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
            <Image
              src={paint.imageUrl}
              alt="Product image"
              className="size-full object-cover object-center lg:size-full"
              width={300}
              height={300}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
