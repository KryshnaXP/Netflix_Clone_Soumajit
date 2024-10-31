import "./globals.css";
import { Montserrat } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specify the font weights you want to include
  subsets: ['latin'], // Specify the subsets you want to include
});

export const metadata = {
  title: "Netflix Clone - Streaming Platform",
  description: "A Netflix clone application featuring backend development with MongoDB for data storage. Built using Next.js and includes features like user authentication, content selection, and smooth UI/UX transitions.",
  keywords: "Netflix clone, streaming platform, Next.js, MongoDB, backend development, web app, user authentication, video streaming, database integration",
  author: "Soumajit Mandal",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased ${montserrat.className}`}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
