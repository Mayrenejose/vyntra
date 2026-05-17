import FloatingWhatsApp from "../components/ui/FloatingWhatsApp";
import "./globals.css";

export const metadata = {
  title: "Vyntra",
  description: "Soluciones digitales",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">      
      <body >
        <FloatingWhatsApp />
        {children}
        </body>
    </html>
  );
}