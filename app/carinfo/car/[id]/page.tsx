// import { Container, Grid } from "@mui/material";
import { Carousel, LogoButton } from "@/app/carinfo/components";

import configPromise from "@payload-config";
import Image from "next/image";
import { getPayload } from "payload";
import { Media } from "@payload-types";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const payload = getPayload({ config: configPromise });

  const data = (await payload).findByID({
    collection: "cars",
    id: (await params).id,
  });

  const {
    title,
    transmission,
    year,
    fuelType,
    manufacturer,
    description,
    gallery,
    colorOptions,
    seatingCapacity,
    bodyType,
    engineSpecifications,
    dimensions,
    mileage,
    safetyFeatures,
    price,
    model,
  } = await data;

  return (
    <div className="pt-16 mx-auto">
      <div className="bg-gray-100 p-4 mx-16 rounded-3xl mb-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Types check */}
          {manufacturer && typeof manufacturer !== "string" && (
            // <Image
            //   src={(manufacturer.logo as Media)?.thumbnailURL ?? ""}
            //   alt={`${manufacturer.title ?? ""} logo`}
            //   width={48}
            //   height={48}
            //   className="rounded-full"
            // />
            <LogoButton
              logo={(manufacturer.logo as Media)?.thumbnailURL ?? ""}
              width={48}
              height={48}
              id={manufacturer.id ?? ""}
            />
          )}
          <span className="text-xl font-semibold">{title}</span>
          <span className="text-lg">{year}</span>
        </div>
        <span className="text-2xl font-bold">{price}$</span>
      </div>
      <div className="flex flex-col sm:flex-row mx-16 gap-8">
        <section className="w-2/3 flex-grow rounded-lg border p-4 border-gray-300">
          <Carousel gallery={gallery} />
          <h2 className="text-2xl font-semibold my-4">{model}</h2>
          <p className="text-gray-600">{description}</p>
        </section>
        <section className="flex-grow w-1/3 rounded-lg border p-4 border-gray-300">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-4">Specifications</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium capitalize">Engine</h4>
                <ul className="text-gray-600">
                  <li>
                    <span className="font-medium capitalize">Power:</span>
                    {engineSpecifications?.horsePower} H/P
                  </li>
                  <li>
                    <span className="font-medium capitalize">Type:</span>{" "}
                    {engineSpecifications?.engineType}
                  </li>
                  <li>
                    <span className="font-medium capitalize">Type:</span>{" "}
                    {engineSpecifications?.torque}
                  </li>
                  <li>
                    <span className="font-medium capitalize">Cylinders:</span>{" "}
                    {engineSpecifications?.cylinders}
                  </li>
                </ul>
                <h4 className="font-medium capitalize">Fuel Type</h4>
                <p className="text-gray-600">{fuelType}</p>
                <h4 className="font-medium capitalize">Transmission</h4>
                <p className="text-gray-600">{transmission}</p>

                <h4 className="font-medium capitalize">Color Options</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {colorOptions?.map(({ color, id }) => (
                    <li key={id}>{color}</li>
                  ))}
                </ul>

                <h4 className="font-medium capitalize">Seating Capacity</h4>
                <span className="text-gray-600">{seatingCapacity}</span>

                <h4 className="font-medium capitalize">Body Type</h4>
                <p>{bodyType}</p>

                <h4 className="font-medium capitalize">Dimensions</h4>
                <ul className="text-gray-600">
                  <li>
                    <span className="font-medium capitalize">Length:</span>
                    {dimensions?.length} mm
                  </li>
                  <li>
                    <span className="font-medium capitalize">Width:</span>{" "}
                    {dimensions?.width} mm
                  </li>
                  <li>
                    <span className="font-medium capitalize">Height:</span>{" "}
                    {dimensions?.height} mm
                  </li>
                  <li>
                    <span className="font-medium capitalize">Wheel Base:</span>{" "}
                    {dimensions?.wheelbase} mm
                  </li>
                </ul>
                <h4 className="font-medium capitalize">Mileage</h4>
                <ul className="text-gray-600">
                  <li>
                    <span className="font-medium capitalize">City:</span>
                    {mileage?.city}
                  </li>
                  <li>
                    <span className="font-medium capitalize">Highway:</span>{" "}
                    {mileage?.highway}
                  </li>
                </ul>

                <h4 className="font-medium capitalize">Safety Features</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {safetyFeatures?.map(({ feature, id }) => (
                    <li key={id}>{feature}</li>
                  ))}
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
