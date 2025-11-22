import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ContactSection } from "./components/ContactSection";
import { LanguageProvider } from "./contexts/LanguageContext";

// Import page components
import { HomePage } from "./pages/HomePage";
import { SoilTestingPage } from "./pages/SoilTestingPage";
import { RecommendationsPage } from "./pages/RecommendationsPage";
import { ShopPage } from "./pages/ShopPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";

// Component to conditionally show ContactSection
function ConditionalContactSection() {
  const location = useLocation();
  const hideContactPaths = ['/analytics', '/shop'];
  
  if (hideContactPaths.includes(location.pathname)) {
    return null;
  }
  
  return <ContactSection />;
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-[#faf8f4]">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/soil-testing" element={<SoilTestingPage />} />
              <Route path="/recommendations" element={<RecommendationsPage />} />
              <Route path="/shop" element={<ShopPage />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              {/* Catch-all route for unmatched paths */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>
          {/* Contact section appears on all pages except analytics and shop */}
          <ConditionalContactSection />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}