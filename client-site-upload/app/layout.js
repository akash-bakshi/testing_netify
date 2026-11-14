import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Green Leaf Studio",
  description: "Garden design and landscaping for homes and small businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="container main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
