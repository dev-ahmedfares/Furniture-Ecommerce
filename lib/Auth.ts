import NextAuth, { NextAuthConfig, Session, User } from "next-auth";
import Google from "next-auth/providers/google";
import axiosInstance from "@/app/api/axios"; 
import { JWT } from "next-auth/jwt";


interface ExtendedJWT extends JWT {
  idToken?: string;
  accessToken?: string;
}


interface ExtendedSession extends Session {
  idToken?: string;
  accessToken?: string;
  user: Session["user"];
}


interface ExtendedUser extends User {
  accessToken?: string;
  
}

const authConfig: NextAuthConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account }): Promise<ExtendedJWT> {
      
      if (account) {
       
        token.idToken = account.id_token; 
        token.accessToken = account.access_token; 
      }
      return token as ExtendedJWT;
    },
    async session({
      session,
      token,
    }: {
      session: Session;
      token: ExtendedJWT;
    }): Promise<ExtendedSession> {
      // This callback runs when the session is created/updated
      (session as ExtendedSession).accessToken = token.accessToken; 
      // (session as ExtendedSession).user = {
      //   ...session.user,
      //   accessToken: token.accessToken,
      // };

      (session as ExtendedSession).idToken = token.idToken; 
      return session as ExtendedSession;
    },
    async signIn({
      user,
      account,
      // profile,
    }: {
      user: ExtendedUser;
      account: any;
      profile?: any; 
    }): Promise<boolean> {
      try {
        // Send the Google token to your backend social-login endpoint

        const response = await axiosInstance.post(
          "/api/user/social-login",
          {
            token: account.access_token, 
            account_type: "google",
          },
          {
            headers: {
              "Content-Type": "application/json",
              // "User-Type": "user", // Adjust based on your logic
            },
          }
        );
       

        
        return true; 
      } catch (error) {
        console.error("Social login failed:", error);
        return false; 
      }
    },
  },
  pages: {
    signIn: "/sign-up&in",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
