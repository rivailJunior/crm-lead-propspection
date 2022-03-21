import { Container } from "../../components/Index";
import css from "./error.module.css";
import { Link } from "react-router-dom";
export default function Error() {
  return (
    <Container>
      <div className="box">
        <div className={css.erroContainer}>
          <h1 className={css.mainText}>404</h1>
          <h3 className={css.mainText} style={{ fontSize: 50 }}>
            Sorry. Page not found.
          </h3>
          <Link to="/" className={css.link}>
            Back Home
          </Link>
        </div>
      </div>
    </Container>
  );
}
