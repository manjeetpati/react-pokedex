import Footer from "../footer/Footer";
import Header from "../header/Header";
import './Layout.scss';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="layout">
            <Header />
            {children}
            <Footer />
        </div>
    );
}