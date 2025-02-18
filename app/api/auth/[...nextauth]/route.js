import mongoose from "mongoose";
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import User from "@/app/Models/User.Model";  // Fixed naming convention
import Payment from "@/app/Models/Payment.Model"; // Fixed naming convention

export const authOptions = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        try {
          // Connect to MongoDB (if not already connected)
          if (mongoose.connection.readyState === 0) {
            try {
              await mongoose.connect(process.env.MONGO_URI, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
              });
              console.log("✅ MongoDB Connected");
            } catch (error) {
              console.error("❌ MongoDB connection failed:", error);
              return false; // Deny sign-in if MongoDB connection fails
            }
          }

          // Check if the user already exists
          const currentUser = await User.findOne({ email: user.email });

          if (!currentUser) {
            // Create new user if they don’t exist
            const newUser = new User({
              email: user.email,
              name: user.name,
              username: user.email.split("@")[0], // Default username
              profilePic: user.image || "",
            });

            await newUser.save();
            console.log("✅ New user created:", newUser);
          } else {
            console.log("✅ User already exists:", currentUser);
          }

          return true; // Allow sign-in
        } catch (error) {
          console.error("❌ Error in signIn callback:", error);
          return false; // Deny sign-in
        }
      } else {
        console.error("❌ Unsupported provider");
        return false; // Deny sign-in for unsupported providers
      }
    },
  },
});

export { authOptions as GET, authOptions as POST };
