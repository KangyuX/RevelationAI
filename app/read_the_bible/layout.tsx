// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Read the Bible",
  description: "A modern UI/UX for Bible reading",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-6" lang="en">
      {children}
    </main>
  );
}