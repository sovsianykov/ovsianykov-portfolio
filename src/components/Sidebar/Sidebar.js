import React, {useMemo} from "react";
import logo from "assets/logo/logo.png";
import ClearIcon from "@mui/icons-material/Clear";
import { social, links } from "config/data";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "../../context/context";
import cn from "classnames";

const Sidebar = () => {

    const { isSideBarOpen, closeSideBar } = useGlobalContext();

    const classNames = useMemo(()=>cn({
        'sidebar':true,
        'sidebar show-sidebar':isSideBarOpen,
    }),[isSideBarOpen])

  return (
    <aside className={classNames}>
      <div className="sidebar-header">
        <img src={logo} alt="serhii" />
        <button className="close-btn" onClick={closeSideBar}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="social-icons">
        {social.map((link) => {
          const { id, url, text, icon } = link;
          return (
            <li key={id}>
              <a href={url} target="blanc">
                {icon}
                {text}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
