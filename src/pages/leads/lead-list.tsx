import {
  BreadCrumb,
  Container,
  ContainerRow,
  List,
  ListItem,
  Text,
} from "../../components/Index";
import css from "./leads.module.css";
import { useNavigate } from "react-router-dom";
import { LeadContext } from "../../contexts/lead-context";
import { useContext } from "react";

export default function Leads() {
  const { userModel } = useContext(LeadContext);
  const { users } = userModel;
  const navigate = useNavigate();
  const handleClickUser = (userId: string) => {
    navigate(`/lead/${userId}`);
  };
  return (
    <Container>
      <ContainerRow>
        <div className="box">
          <BreadCrumb
            data={[
              { label: "home", onClick: () => {}, active: false },
              { label: "leads", onClick: () => {}, active: true },
            ]}
          />
        </div>
      </ContainerRow>
      <ContainerRow>
        <div className="box">
          <Text className={css.textLeads}>Lead User List</Text>
        </div>
      </ContainerRow>
      <ContainerRow>
        <div className="box">
          <List>
            {users?.map((user, _index) => {
              return (
                <ListItem
                  className="clickable"
                  key={_index}
                  onClick={() => handleClickUser(user.id)}
                >
                  <Text>{user.name}</Text>
                </ListItem>
              );
            })}
          </List>
        </div>
      </ContainerRow>
    </Container>
  );
}
