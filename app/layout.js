import "./globals.css";
import {Anton} from 'next/font/google'

const anton = Anton({
  subsets:['latin'],
  weight:'400',
  variable: '--font-anton'
})
export const metadata = {
  title: "David Coast Experience",
  description: "Feel the Vibe 🌟 | 🐆Mr. One of One",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={anton.variable}>
        {children}
      </body>
    </html>
  );
}
