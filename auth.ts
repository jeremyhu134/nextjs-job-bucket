import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export default NextAuth({
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID as string,
            clientSecret: process.env.AUTH_GITHUB_SECRET as string,
        }),
    ],
    secret: process.env.AUTH_SECRET,
});

