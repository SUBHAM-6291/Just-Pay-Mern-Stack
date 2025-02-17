import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authoptions = NextAuth({ 
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log("Sign-In Attempt:");
      console.log("User:", user);
      console.log("Account:", account);
      console.log("Profile:", profile);
      return true;
    },
    async session({ session, token }) {
      console.log("Session Data:", session);
      console.log("Token Data:", token);
      return session;
    },
    async jwt({ token, user, account }) {
      console.log("JWT Callback Triggered:");
      if (user) {
        token.id = user.id;
      }
      console.log("Token after update:", token);
      return token;
    }
  },
  events: {
    signIn(message) {
      console.log("User signed in:", message);
    },
    signOut(message) {
      console.log("User signed out:", message);
    },
    error(error) {
      console.error("Authentication error:", error);
    }
  },
  debug: true,  // Enables NextAuth debug mode
});

console.log("GitHub Client ID: ", process.env.GITHUB_ID);  
console.log("GitHub Client Secret: ", process.env.GITHUB_SECRET ? "Exists" : "Not Found");
console.log("NextAuth Secret: ", process.env.NEXTAUTH_SECRET ? "Exists" : "Not Found");

export { authoptions as GET, authoptions as POST };
