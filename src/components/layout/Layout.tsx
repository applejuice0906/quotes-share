import MainHeader from "./MainHeader";
import classes from "./Layout.module.css";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <MainHeader />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default Layout;
