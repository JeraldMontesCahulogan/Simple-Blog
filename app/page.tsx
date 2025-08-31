import prisma from "@/lib/prisma";

export default async function Home() {
  const user = await prisma.user.findMany();
  console.log(user);

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
}
