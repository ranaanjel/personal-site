import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Not Found",
  description: "The Page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <div>
      <div>Not Found</div>
      <div>The page you are looking for does not exist.</div>
    </div>
  );
}
