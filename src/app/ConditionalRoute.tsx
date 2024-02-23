import { GetUser } from "../apollo/queries/index";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as React from "react";
import { usePathname } from "next/navigation";
import { useDispatch } from "react-redux";
import { setOrUpdateUser } from "@/state/slice/userSlice";

const ConditionalRoute = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [isAuthFinished, setAuthFinished] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const userResp = useQuery(GetUser);
  const dispatch = useDispatch();

  const loadUser = async () => {
    try {
      const resp = await userResp.refetch();
      return resp.data.me;
    } catch (err) {
      if (userResp.error && userResp.error.graphQLErrors) {
        for (let error of userResp.error.graphQLErrors) {
          if (error.extensions.code === "UNAUTHENTICATED") {
            localStorage.clear();
          }
        }
      }
    }
    return null;
  };
  const handleRoutes = async () => {
    if (!isAuthenticated && pathname.toLowerCase() === "/cart/shippingdetail") {
      router.replace("/register");
    } else if (isAuthenticated && pathname.toLowerCase() == "/register") {
      router.replace("/");
    }
    setAuthFinished(true);
  };

  const validatedAuth = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (!accessToken) {
      setLoading(false);
    }
    const user = await loadUser();
    if (user) {
      setAuthenticated(true);
      dispatch(setOrUpdateUser(user));
    }
    setLoading(false);
  };

  useEffect(() => {
    validatedAuth();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      handleRoutes();
    }
  }, [isLoading, isAuthenticated]);

  return <>{!isLoading && isAuthFinished ? children : null}</>;
};

export default ConditionalRoute;
