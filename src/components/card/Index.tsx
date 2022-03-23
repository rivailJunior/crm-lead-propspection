import "./card.css";

type ICard = {
  title: string | JSX.Element;
  children?: string | JSX.Element;
  styles?: object;
  className?: string;
  description?: string | JSX.Element;
};

function Card({ title, children, styles, className, description }: ICard) {
  return (
    <div className={`card ${className}`} style={styles}>
      <div className="title">{title}</div>
      {description ? <div className="body">{description}</div> : children}
    </div>
  );
}

type ICardBody = {
  children: JSX.Element;
};
Card.Body = ({ children }: ICardBody) => {
  return <div className="body">{children}</div>;
};

export default Card;
