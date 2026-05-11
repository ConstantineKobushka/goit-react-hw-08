import AppBar from '../AppBar/AppBar';
import Footer from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <AppBar></AppBar>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
