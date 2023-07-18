import React, { ReactNode, useState } from "react";
import Header from "./header/Header";
import styles from "./mainLayout.module.css";

interface IMainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<IMainLayoutProps> = ({ children }) => {
  let [measurement, setMeasurement] = useState(true);
  return (
    <div className={styles.mainLayout}>
      <Header measurement={measurement} setMeasurement={setMeasurement} />
      <div className={styles.content}> {children}</div>
    </div>
  );
};

export default MainLayout;
