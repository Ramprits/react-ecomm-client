import Announcemnet from "components/Announcemnet";
import Categories from "components/Categories";
import Navbar from "components/Navbar";
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
    </>
  );
}

export default App;
