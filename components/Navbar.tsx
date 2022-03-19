import React from "react";
import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Chi Siamo",
    href: "/about",
  },
  {
    text: "Contact",
    href: "/contact",
  },
  {
    text: "Pricing",
    href: "/pricing",
  },
];

export const Navbar = () => {
  return (
    //   siccome la className tiene un guion -, allora la classe si mette in ['']
    <nav className={styles["menu-container"]}>
      {/* il Link é renderizzato come a href, quindi nel css si puo fare riferimento al a href relativo a una classe.  */}
      {/* Non si puo fare riferimento al element a href a solo nel css. Altrimenti devuelve un error */}
      {/* <Link href="/">Home</Link>  */}
      {menuItems.map(({ text, href }) => {
        return <ActiveLink key={text} text={text} href={href} />;
      })}
    </nav>
  );
};
