import { useParams } from "react-router-dom";
import {
  BreadCrumb,
  Card,
  Container,
  ContainerRow,
  Text,
} from "../../components/Index";
import useUserProspection from "../../hooks/useProspection";
import css from "./user.module.css";
import { useNavigate } from "react-router-dom";

export default function Lead() {
  const navigate = useNavigate();
  const params = useParams();
  const { userData, score, loading } = useUserProspection(params.userid);

  const userInformationContent = () => {
    return (
      <>
        <Text className="large-text">{`${userData.name}, ${userData.username}`}</Text>
        <hr />
        <Text className="small-text">{userData.email}</Text>
        <Text className="small-text">{userData.company?.name}</Text>
        <Text className="small-text">{userData.phone}</Text>
        <Text className="small-text">{`${userData.address?.street}, ${userData.address?.suite}, ${userData.address?.zipcode}`}</Text>
      </>
    );
  };

  const handleOnClickBreadCrumb = (label: string) => {
    navigate(`/${label}`);
  };

  return (
    <Container>
      <ContainerRow>
        <div className="box">
          <BreadCrumb
            data={[
              {
                label: "home",
                onClick: handleOnClickBreadCrumb,
                active: false,
              },
              {
                label: "leads",
                onClick: handleOnClickBreadCrumb,
                active: false,
              },
              { label: "lead", onClick: handleOnClickBreadCrumb, active: true },
            ]}
          />
        </div>
      </ContainerRow>
      <ContainerRow>
        <div className="box">
          <Text className={css.textLeads}>Leads</Text>
        </div>
      </ContainerRow>
      <ContainerRow>
        <div className={css.pageContainer}>
          <Card title="">
            <div className={css.cardBody}>
              {loading ? (
                <>
                  <Text>Checking user information...</Text>
                </>
              ) : (
                userInformationContent()
              )}
            </div>
          </Card>

          <Card title="" className={`${css.card} mt-4`}>
            <Text>
              {loading ? "Cheking judicial information..." : "No user pendency"}
            </Text>
          </Card>

          <Card title="" className={`${css.card} mt-4`}>
            {loading && !score ? (
              <Text>Calulating Score...</Text>
            ) : (
              <>
                <Text className="large-text">Score</Text>
                <hr />
                <div className={css.score}>
                  <Text styles={{ fontSize: 70 }}>{`${score}`}</Text>
                </div>
              </>
            )}
          </Card>
        </div>
      </ContainerRow>
    </Container>
  );
}
