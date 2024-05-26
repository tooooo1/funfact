import { ROUTES } from "@/constants";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <article>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={ROUTES.HOME}>Return Home</Link>
    </article>
  );
};

export default NotFoundPage;
