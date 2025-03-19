import CTA from "@/components/layout/cta/cta";
import Footer from "@/components/layout/footer/footer";
import Header from "@/components/layout/header/header";

export default function MarketplaceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <Header />
            {children}
            <CTA />
            <Footer />
        </div>
    );
}
