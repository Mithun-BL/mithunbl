import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import CustomCursor from "@/components/CustomCursor";
import Preloader from "@/components/Preloader";
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