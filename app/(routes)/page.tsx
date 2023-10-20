import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import ProductList from "@/components/product-list";

import getProducts from "@/actions/get-products";
import getBillboard from "@/actions/get-billboards";

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("4cbfda3b-8487-4e13-b41b-096a7826dfb9");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
      <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
        <ProductList title="Featured Products" items={products} />
      </div>
    </Container>
  );
};

export default Home;
