import {
  CarCard,
  CustomFilter,
  Hero,
  SearchBar,
  ShowMore,
} from "@/app/carinfo/components";
import { fuels, yearsOfProduction } from "@/app/carinfo/constants";
import { SearchParamsProps } from "@/app/carinfo/types";

import configPromise from "@payload-config";
import { getPayload } from "payload";

export default async function Home({
  searchParams,
}: {
  searchParams: SearchParamsProps;
}) {
  const payload = getPayload({ config: configPromise });
  const res = (await payload).find({
    collection: "cars",
    limit: 10,
    select: {
      model: true,
      manufacturer: true,
      id: true,
      fuelType: true,
      transmission: true,
      title: true,
      year: true,
      featuredImage: true,
      engineSpecifications: true,
    },
  });
  const allCars = (await res).docs;

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  console.log(Array.isArray(allCars));

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section id="cars_container">
            <div className="home__cars-wrapper">
              {allCars?.map((car, index) => <CarCard car={car} key={index} />)}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(await res).hasNextPage}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-red-500 text-xl font-bold">
              Something went wrong...
            </h2>
          </div>
        )}
        <div></div>
      </div>
    </main>
  );
}
