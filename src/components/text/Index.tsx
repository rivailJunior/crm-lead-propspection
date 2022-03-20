type IText = {
  children: JSX.Element | string;
  styles?: object;
};

export default function Text({ children, styles }: IText) {
  return (
    <span className="text" style={styles}>
      {children}
    </span>
  );
}
