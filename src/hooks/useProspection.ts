import { useCallback, useEffect, useState, useContext } from "react";
import { LeadContext } from "../contexts/lead-context";
import { get } from "../service/request";
import { generateFakeScore } from "../utils/random-score";
import { ILead } from "./useLead";

export interface IuseUserProspectation {
  userData: ILead;
  score: number;
  doUserCheck: (userId?: string) => void;
  loading: boolean;
  error: boolean;
}

export default function useUserProspection(
  userId?: string
): IuseUserProspectation {
  const { userModel } = useContext(LeadContext);
  const { updateLeadList } = userModel;
  const [userData, setUser] = useState<ILead>({} as ILead);
  const [score, setScore] = useState(0);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUserData = useCallback(async () => {
    if (!userId) return;
    const result = await get<ILead>(`/users/${userId}`, {});
    setUser(result);
  }, [userId]);

  const getUserJudicialData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000, false);
    });
  };

  const getScore = () => {
    const scoreValue = generateFakeScore(40, 100);
    setScore(scoreValue);
  };

  const doUserCheck = useCallback(() => {
    setLoading(true);
    try {
      setError(false);
      Promise.all([getUserJudicialData(), getUserData()]).then(async () => {
        setLoading(false);
        getScore();
      });
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }, [getUserData]);

  useEffect(() => {
    doUserCheck();

    return () => {
      setLoading(false);
      setError(false);
    };
  }, [doUserCheck]);

  useEffect(() => {
    if (score >= 60) {
      updateLeadList(userData.id);
    }
  }, [score]);

  return { userData, score, doUserCheck, loading, error };
}
