import { fetchCarById } from "@/utils";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
const Page = async ({ params }: { params: { id: string } }) => {
  const carDetails = await fetchCarById(Number(params.id));
  return (
    <Container maxWidth="lg" className="pt-[52px]">
      <Grid container spacing={1} className=" card__main">
        <Grid xs={7}>
          <section>
            <p>asdasd</p>
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
