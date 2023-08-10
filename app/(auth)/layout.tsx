import { ClerkProvider } from "@clerk/nextjs";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Threads",
  description: "A Next.js 13 Meta Threads App",
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
};
export default RootLayout;
