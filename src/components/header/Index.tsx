import { Link, Outlet } from "react-router-dom";
import { AddiLogo } from "../../images/Index";
import "./header.css";

export default function Header() {
  return (
    <>
      <header className="header">
        <div>
          <Link to="/">
            <img src={AddiLogo} alt="Addi" />
          </Link>{" "}
        </div>
        <div>
          <a href="#">Rivail Santos</a>
        </div>
      </header>
      <Outlet />
    </>
  );
}
