import "./style.css";

import { Menubar } from 'primereact/menubar';
import { items, end } from './NavbarItems';

function Navbar() {


  return (
    <div className="p-3">
         <Menubar model={items}  end={end} />
      {/* <div className="flex flex-column">
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
            <div className="text-white font-medium">
              <span className="block text-2xl font-bold mb-1 drop-in"><span className="text-primary">Khubaib</span> Ul-Haque</span>
            </div>
          </li>
            </ul> <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row">
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
                  to="/Resume"
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
                  <span>Resume</span>
                </NavLink>
                <ul className="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer">
                  <li>
                    <a className="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple">
                      <i className="pi pi-user-plus mr-2"></i>
                      <span className="font-medium">Add New</span>
                    </a>
                  </li>
                  <li className="relative">
                    <a
                      className="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                      style={{
                        selector: "@next",
                        enterClass: "hidden",
                        enterActiveClass: "scalein",
                        leaveToClass: "hidden",
                        leaveActiveClass: "fadeout",
                        hideOnOutsideClick: true,
                      }}
                    >
                      <i className="pi pi-search mr-2"></i>
                      <span className="font-medium">Search</span>
                      <i className="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                    </a>
                    <ul className="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0">
                      <li>
                        <a className="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple">
                          <i className="pi pi-shopping-cart mr-2"></i>
                          <span className="font-medium">Purchases</span>
                        </a>
                      </li>
                      <li className="relative">
                        <a className="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple">
                          <i className="pi pi-comments mr-2"></i>
                          <span className="font-medium">Messages</span>
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <a className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                  <i className="pi pi-calendar mr-2"></i>
                  <span>Calendar</span>
                </a>
              </li>
              <li>
                <a className="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple">
                  <i className="pi pi-chart-line mr-2"></i>
                  <span>Stats</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Navbar;
