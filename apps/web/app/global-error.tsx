"use client";

import { Button } from "@funfact/ui";

interface GlobalErrorPageProps {
  reset: () => void;
}

const GlobalErrorPage = ({ reset }: GlobalErrorPageProps) => {
  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </body>
    </html>
  );
};

export default GlobalErrorPage;
