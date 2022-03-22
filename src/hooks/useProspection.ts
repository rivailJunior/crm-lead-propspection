import { useCallback, useEffect, useState } from "react";
import { get } from "../service/request";
import { generateFakeScore } from "../utils/random-score";
import { IUser } from "./useUsers";

export interface IuseUserProspectation {
  userData: IUser;
  score: number;
  doUserCheck: (userId?: string) => void;
}

export default function useUserProspection(
  userId?: string
): IuseUserProspectation {
  const [userData, setUser] = useState<IUser>({} as IUser);
  const [score, setScore] = useState(0);

  const getUserData = useCallback(async () => {
    if (!userId) return;
    const result = await get<IUser>(`/users/${userId}`, {});
    setUser(result);
  }, [userId]);

  const getUserJudicialData = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 5000, false);
    });
  };

  const doUserCheck = useCallback(() => {
    Promise.all([getUserJudicialData(), getUserData()]).then(() => {
      const score = generateFakeScore(40, 100);
      setScore(score);
    });
  }, [getUserData]);

  useEffect(() => {
    doUserCheck();
  }, [doUserCheck]);

  return { userData, score, doUserCheck };
}
