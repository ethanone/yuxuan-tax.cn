import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

// 配置 Inter 字体 - 优化加载
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

export const metadata: Metadata = {
  title: "四川省煜轩财税咨询有限公司 · 智能财税服务",
  description: "四川省煜轩财税咨询有限公司深耕西南市场，以资深财税顾问与智能化工具为企业提供税务筹划、共享记账、发票风控及数字化培训等一体化服务。",
  keywords: ["财税咨询", "智能财税", "税务筹划", "发票风控", "财务共享", "四川省煜轩财税咨询有限公司", "煜轩财税"],
  authors: [{ name: "Sichuan Yuxuan Tax Consulting Co., Ltd." }],
  icons: {
    icon: "/uumi-logo.png",
    shortcut: "/uumi-logo.png",
    apple: "/uumi-logo.png",
  },
  openGraph: {
    title: "四川省煜轩财税咨询有限公司 · 智能财税服务",
    description: "专业顾问 + 智能工具，打造可持续的数字化财税体系。",
    url: "https://www.yuxuantax.cn",
    siteName: "煜轩财税",
    locale: "zh_CN",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head>
        {/* 优化加载性能 */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8B5CF6" />
        {/* DNS 预连接 */}
        <link rel="dns-prefetch" href="https://www.yuxuantax.cn" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        {children}
      </body>
    </html>
  );
}
