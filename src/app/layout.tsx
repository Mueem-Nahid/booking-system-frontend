import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import Providers from "@/lib/Providers";
import Header from "@/components/ui/Header";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
   title: "Hotel Booking",
   description: "Book your favourite hotel any time.",
};

export default function RootLayout({children,}: { children: React.ReactNode; }) {
   return (
      <html lang="en">
      <body>
      <Providers>
         <Header/>
         {children}
      </Providers>
      </body>
      </html>
   );
}