import { useEffect, useState } from "react";
import { get } from "../service/request";
import { generateFakeScore } from "../utils/random-score";
import { IUser } from "./useUsers";

export default function useProspection(userId?: string) {
  const [userData, setUser] = useState({});
  const [score, setScore] = useState(0);

  useEffect(() => {
    doPropspect();
  }, []);

  const getUserData = async () => {
    const result = await get<IUser>(`/users/${userId}`, {});
    setUser(result);
  };

  const getUserJudicialData = async () => {
    return await get<[any]>(`/users/${userId}/todos`, {});
  };

  const doPropspect = () => {
    if (!userId) return;
    return Promise.all([getUserData(), getUserJudicialData()]).then(
      (response) => {
        const score = generateFakeScore(40, 100);
        setScore(score);
        return response;
      }
    );
  };

  return { userData, score };
}
