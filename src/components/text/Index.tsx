import "./text.css";
type IText = {
  children: JSX.Element | string;
  styles?: object;
  className?: string;
  onClick?: () => void;
};

export default function Text({ children, styles, className, onClick }: IText) {
  return (
    <span
      className={`text ${className} ${onClick && "clickable"}`}
      style={styles}
      onClick={onClick}
    >
      {children}
    </span>
  );
}
