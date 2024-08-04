import { DarkModeToggle } from "@/components/DarkModeToggle";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <DarkModeToggle />
      // Todo: sidebar
      {children}
    </main>
  );
}
