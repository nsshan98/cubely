import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Cubely | Cubely",
    description: "The Ultimate Cubely Experience",
};

export default async function OnboardingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}
