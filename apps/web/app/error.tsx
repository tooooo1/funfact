"use client";

import { Button } from "@funfact/ui";
import { useRouter } from "next/navigation";
import React from "react";
import { ROUTES } from "@/constants";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  const router = useRouter();

  return (
    <article>
      <h1>Error {error.message}</h1>
      <p>Oops! Something went wrong.</p>
      <nav>
        <Button onClick={reset}>새로고침</Button>
        <Button onClick={() => router.push(ROUTES.HOME)}>홈으로 이동</Button>
      </nav>
    </article>
  );
};

export default ErrorPage;
