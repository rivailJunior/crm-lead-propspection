import { useCallback, useEffect, useState } from "react";
import { get } from "../service/request";
import { generateFakeScore } from "../utils/random-score";
import { IUser } from "./useUsers";

export interface IuseUserProspectation {
  userData: IUser;
  score: number;
  doUserCheck: (userId?: string) => void;
  loading: boolean;
  error: boolean;
}

export default function useUserProspection(
  userId?: string
): IuseUserProspectation {
  const [userData, setUser] = useState<IUser>({} as IUser);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getUserData = useCallback(async () => {
    if (!userId) return;
    const result = await get<IUser>(`/users/${userId}`, {});
    setUser(result);
  }, [userId]);

  const getUserJudicialData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 3000, false);
    });
  };

  const doUserCheck = useCallback(() => {
    setLoading(true);
    try {
      setError(false);
      Promise.all([getUserJudicialData(), getUserData()]).then(() => {
        const score = generateFakeScore(40, 100);
        setScore(score);
        setLoading(false);
      });
    } catch (e) {
      setLoading(false);
      setError(true);
    }
  }, [getUserData]);

  useEffect(() => {
    doUserCheck();
  }, [doUserCheck]);
  console.log("loading", loading);
  return { userData, score, doUserCheck, loading, error };
}
