import { useEffect, useState } from "react";
import { get } from "../service/request";

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

type IUsers = {
  users?: Array<IUser>;
  loading: boolean;
  error: boolean;
};

export default function useUsers(): IUsers {
  const [users, setUsers] = useState<Array<IUser> | any>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const result = await get<IUsers>("/users", {});
      setUsers(result);
    } catch (error) {
      setError(true);
    }
  };
  return {
    users,
    loading: !!users.length,
    error,
  };
}