import "./globals.css"; // Importing global CSS styles for consistent styling across the application
import { Montserrat } from 'next/font/google'; // Importing Montserrat font from Google Fonts for typography
import { SpeedInsights } from '@vercel/speed-insights/next'; // Importing Vercel's Speed Insights for performance monitoring

// Configuring the Montserrat font with specific weights and subsets for optimal performance
const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // Specifying the font weights to be included
  subsets: ['latin'], // Specifying the font subsets to be included
});

// Metadata for the application, enhancing SEO and providing information about the site
export const metadata = {
  title: "Netflix Clone - Streaming Platform", // Title displayed in the browser tab
  description: "A Netflix clone application featuring backend development with MongoDB for data storage. Built using Next.js and includes features like user authentication, content selection, and smooth UI/UX transitions.", // Brief description for search engines and previews
  keywords: "Netflix clone, streaming platform, Next.js, MongoDB, backend development, web app, user authentication, video streaming, database integration", // Keywords for search engine optimization
  author: "Soumajit Mandal", // Author of the application
};

// Root layout component that wraps the entire application
export default function RootLayout({ children }) {
  return (
    <html lang="en"> {/* Setting the language attribute for accessibility */}
      <body className={`antialiased ${montserrat.className}`}> {/* Applying antialiased text rendering and Montserrat font class */}
        {children} {/* Rendering child components */}
        <SpeedInsights /> {/* Integrating Speed Insights for performance analytics */}
      </body>
    </html>
  );
}
