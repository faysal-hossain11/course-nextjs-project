import { Inter } from "next/font/google";
// import "./globals.css";
import "../../public/assets/css/style.css";
import "../../public/assets/css/bootstrap.min.css";
import "../../public/assets/css/footer.css";
import "../../public/assets/css/header.css";
import "../../public/assets/css/responsive.css";
import "../../public/assets/css/remixicon.css";
import "../../public/assets/css/magnific-popup.min.css";
import "../../public/assets/css/owl.carousel.min.css";
import ScrollToTopButton from "@/components/ScrollToTopButton";

// import js file

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Insocour | Home Page One",
    description: "Insocour | Home Page One Education Nextjs Template",
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body className={inter.className} > {children}
                <ScrollToTopButton />
            </body>
        </html>
    )
}