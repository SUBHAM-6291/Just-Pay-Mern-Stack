import mongoose from "mongoose";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import User from "@/app/Models/User.Model";
import Payment from "@/app/Models/Payment.Model";
import GoogleProvider from "next-auth/providers/google";
import LinkedInProvider from "next-auth/providers/linkedin";

export const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  providers: [
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    })
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "github"||"Google"||"LinkedIn") 
        {
        try {
          if (mongoose.connection.readyState === 0) {
            try {
              await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              });
              console.log("mongodb connected ")
            } catch (error) {
              console.error(`mongodb error failed ${error}`)
              return false;
            }
          }

          const currentUser = await User.findOne({ email: user.email });

          if (!currentUser) {
            const newUser = new User({
              email: user.email,
              name: user.name,
              username: user.email.split("@")[0],
              profilePic: user.image || "",
            });

            await newUser.save();
          }
       

          return true;
        } catch (error) {
          return false;
        }
      } else {
        return false;
      }
    },
  },
});

export { authOptions as GET, authOptions as POST };
