import "./style.css";

import { Menubar } from 'primereact/menubar';
import { items, end } from './NavbarItems';

function Navbar() {


  return (
    <div className="p-3">
         <Menubar model={items}  end={end} />
    </div>
  );
}

export default Navbar;
