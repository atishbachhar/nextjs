import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="container mt-4">{children}</main>
      <Footer />
    </div>
  );
}
