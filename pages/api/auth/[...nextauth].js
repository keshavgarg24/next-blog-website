import NextAuth from "next-auth";
import GithubProvider from 'next-auth/providers/github';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: 'Ov23likqCmRjUZVVJxGT',
            clientSecret: '698af7512f41ffdc3d6ede310fff4bc4b8d20042'
        }),
        GoogleProvider({
            clientId: '45626204484-78tpaq80rvlo714hb1s77gu76b986ruf.apps.googleusercontent.com',
            clientSecret: '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'
        }),
    ],
};

export default NextAuth(authOptions);
