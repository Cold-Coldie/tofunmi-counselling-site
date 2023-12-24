import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  const links = [
    { text: "Home", link: "/" },
    { text: "Resources", link: "/resources" },
    { text: "Services", link: "/services" },
    { text: "About", link: "/about" },
  ];

  const [screenWidth, setScreenWidth] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    screenWidth === null && setScreenWidth(window.innerWidth);

    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbarWrapper}>
      <div
        className={styles.nameLogo}
        onClick={() => {
          setMenuOpen(false);
        }}
      >
        <Link href={"/"}>
          <span>T</span>
          <Image
            src={"/static/icons/bulb.svg"}
            width={"30"}
            height={"30"}
            className={styles.bulb}
            alt="bulb image to represent O"
          />
          <span>f</span>
          <span>u</span>
          <span>n</span>
          <span>m</span>
          <span>i</span>
        </Link>
      </div>

      {screenWidth > 768 ? (
        <div className={styles.links}>
          {links.map((item, index) => {
            return (
              <Link
                key={index}
                href={item.link}
                className={
                  router.pathname === item.link ? styles.currentPath : ""
                }
              >
                <span key={index} className={styles.individualLinks}>
                  {item.text}
                </span>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className={styles.links}>
          <Image
            src={
              menuOpen ? "/static/icons/cancel.svg" : "/static/icons/menu.svg"
            }
            width={"30"}
            height={"30"}
            className={styles.menu}
            alt="menu icon"
            onClick={() => {
              setMenuOpen((s) => !s);
            }}
          />
        </div>
      )}

      {screenWidth < 768 && menuOpen ? (
        <div
          className={styles.menuDropDownWrapper}
          onClick={() => {
            setMenuOpen((s) => !s);
          }}
        >
          <div className={styles.menuDropDown}>
            {links.map((item, index) => {
              return (
                <div key={index} className={styles.individualDropDownItems}>
                  <Link
                    href={item.link}
                    className={
                      router.pathname === item.link
                        ? styles.individualDropDownCurrentPath
                        : ""
                    }
                  >
                    {item.text}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <></>
      )}
    </nav>
  );
};

export default Navbar;
