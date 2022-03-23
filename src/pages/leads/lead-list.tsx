import {
  BreadCrumb,
  Container,
  ContainerRow,
  List,
  ListItem,
  Text,
} from "../../components/Index";
import { useNavigate } from "react-router-dom";
import { LeadContext } from "../../contexts/lead-context";
import { useContext } from "react";
import { ILead } from "../../hooks/useLead";

export default function Leads() {
  const { userModel } = useContext(LeadContext);
  const { users } = userModel;

  const navigate = useNavigate();

  const handleClickUser = (lead: ILead) => {
    if (lead.prospected) return;
    navigate(`/lead/${lead.id}`);
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
          <Text className="large-text">Lead User List</Text>
        </div>
      </ContainerRow>
      <ContainerRow>
        <div className="box">
          <List>
            {users?.map((lead, _index) => {
              return (
                <ListItem
                  className={`${lead.prospected ? "success" : "clickable"}`}
                  key={_index}
                  onClick={() => handleClickUser(lead)}
                >
                  <Text>{lead.name}</Text>
                </ListItem>
              );
            })}
          </List>
        </div>
      </ContainerRow>
    </Container>
  );
}
