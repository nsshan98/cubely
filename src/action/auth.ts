"use server";
import { signIn, signOut } from "@/auth";
import { LoginFormTypes } from "@/types/authTypes";

// Sign Out
export async function doUserLogOut() {
    console.log("Log out ----->");
    await signOut({ redirectTo: "/login" });
}

export async function doUserSignIn(data: LoginFormTypes) {
    const email = data.email as string;
    const password = data.password as string;

    try {
        await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
    } catch (error) {
        switch (error) {
            case "CredentialsSignin":
                return {
                    error: "Check your Credentials",
                };
            case "SessionRequired":
                return {
                    error: "Session Required",
                };

            case "CallbackRouteError":
                return {
                    error: "Callback Route Error",
                };
        }
        throw error;
    }
}