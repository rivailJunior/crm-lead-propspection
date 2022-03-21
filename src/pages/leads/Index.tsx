import {
  Container,
  ContainerRow,
  List,
  ListItem,
  Text,
} from "../../components/Index";
import useUsers from "../../hooks/useUsers";
import css from "./leads.module.css";

export default function Leads() {
  const { loading, error, users } = useUsers();
  return (
    <Container>
      <ContainerRow>
        <Text className={css.textLeads}>Leads</Text>
      </ContainerRow>
      <ContainerRow>
        <div className="box">
          <List>
            {users?.map((user, _index) => {
              return (
                <ListItem key={_index}>
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