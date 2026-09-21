import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fallow Wood | For the quiet good parts",
  description: "Custom furniture made by hand in Portland, for the moments that become part of the story.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en"><body>{children}</body></html>;
}
