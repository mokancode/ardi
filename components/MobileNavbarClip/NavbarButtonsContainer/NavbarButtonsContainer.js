import classNames from "classnames";
import { useState } from "react";
import DemoIcon from "../../../icons/MobileNavbarIcons/DemoIcon/DemoIcon";
import DownloadIcon from "../../../icons/MobileNavbarIcons/DownloadIcon/DownloadIcon";
import HomeIcon from "../../../icons/MobileNavbarIcons/HomeIcon/HomeIcon";
import SupportIcon from "../../../icons/MobileNavbarIcons/SupportIcon/SupportIcon";
import styles from "./NavbarButtonsContainer.module.css";
import NavbarMenuButton from "./NavbarMenuButton";
import { v4 as uuidv4 } from "uuid";

export default function NavbarButtonsContainer({ open, setOpen }) {
  const [menu, setMenu] = useState([
    { name: "Home", icon: <HomeIcon />, id: uuidv4(), link: "/" },
    { name: "Download", icon: <DownloadIcon />, id: uuidv4(), link: "/download" },
    { name: "Support", icon: <SupportIcon />, id: uuidv4(), link: "/support" },
    { name: "Demo", icon: <DemoIcon />, id: uuidv4(), link: "/demo" },
  ]);

  return (
    <div
      className={classNames(styles.navigationButtonsContainer, {
        [styles.open]: open,
      })}
    >
      <ul className={styles.menuList}>
        {menu.map((menuItem, index) => {
          return <NavbarMenuButton key={menuItem.id} menuItem={menuItem} index={index} open={open} setOpen={setOpen} link={menuItem.link} />;
        })}
      </ul>
    </div>
  );
}
