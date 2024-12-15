import { fetchCarById } from "@/utils";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Image from "next/image";
import { Carousel } from "@/components";

const Page = async ({ params }: { params: { id: string } }) => {
  const carDetails = await fetchCarById(Number(params.id));
  const images = ["/hero.png", "/hero.png", "/hero.png", "/hero.png"];
  return (
    <Container maxWidth="lg" className="pt-[52px]">
      <Grid container spacing={1} className=" card__main">
        <Grid xs={8}>
          <section>
            <div>
              <Carousel images={images} />
            </div>
          </section>
        </Grid>
        <Grid xs={4}>
          <section></section>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Page;
