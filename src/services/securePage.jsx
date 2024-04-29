import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";

export function securePage(Page, returnTo = "/") {
  return () => {
    const { isLoading, session } = useSessionContext();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !session) {
        router.replace("/loginpage?returnTo=" + encodeURIComponent(returnTo));
      }
    }, [isLoading, session, router]);

    if (isLoading) {
      return null;
    }

    if (!session) {
      return null;
    }

    return <Page />;
  };
}