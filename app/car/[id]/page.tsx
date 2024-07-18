import { fetchCarById } from "@/utils";

const Page = async ({ params }: { params: { id: string } }) => {
  const carDetails = await fetchCarById(Number(params.id));
  return <div>{carDetails.price}</div>;
};

export default Page;
