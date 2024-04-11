import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import { securePage } from "@/services/securePage";
import { Button } from 'react-bootstrap';

export default securePage(function Dashboard() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  const user = useUser();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'right', alignItems: 'center', padding: '20px', gap: '10px' }}>
      <strong>{user?.email || "Not authenticated"}</strong>
      <Button type="button" onClick={handleSignOut}>
        Sign Out
      </Button>
    </div>
  );
});

          