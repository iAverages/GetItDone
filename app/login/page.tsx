"use client";

import { Fragment, useRef, useState } from "react";
import { register } from "../utils/auth.server";
import Image from "next/image";
import { Select, Button, Box } from "@chakra-ui/react";
import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server/index";
import { User } from "../types/User";

const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000",
    }),
  ],
});

/////////////database queries
const allUsers = trpc.userList.query();
//console.log("All users:", allUsers);

const handleFetchUsers = async () => {
  const User = await allUsers;
  console.log(User);
};

const createdUser = trpc.userCreate.mutate({ name: "test1" });
console.log("Created user:", createdUser);
/////////////

//setting User data
interface IUser {
  id: Number;
  name: string;
}

//const initialUsers: IUser[] = handleFetchUsers;

export default function Home() {
  //const [Users, setProducts] = useState(initialUsers);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <p>Hello World!</p>
      <Button onClick={handleFetchUsers}></Button>

      {/* <>
        {Users.map((User, i) => (
          <Box padding={0} key={i}>
            <h1>{User.name}</h1>
          </Box>
        ))}
      </> */}
    </main>
  );
}

// const FetchUsers = async () => {
//   const User = trpc.userList;
// };
// const createdUser = await trpc.userCreate.mutate({ name: "sachinraja" });

//USE THIS
// export async function getStaticProps() {
//   3  const prisma = new PrismaClient()
//   4  const posts = await prisma.post.findMany()
//   5
//   6  return {
//   7    props : { posts }
//   8  }
//   9}
// Display list of posts (in /pages/index.tsx)
// 2export default ({posts}) =>
// 3  <ul>
// 4   {posts.map(post => (
// 5     <li key={post.id}>{post.title}</li>
// 6    ))}
// 7  </ul>
// 8);
