import localFont from "next/font/local"

export const normalFont = localFont({
  src: [
    {
      path: "./e4af272ccee01ff0-s.p.woff2",
      weight: "300",
      style: "normal",
    },
 
  ],
  variable: "--font-normal",
  display: "swap",
})


export const titleFont = localFont({
  src: [
    {
      path: "./6ee9a16400b3eb31-s.p.woff2",
      weight: "400",
      style: "normal",
    },
 
  ],
  variable: "--font-normal",
  display: "swap",
})

