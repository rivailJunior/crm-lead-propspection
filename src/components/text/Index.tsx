import "./text.css";
type IText = {
  children: JSX.Element | string;
  styles?: object;
  className?: string;
  onClick?: () => void;
};

export default function Text({ children, styles, className }: IText) {
  return (
    <span className={`text ${className}`} style={styles}>
      {children}
    </span>
  );
}
