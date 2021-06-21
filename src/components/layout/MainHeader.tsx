import { NavLink } from "react-router-dom";

import classes from "./MainHeader.module.css";

const MainHeader: React.VFC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes✨</div>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/quotes" exact>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/new-quote">
              Add Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
