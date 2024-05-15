import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Institut Secrets de Beauté / Réflexologie / Onglerie LANDEVANT (56)",
  description: "Prestations : épilations, soins du visage, réflexologie plantaire et crânienne, pose de gel, manucure. Institut climatisé. Adresse : 10 rue du Distro 56690 LANDEVANT. Tel : 06.12.35.08.77. Rendez-vous par SMS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head >
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bad+Script&family=Calligraffitti&family=Indie+Flower&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100&family=Manrope&family=Montserrat:wght@100&family=Pinyon+Script&display=swap" rel="stylesheet"></link>
      </head>
      <body className="body">
        {children}
      </body>
    </html>
  );
}
