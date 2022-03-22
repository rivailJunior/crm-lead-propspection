import { Text } from "../Index";
import "./breadcrumb.css";

type IItem = {
  label: string;
  onClick: (label: string) => void;
  active: boolean;
};
type IBreadCrumb = {
  data: Array<IItem>;
};

export default function BreadCrumb({ data }: IBreadCrumb) {
  return (
    <div>
      {data.map((item, index) => {
        const label = index > 0 ? ` / ${item.label}` : item.label;
        return (
          <Text
            key={index}
            onClick={() => item.onClick(item.label)}
            className={item.active ? "active" : "disabled"}
          >
            {label}
          </Text>
        );
      })}
    </div>
  );
}
