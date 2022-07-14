import Announcemnet from "components/Announcemnet";
import Categories from "components/Categories";
import Footer from "components/Footer";
import Navbar from "components/Navbar";
import Products from "components/Products";
import Slid from "components/Slid";

function App() {
  return (
    <>
      {/* Announcement section */}
      <Announcemnet />

      {/* Header section */}
      <Navbar />

      {/* Slid section */}
      <Slid />

      {/* categories section */}
      <Categories />

      {/* Products */}
      <Products />

      <Footer />
    </>
  );
}

export default App;
