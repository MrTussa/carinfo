// import { Container, Grid } from "@mui/material";
import { Carousel } from "@/app/carinfo/components";

import configPromise from "@payload-config";
import Image from "next/image";
import { getPayload } from "payload";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const images = ["/hero.png", "/hero.png", "/hero.png", "/hero.png"];

  const payload = getPayload({ config: configPromise });

  const data = (await payload).findByID({
    collection: "cars",
    id: (await params).id,
  });
  console.log(await data);

  return (
    <div className="pt-16 mx-auto">
      <div className="bg-gray-100 p-4 mx-16 rounded-3xl mb-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="/"
            alt="logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-xl font-semibold">porche 911</span>
          <span className="text-lg">1999</span>
        </div>
        <span className="text-2xl font-bold">123.123$</span>
      </div>
      <div className="flex flex-col sm:flex-row mx-16 gap-8">
        <section className="w-2/3 flex-grow rounded-lg border p-4 border-gray-300">
          <Carousel images={images} />
          <h2 className="text-2xl font-semibold mb-4"> porche 911 gt3 rs </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
            earum eos dolores nesciunt ad nostrum voluptates beatae numquam
            architecto distinctio, quia illum quasi at dolore? Odio laborum
            beatae dolor harum.
          </p>
        </section>
        <section className="flex-grow w-1/3 rounded-lg border p-4 border-gray-300">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Specifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium capitalize">Engine</h4>
                <ul className="text-gray-600">
                  <li>
                    <span className="font-medium capitalize">Power:</span>{" "}
                    300H/P
                  </li>
                  <li>
                    <span className="font-medium capitalize">Type:</span> asdasd
                  </li>
                  <li>
                    <span className="font-medium capitalize">Type:</span> torque
                  </li>
                </ul>
                <h4 className="font-medium capitalize">Transmission</h4>
                <p className="text-gray-600">asfasf</p>

                <h4 className="font-medium capitalize">Color Options</h4>
                <ul className="list-disc list-inside text-gray-600">
                  <li>Red</li>
                  <li>Red</li>
                  <li>Red</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
