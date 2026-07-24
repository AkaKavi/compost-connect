import Navbar from "../components/Navbar";
// import Footer from "../components/Footer"; // We'll enable this later

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}