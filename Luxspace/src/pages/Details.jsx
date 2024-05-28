import Header from "../parts/Header";
// import BrowseRoom from "../parts/Homepage/BrowseRoom";
// import JustArrived from "../parts/Homepage/JustArrived";
import Breadcumb from "../components/Breadcumb";
import ProductDetails from "../parts/Details/ProductDetails";
import Clients from "../parts/Clients";
import Sitemap from "../parts/Sitemap";
import Footer from "../parts/footer";
import Suggestion from "../parts/Details/Suggestion";

export default function Homepage() {
  return (
    <>
      <Header theme="black" />
      <Breadcumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/91231", name: "Office Room" },
          { url: "/categories/91231/products/788", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Clients />
      <Sitemap />
      <Footer />
    </>
  );
}
