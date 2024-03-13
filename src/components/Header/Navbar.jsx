import "./style.css";
import { NavLink } from "react-router-dom";
import { Menubar } from "primereact/menubar";
import { items, end } from "./NavbarItems";

function Navbar() {
  return (
    <div className="p-3">
      {/* <Menubar model={items}  end={end} /> */}
      <div className="flex flex-column">
        <div className=" py-3 px-6 flex align-items-center justify-content-between relative lg:static">
          <a
            className="cursor-pointer block lg:hidden text-700 p-ripple"
            style={{
              selector: "@next",
              enterClass: "hidden",
              leaveToClass: "hidden",
              hideOnOutsideClick: true,
            }}
          >
            <i className="pi pi-bars text-4xl"></i>
          </a>
          <div className="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full  left-0 top-100 z-1 shadow-2 lg:shadow-none">
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none">
            <li className="border-top-1 border-gray-800 lg:border-top-none">
                <NavLink
                  to="/"
                  className="block text-white font-medium px-6 py-3 lg:px-3 lg:py-2 hover:text-900 hover:surface-100 border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                >
                  <span className="block text-2xl font-bold mb-1 drop-in">
                    <span className="text-primary">Khubaib</span> Ul-Haque
                  </span>
                </NavLink>
              </li>
            </ul>{" "}
            <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
              <li>
                <NavLink
                  to="/"
                  className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                >
                  <i className="pi pi-home mr-2"></i>
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="lg:relative">
                <NavLink
                  to="/ProjectGallery"
                  className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                  style={{
                    selector: "@next",
                    enterClass: "hidden",
                    enterActiveClass: "scalein",
                    leaveToClass: "hidden",
                    leaveActiveClass: "fadeout",
                    hideOnOutsideClick: true,
                  }}
                >
                  <i className="pi pi-image mr-2"></i>
                  <span>Project Gallery</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Contact"
                  className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                  style={{
                    selector: "@next",
                    enterClass: "hidden",
                    enterActiveClass: "scalein",
                    leaveToClass: "hidden",
                    leaveActiveClass: "fadeout",
                    hideOnOutsideClick: true,
                  }}
                >
                  <i className="pi pi-envelope mr-2"></i>
                  <span>Contact</span>
                </NavLink>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
