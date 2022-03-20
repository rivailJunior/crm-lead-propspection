import "./card.css";
type ICard = {
  title: string | JSX.Element;
  body: string | JSX.Element;
  styles?: object;
  className?: string;
};

export default function Card({ title, body, styles, className }: ICard) {
  return (
    <div className={`card ${className}`} style={styles}>
      <div className="title">{title}</div>
      <div className="body">{body}</div>
    </div>
  );
}
