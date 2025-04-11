// import NextAuth, {getServerSession} from 'next-auth'
// import GoogleProvider from 'next-auth/providers/google'
// import {MongoDBAdapter} from "@next-auth/mongodb-adapter";
// import clientPromise from "@/lib/mongodb";

// // SET ADMINS HERE
// const adminEmails = ['itsmesubiya@gmail.com', 'maimoonakhanam18@gmail.com', 'alkaankausar22@gmail.com', 'nusrathj44@gmail.com'];

// export const authOptions = {
//   secret: process.env.SECRET,
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     }),
//   ],
//   adapter: MongoDBAdapter(clientPromise),
//   callbacks: {
//     session: ({session,token,user}) => {
//       if (adminEmails.includes(session?.user?.email)) {
//         return session;
//       } else {
//         return false;
//       }
//     },
//   },
// };

// export default NextAuth(authOptions);

// export async function isAdminRequest(req,res) {
//   const session = await getServerSession(req,res,authOptions);
//   if (!adminEmails.includes(session?.user?.email)) {
//     res.status(401);
//     res.end();
//     throw 'not an admin';
//   }
// }



// using nextauth.js provider here for google authentication
import client from '@/lib/mongodb'
import { MongoDBAdapter } from '@auth/mongodb-adapter'
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
  ],
  adapter: MongoDBAdapter(client)
})