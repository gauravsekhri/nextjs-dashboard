import User from "@/models/userModel";
import { connect } from "./dbConfig";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any, req: any) {
        try {
          connect();
          const dbUser = await User.findOne({ email: credentials?.email });
          // console.log("dbUser", dbUser, credentials);

          // const user = {
          //   id: "1",
          //   firstName: "Smith",
          //   lastName: "George",
          //   email: "jsmith@example.com",
          // };

          if (dbUser) {
            return dbUser;
          } else {
            return null;
          }
        } catch (err: any) {
          console.log("errr", err);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token._id = user?._id;
        token.fullname = user?.firstName + " " + user?.lastName;
        token.email = user?.email;
        token.isAdmin = user?.isAdmin;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token) {
        session.user._id = token._id;
        session.user.fullname = token.fullname;
        session.user.email = token.email;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
};

export default authOptions;
