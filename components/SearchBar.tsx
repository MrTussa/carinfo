"use client";
import React, { useState } from "react";
import { SeachManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SeachButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-2 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="magnifying glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Заполните поля поиска");
    }

    updateSeachParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSeachParams = (model: string, manufacturer: string) => {
    const seachParams = new URLSearchParams(window.location.search);
    if (model) {
      seachParams.set("model", model);
    } else {
      seachParams.delete("model");
    }
    if (manufacturer) {
      seachParams.set("manufacturer", manufacturer);
    } else {
      seachParams.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${seachParams.toString()}`;

    router.push(newPathname, { scroll: false });
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SeachManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="Модель машины"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Cobalt"
          className="searchbar__input"
        />
        <SeachButton otherClasses="sm:hidden" />
      </div>
      <SeachButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
