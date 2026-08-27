import "./globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
export const metadata = { title: "IranCoin Premium - Trading Platform", description: "Premium dark-first trading platform - 20 parts via Stitch" }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" className="dark"><body className={inter.className}>{children}</body></html>
}
