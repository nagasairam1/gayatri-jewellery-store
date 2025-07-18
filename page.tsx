import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="text-center py-20">
        <h1 className="text-4xl font-bold text-pink-600">Welcome to Gayatri Jewellery</h1>
        <p className="mt-4 text-gray-700">Discover the elegance in every piece</p>
      </main>
      <Footer />
    </>
  );
}