"use client";
import { useState, Fragment, useEffect } from "react";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { SeachManufacturerProps } from "@/app/carinfo/types";

const SeachManufacturer = ({
  manufacturer,
  setManufacturer,
}: SeachManufacturerProps) => {
  const [query, setQuery] = useState("");
  const [manufacturers, setManufacturers] = useState<
    Array<{ id: string; title: string }>
  >([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchManufacturers = async () => {
      if (query.length > 0) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `/api/manufacturers/find?where=${encodeURIComponent(query)}`
          );

          const data = await response.json();
          console.log(data);
          setManufacturers(data.docs);
        } catch (error) {
          console.error("Search failed:", error);
        } finally {
          setIsLoading(false);
        }
      }
    };

    const debounceTimer = setTimeout(fetchManufacturers, 300);
    return () => clearTimeout(debounceTimer);
  }, [query]);

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          <ComboboxButton className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="Car Logo"
            />
          </ComboboxButton>
          <div className="relative">
            <ComboboxInput
              className="search-manufacturer__input"
              placeholder="Porsche"
              displayValue={(manufacturer: string) => manufacturer}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <ComboboxOptions className="absolute bg-white shadow-lg rounded-lg z-10 w-full mt-1 max-h-60 overflow-auto">
                {isLoading ? (
                  <div className="px-4 py-2 text-gray-500">Loading...</div>
                ) : manufacturers.length === 0 && query !== "" ? (
                  <div className="px-4 py-2 text-gray-500">Nothing found</div>
                ) : (
                  manufacturers.map(({ id, title }) => (
                    <ComboboxOption
                      key={id}
                      value={title}
                      className={({ active }) =>
                        `px-4 py-2 cursor-default ${
                          active
                            ? "bg-primary-blue text-white"
                            : "text-gray-900"
                        }`
                      }
                    >
                      {title}
                    </ComboboxOption>
                  ))
                )}
              </ComboboxOptions>
            </Transition>
          </div>
        </div>
      </Combobox>
    </div>
  );
};

export default SeachManufacturer;
