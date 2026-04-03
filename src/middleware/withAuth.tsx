"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function withAuth(Component: React.ComponentType) {
  return function AuthenticatedComponent(props: any) {
    const router = useRouter();

    useEffect(() => {
      const checkAuth = () => {
        const authToken = localStorage.getItem("cip_auth_token");
        const user = localStorage.getItem("cip_user");

        if (!authToken || !user) {
          router.push("/login");
        }
      };

      checkAuth();
    }, [router]);

    return <Component {...props} />;
  };
}
