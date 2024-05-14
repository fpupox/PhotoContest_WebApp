import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSessionContext } from "@supabase/auth-helpers-react";

export function securePage(Page, returnTo = "/") {
  const SecurePage = () => {
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

  // Provide a display name for your component
  SecurePage.displayName = `SecurePage(${Page.displayName || Page.name || "Component"})`;

  return SecurePage;
}
