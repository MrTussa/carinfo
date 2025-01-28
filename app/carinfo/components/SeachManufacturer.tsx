"use client";
import { useState, Fragment } from "react";
import { manufacturers } from "../constants";

import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";

import configPromise from "@payload-config";
import { getPayload } from "payload";

import { SeachManufacturerProps } from "@/app/carinfo/types";
// TODO: Fix use client
const SeachManufacturer = async ({
  manufacturer,
  setManufacturer,
}: SeachManufacturerProps) => {
  const [query, setQuery] = useState("");

  const payload = getPayload({ config: configPromise });
  const res = (await payload).find({
    collection: "manufacturers",
    limit: 10,
    select: {
      title: true,
    },
    where: {
      title: {
        contains: query,
      },
    },
  });

  const manufacturers = (await res).docs;

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
              leave="transion ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <ComboboxOptions className="absolute bg-white shadow-lg rounded-lg z-10">
                {!manufacturers
                  ? null
                  : manufacturers.map(({ id, title }) => (
                      <ComboboxOption
                        key={id}
                        value={title}
                        className={({ focus }) =>
                          `relative search-manufacturer__option z-10 ${
                            focus
                              ? "bg-primary-blue text-white"
                              : "text-gray-900"
                          }`
                        }
                      >
                        {title}
                      </ComboboxOption>
                    ))}
              </ComboboxOptions>
            </Transition>
          </div>
        </div>
      </Combobox>
    </div>
  );
};

export default SeachManufacturer;
