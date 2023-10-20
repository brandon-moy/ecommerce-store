import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import getBillboard from "@/actions/get-billboards";

const Home = async () => {
  const billboard = await getBillboard("4cbfda3b-8487-4e13-b41b-096a7826dfb9");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default Home;
