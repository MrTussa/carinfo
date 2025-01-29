import { getPayload } from "payload";
import configPromise from "@payload-config";

export async function searchManufacturers(query: string) {
  const payload = await getPayload({ config: configPromise });
  
  const result = await payload.find({
    collection: "manufacturers",
    limit: 10,
    where: {
      title: {
        contains: query,
      },
    },
  });
  return result.docs.map((doc) => ({
    id: doc.id,
    title: doc.title,
  }));
}

export const updateSearchParams = (type:string, value:string) => {
  const seachParams = new URLSearchParams(window.location.search);
  
  seachParams.set(type, value);
  const newPathname = `${window.location.pathname}?${seachParams.toString()}`;
  console.log(newPathname);
  
  return newPathname
}