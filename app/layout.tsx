import "../styles/global.css";
import Navigation from "../components/navigation"

import { Metadata } from "next"

export const metadata :Metadata = {
  // metadata도 객체가 될 수 있음
  title: {
      template: "%s | Next movies",
      default: "Next movies"
  },
  description: 'The best movies on the best framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* 이렇게 하면 각 페이지에 컴포넌트를 일일히 넣지 않아도 됨! */}
        <Navigation/>
        {children}
      </body>
    </html>
  )
}
