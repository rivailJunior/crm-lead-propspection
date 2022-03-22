import "./list.css";

type IList = {
  children?: JSX.Element | Array<JSX.Element>;
};

export default function List({ children }: IList) {
  return (
    // eslint-disable-next-line jsx-a11y/no-redundant-roles
    <div role="list" className="list">
      {children}
    </div>
  );
}

type IItem = {
  children?: string | JSX.Element;
  onClick?: () => void;
  className?: string;
};

export const ListItem = ({ children, onClick, className }: IItem) => {
  const handleOnClick = onClick || function () {};
  return (
    // eslint-disable-next-line jsx-a11y/aria-role
    <div
      role="listItem"
      className={`listItem ${className}`}
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
};
