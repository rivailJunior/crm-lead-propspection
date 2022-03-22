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

export default function Lead() {
  const params = useParams();
  const { userData, score, loading } = useUserProspection(params.userid);

  console.log("score", score, userData, loading);

  return (
    <Container>
      <ContainerRow>
        <div className="box">
          <BreadCrumb
            data={[
              { label: "home", onClick: () => {}, active: false },
              { label: "leads", onClick: () => {}, active: false },
              { label: "lead", onClick: () => {}, active: true },
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
        <div className="box">
          <div className={css.userContainer}>
            <ContainerRow>
              <div className={`box ${css.end}`}>
                <Card title="" className={`${css.card}`}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    {loading ? (
                      "Wait a minute..."
                    ) : (
                      <>
                        <Text
                          styles={{ fontSize: 20, fontHeight: 700 }}
                        >{`${userData.name}, ${userData.username}`}</Text>
                        <hr />
                        <Text className="small-text">{userData.email}</Text>
                        <Text className="small-text">
                          {userData.company?.name}
                        </Text>
                        <Text className="small-text">{userData.phone}</Text>
                        <Text className="small-text">{`${userData.address?.street}, ${userData.address?.suite}, ${userData.address?.zipcode}`}</Text>
                      </>
                    )}
                  </div>
                </Card>
              </div>
            </ContainerRow>
            <ContainerRow className={css.start}>
              <div className="box">
                <Card
                  title="Checking Judicial Informations"
                  description="Wait a minute..."
                  className={`${css.card} `}
                />
              </div>
            </ContainerRow>
            <ContainerRow className={css.end}>
              <div className={`box ${css.end}`}>
                <Card title="Calculating Lead Score" className={`${css.card} `}>
                  <div>
                    {loading ? (
                      "Calulating the lead score"
                    ) : (
                      <div className={css.score}>{score}</div>
                    )}
                  </div>
                </Card>
              </div>
            </ContainerRow>
          </div>
        </div>
      </ContainerRow>
    </Container>
  );
}
