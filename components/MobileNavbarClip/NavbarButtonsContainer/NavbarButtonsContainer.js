import classNames from "classnames";
import { useState } from "react";
import DemoIcon from "../../../icons/MobileNavbarIcons/DemoIcon/DemoIcon";
import DownloadIcon from "../../../icons/MobileNavbarIcons/DownloadIcon/DownloadIcon";
import HomeIcon from "../../../icons/MobileNavbarIcons/HomeIcon/HomeIcon";
import SupportIcon from "../../../icons/MobileNavbarIcons/SupportIcon/SupportIcon";
import styles from "./NavbarButtonsContainer.module.css";
import NavbarMenuButton from "./NavbarMenuButton";

export default function NavbarButtonsContainer({ open, setOpen }) {
  const [menu, setMenu] = useState([
    { name: "Home", icon: <HomeIcon /> },
    { name: "Download", icon: <DownloadIcon /> },
    { name: "Support", icon: <SupportIcon /> },
    { name: "Demo", icon: <DemoIcon /> },
  ]);

  return (
    <div
      className={classNames(styles.navigationButtonsContainer, {
        [styles.open]: open,
      })}
    >
      <ul className={styles.menuList}>
        {menu.map((menuItem, index) => {
          return <NavbarMenuButton menuItem={menuItem} index={index} open={open} setOpen={setOpen} />;
        })}
      </ul>
    </div>
  );
}
