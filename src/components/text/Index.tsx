type IText = {
  children: JSX.Element | string;
};

export default function Text({ children }: IText) {
  return <span className="text">{children}</span>;
}
