import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import "@/styles/globals.css";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <Preloader />
                <CustomCursor />
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}