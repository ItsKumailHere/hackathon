import { ShopSidebar } from "@/components/sidebar";
import { data } from "@/app/data";
import Card from "@/components/card";
import Link from "next/link";
import { StaticImageData } from "next/image";

export default function Shop() {
  return (
    <div className="flex flex-row gap-4">
      <ShopSidebar />
      <section className="flex flex-col gap-2 w-full">
        <div></div>
        <section className="grid grid-cols-3 gap-2">
          {data.map((item: StaticImageData, index: number) => (
            <div key={index} className="">
              <Link href={`/shop/${index}`}>
                <Card src={item} />
              </Link>
            </div>
          ))}
        </section>
      </section>
    </div>
  );
}
