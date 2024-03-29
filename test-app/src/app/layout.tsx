import type { Metadata } from "next";
import NavBar from "./navBar";
import Footer from "./footer";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Institut secret de beaute",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head >
      </head>
      <body className="body">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
