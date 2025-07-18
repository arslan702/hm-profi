import Header from "../header";
import Footer from "../footer/footer";
import Style from "./layout.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className={Style.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
