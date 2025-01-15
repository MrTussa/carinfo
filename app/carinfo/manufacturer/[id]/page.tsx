import Image from "next/image";
import { getPayload } from "payload";
import configPromise from "@payload-config";
import { Media } from "@payload-types";
import { CarCard } from "../../components";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const payload = getPayload({ config: configPromise });

  const data = await (
    await payload
  ).findByID({
    collection: "manufacturers",
    id: (await params).id,
    depth: 2,
  });

  const { title, description, logo, imageCover, year, cars, locations } = data;

  const processedCars = await Promise.all(
    (cars?.docs &&
      cars?.docs.map(async (car) => {
        if (typeof car === "object" && "featuredImage" in car) {
          if (typeof car.featuredImage === "string") {
            // Если изображение выводиться через ID
            const featuredImage = await (
              await payload
            ).findByID({
              collection: "media",
              id: car.featuredImage,
            });
            return { ...car, featuredImage };
          }
          return car;
        } else {
          return car;
        }
      })) ||
      []
  );

  console.log((imageCover as Media).sizes?.banner?.url);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <div
        style={{
          backgroundImage: `
            url(${(imageCover as Media).sizes?.banner?.url})
          `,
          backgroundSize: "cover",
        }}
        className="py-8 border-b-4 border-cyan-500"
      >
        <section className="bg-gradient-to-r from-gray-50/100 to-gray-100/35 container mx-auto shadow-lg rounded-lg py-8 mb-8">
          <div className="mx-4 px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              <Image
                src={(logo as Media).url ?? ""}
                alt="AutoCorp Logo"
                width={120}
                height={120}
                className="rounded-full"
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-2">
                  {title}
                </h1>
                <p className="text-xl text-gray-600 mb-4">Established {year}</p>
                <p className="text-lg text-gray-700 max-w-2xl">{description}</p>
              </div>
            </div>
          </div>
        </section>
        {locations && (
          <div className=" container mx-auto grid grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div
                className=" bg-gradient-to-r from-gray-50/100 to-gray-100/75 shadow-lg rounded-lg flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6"
                key={index}
              >
                <Image
                  src={location.locationImage!.sizes.squere.url}
                  alt="location"
                  width={100}
                  height={100}
                  className="rounded-s-lg"
                />
                <h4 className="py-4 text-xl">{location.location}</h4>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="container mx-auto px-4 pb-12">
        <section className="mt-6 mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Latest {title} models
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processedCars.map((car, index) => (
              <CarCard car={car} key={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
