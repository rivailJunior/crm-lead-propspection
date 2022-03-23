import { useEffect, useState } from "react";
import { get } from "../service/request";

export interface ILead {
  id: string;
  name: string;
  username: string;
  email: string;
  prospected?: boolean;
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
  updateLeadList: (leadId: string) => void;
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

  const updateLeadList = (leadId: string) => {
    const updatedLeads = users.map((lead) => {
      return lead.id === leadId ? { ...lead, prospected: true } : lead;
    });
    setUsers(updatedLeads);
  };

  return {
    users,
    loading: !!users.length,
    error,
    updateLeadList,
  };
}
