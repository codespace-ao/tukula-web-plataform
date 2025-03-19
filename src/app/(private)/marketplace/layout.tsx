import Footer from '@/components/layout/footer/footer';
import Header from '@/components/layout/header/header';

export default function MarketplaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  );
}