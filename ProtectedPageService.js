"use client";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const ProtectedPageService = () => {
  const router = useRouter();
  const path = usePathname();

  const userAuth = useSelector((state) => state?.persistedReducer?.user?.userData);

  const afterLoginNotAccessiblePages = ["/login", "/register"];
  const protectedPagesForSpecificUser = [
    "/chat",
    "/community",
    "/friends",
    "/wardrode",
    "/store",
    "/token"
  ];

  useEffect(() => {
    if (afterLoginNotAccessiblePages.includes(path) && userAuth) {
      router.push("/profile");
    }

    const isProtectedPath = protectedPagesForSpecificUser.some((pattern) =>
      (pattern instanceof RegExp && pattern.test(path)) || path === pattern
    );

    if (isProtectedPath && !userAuth) {
      router.push("/login");
    }
  }, [userAuth, path, router]);

  return null;
};

export default ProtectedPageService;
