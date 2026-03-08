import { useEffect, useState } from "react";

export interface FamilyMember {
  id?: number;
  name: string;
  relation: string; // "Father" | "Mother" | ...
  description: string;
  image: string;    // e.g. "/family/father.jpg"
}

interface FamilyState {
  members: FamilyMember[];
  loading: boolean;
  error: string | null;
}

export function useFamilyData(): FamilyState {
  const [state, setState] = useState<FamilyState>({
    members: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/family_website_data.json", { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status} when fetching /family_website_data.json`);
        const data = await res.json();
        if (!data?.members || !Array.isArray(data.members)) {
          throw new Error(`Missing "members" array in family_website_data.json`);
        }
        setState({ members: data.members, loading: false, error: null });
      } catch (e: any) {
        setState({ members: [], loading: false, error: e?.message ?? String(e) });
      }
    })();
  }, []);

  return state;
}
