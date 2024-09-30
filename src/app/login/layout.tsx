import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Login",
    description: "Login to your account",
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}