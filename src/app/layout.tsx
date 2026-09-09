// src/app/layout.tsx
import Header from "@/views/core/header";
import Sidebar from "@/views/core/sidebar";
import Footer from "@/views/core/footer";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // Hardcoded for now. Toggle this to true to see the UI change!
  const isAuthenticated = false; 

  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-50 m-0">
        <Sidebar isAuthenticated={isAuthenticated} />
        
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header isAuthenticated={isAuthenticated} />
          
          {/* This <main> tag renders the page content (like the Login form) */}
          <main className="flex-1 overflow-y-auto">
            {children}
          </main>
          
          <Footer isAuthenticated={isAuthenticated} />
        </div>
      </body>
    </html>
  );
}
