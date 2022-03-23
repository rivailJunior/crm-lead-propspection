import { useEffect, useState } from "react";
import { get } from "../service/request";

export interface ILead {
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

export interface IuseLead {
  users?: Array<ILead>;
  loading: boolean;
  error: boolean;
}

export default function useLeads(): IuseLead {
  const [users, setUsers] = useState<Array<ILead>>([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const result = await get<ILead[]>("/users", {});
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
