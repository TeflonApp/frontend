import Image from "next/image";
import { sql } from "@vercel/postgres";

export default async function Home() {
  const { rows } = await sql`SELECT * from CARTS`;
  return (
    <main className="flex min-h-screen flex-col items-center flex-start p-24">
      <section w-full>
        <h2 className="text-xxl">Connect with people</h2>
      </section>
    </main>
  );
}
