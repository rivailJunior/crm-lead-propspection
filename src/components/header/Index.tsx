import { AddiLogo } from "../../images/Index";
import "./header.css";

export default function Header() {
  return (
    <header className="header">
      <div>
        <a href="#">
          <img src={AddiLogo} alt="Addi" />
        </a>{" "}
      </div>
      <div>
        <a href="#">Rivail Santos</a>{" "}
      </div>
    </header>
  );
}
