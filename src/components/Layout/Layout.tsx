import { ReactElement } from "react";
import Header from "../Header/Header";

import styles from "./layout.module.scss";

const Layout = ({ children }: { children: ReactElement }) => {
  return (
    <>
      <Header />
      <div className={styles.pageContent}>{children}</div>
    </>
  );
};

export default Layout;
