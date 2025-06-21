import { DefaultUser } from "next-auth";

// Define possible error types
export type NextAuthError =
    | "InvalidCredentialsError"
    | "RefreshAccessTokenError"
    | "NetworkError"
    | "TokenExpiredError"
    | "UnknownError";

// Interface for detailed error
export interface NextAuthErrorDetail {
    type: NextAuthError;
    message: string;
    statusCode?: number; // Optional status code if relevant
}

declare module "next-auth" {
    interface Session {
        accessToken?: string; // Add accessToken to the session
        user: DefaultUser; // Add role or any custom fields to user
    }

    interface User {
        accessToken: string; // Ensure accessToken is on user type
        refreshToken: string;
        data: {
            id: string;
            email: string;
        }
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        accessToken?: string;
        refreshToken?: string;
        accessTokenExpires?: number;
        error?: NextAuthError; // Add error to the JWT type
    }
}