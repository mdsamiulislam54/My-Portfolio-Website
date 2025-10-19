
import Scroll from "@/components/Scroll/Scroll";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import ToastProvider from "@/components/Provider/ToastProvider";
import Footer from "@/components/Footer/Footer";



export const metadata = {
  title: "Md. Shamiul Islam | Frontend Developer & UI Designer",
  description:
    "I'm Md. Shamiul Islam, a passionate Frontend Developer skilled in HTML, CSS, JavaScript, React, and Tailwind CSS. I create modern, responsive, and user-friendly web applications with clean code and creative design.",
  keywords: [
    "Md. Shamiul Islam",
    "Frontend Developer",
    "Web Developer",
    "React Developer",
    "JavaScript Developer",
    "Tailwind CSS",
    "UI Designer",
    "Portfolio Website",
  ],
  authors: [{ name: "Md. Shamiul Islam", url: "https://github.com/mdsamiulislam54" }],
  creator: "Md. Shamiul Islam",
  publisher: "Md. Shamiul Islam",
  metadataBase: new URL("https://github.com/mdsamiulislam54"),
  openGraph: {
    title: "Md. Shamiul Islam | Frontend Developer",
    description:
      "Frontend Developer specializing in building responsive, user-friendly, and interactive web interfaces using React.js and Tailwind CSS.",
    url: "https://mdsamiulislam54.github.io",
    siteName: "Md. Shamiul Islam Portfolio",
    images: [
      {
        url: "https://i.postimg.cc/pXnFRzsS/md-shamiul-islam.png", 
        width: 1200,
        height: 630,
        alt: "Md. Shamiul Islam Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="bg-gradient-to-br from-gray-800 to-black text-white  scroll-smooth overflow-x-hidden-hidden "
      >

        <Navbar />
        <main className="min-h-screen">
          {children}
          <Scroll />
          <ToastProvider />
        </main>
        <Footer />

      </body>
    </html>
  );
}
