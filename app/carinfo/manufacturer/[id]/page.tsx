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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800">
      <div
        style={{
          backgroundImage: `
            url(${(imageCover as Media).sizes?.banner?.url})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="py-8 border-b-4 border-cyan-500"
      >
        {/* MANUFACTURER HEADER */}
        <section className="bg-gradient-to-r from-gray-50/100 to-gray-100/35 container mx-auto shadow-lg sm:rounded-lg rounded-none py-8 mb-8">
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

        {/* LOCATIONS LIST */}

        {locations && (
          <div className=" container mx-auto grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {locations.map((location, index) => (
              <div
                className=" bg-gradient-to-r from-gray-50/100 to-gray-100/75 shadow-lg rounded-lg flex flex-row items-center gap-1 sm:gap-0 space-y-0 md:space-x-6 sm:pr-6"
                key={index}
              >
                <Image
                  src={location.locationImage!.sizes.squere.url}
                  alt="location"
                  width={100}
                  height={100}
                  className="rounded-s-lg"
                />
                <h4 className="xl:py-4 py-2 text-xl">{location.location}</h4>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* MODELS LIST */}
      <div className="container mx-auto px-4 pb-12">
        <section className="mt-6 mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Latest {title} models
          </h3>
          <div className="home__cars-wrapper">
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
