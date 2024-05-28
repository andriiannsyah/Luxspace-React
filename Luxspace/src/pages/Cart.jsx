import Header from "../parts/Header";
import Breadcumb from "../components/Breadcumb";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/footer";
import ShoppingCart from "../parts/Cart/ShoppingCart";
import ShippingDetails from "../parts/Cart/ShippingDetails";

export default function Homepage() {
  return (
    <>
      <Header theme="black" />
      <Breadcumb
        list={[
          { url: "/", name: "Home" },
          { url: "/cart", name: "Shopping Cart" },
        ]}
      />
      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShoppingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>
      <Sitemap />
      <Footer />
    </>
  );
}
