import { Manrope } from "next/font/google";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import "@/styles/globals.css";

const manrope = Manrope({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800",],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={manrope.className}>
                <Preloader />
                <CustomCursor />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}