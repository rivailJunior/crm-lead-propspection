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
  const { userData, score } = useUserProspection(params.userid);

  console.log("score", score, userData);

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
            <ContainerRow className={css.end}>
              <Card
                title="teste"
                body="lorem ipsum dolor"
                className={css.cardEnd}
              />
            </ContainerRow>
            <ContainerRow className={css.start}>
              <Card
                title="teste"
                body="lorem ipsum dolor"
                className={css.cardStart}
              />
            </ContainerRow>
            <ContainerRow className={css.end}>
              <Card
                title="teste"
                body="lorem ipsum dolor"
                className={css.cardEnd}
              />
            </ContainerRow>
          </div>
        </div>
      </ContainerRow>
    </Container>
  );
}
