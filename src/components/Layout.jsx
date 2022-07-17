import Announcemnet from "./Announcemnet";
import Footer from "./Footer";
import Navbar from "./Navbar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Announcemnet />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
