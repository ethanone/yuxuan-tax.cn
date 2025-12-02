# 四川省煜轩财税咨询有限公司官网

> 以“财税 + 智能”双引擎，帮助企业把控风险、释放资金效率

![Next.js](https://img.shields.io/badge/Next.js-15.3.5-black?logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-8B5CF6?logo=tailwindcss)

---

## 📚 快速导航

- [配置指南](./CONFIGURATION_GUIDE.md)
- [快速参考](./QUICK_REFERENCE.md)
- [项目检查清单](./PROJECT_CHECKLIST.md)
- [图片说明](./public/images/README.md)

> 小贴士：网站所有文案位于 `src/data/companyData.json`；favicon 配置在 `src/app/layout.tsx`。

---

## 📋 目录

1. [项目概览](#-项目概览)
2. [快速开始](#-快速开始)
3. [项目结构](#-项目结构)
4. [核心特性](#-核心特性)
5. [技术栈](#️-技术栈)
6. [内容管理](#-内容管理)
7. [部署说明](#-部署说明)
8. [常见问题](#-常见问题)
9. [联系方式](#-联系方式)

---

## 🎯 项目概览

- **公司名称**：四川省煜轩财税咨询有限公司  
- **定位**：资深财税顾问 + 自研智能工具  
- **使命**：让每一次财税决策更稳妥、可追溯  
- **业务场景**：税务筹划与合规、财务共享与智能记账、发票风控与监测、数字化财税培训  
- **网站风格**：科技感渐变 + 稳重文案，突出“智能财税”主题

---

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 或 pnpm

### 开发流程
```bash
git clone https://github.com/ethanone/uumi.net.git
cd uumi-ai-site
npm install
npm run dev   # 浏览器访问 http://localhost:3000
```

### 构建与部署
```bash
npm run build
npm run start
```

---

## 📁 项目结构

```
yuxuan-tax.cn/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── globals.css      # 品牌配色 & 科技感样式
│   │   ├── layout.tsx       # SEO / Favicon / 字体配置
│   │   └── page.tsx         # 单页官网
│   ├── components/ui/       # 按钮、卡片等 UI 基础件
│   └── data/companyData.json# 公司数据（文字、案例）
├── public/                  # 图片与静态资源
└── README.md                # 本文档
```

---

## 🌟 核心特性

- 配置化文案：修改 `companyData.json` 即可切换品牌信息
- 纯 CSS 科技感视觉 + Framer Motion 细腻动效
- Tailwind CSS 4 + Radix UI 构建统一设计体系
- SEO / OpenGraph / DNS Prefetch 预置到位
- 移动优先布局，突出 Hero、服务、案例、联系四大板块
- 支持删减模块：数组为空时自动收起对应区域

---

## 🛠️ 技术栈

- **框架**：Next.js 15、React 19、TypeScript 5
- **样式**：Tailwind CSS 4、Radix UI、Framer Motion、Lucide Icons
- **质量**：ESLint 9、PostCSS、严格类型检查
- **性能**：静态站点生成（SSG）、现代图片格式、长缓存策略

---

## 🧩 内容管理

| 内容 | 配置位置 | 说明 |
|------|----------|------|
| 公司信息 / 使命愿景 | `companyData.json` → `companyInfo / aboutUs` | 文字、口号、联系方式 |
| 服务与优势 | `focusAreas / coreAdvantages` | 支持任意条目 |
| 案例展示 | `caseStudies` | 每例含标题、场景、技术亮点 |
| 团队信息 | `team` | 若要精简，可删除 `leadership` 项 |
| 联系方式 | `contact` | 电话、邮箱、地址等 |
| SEO 元信息 | `src/app/layout.tsx` → `metadata` | 记得同步域名、关键词 |
| 品牌配色 | `src/app/globals.css` | 渐变、按钮、网格等样式 |

> 想要更简洁的页面？把不需要的数组清空即可，组件会自动隐藏。

---

## 🚀 部署说明

1. **推送代码**
   ```bash
   git add .
   git commit -m "feat: update yuxuan branding"
   git push origin main
   ```
2. **Vercel 部署**
   - 登录 [vercel.com](https://vercel.com)，导入仓库
   - 框架自动识别，保持默认 `npm run build`
   - 部署成功后可绑定自定义域名
3. **DNS 建议**
   ```
   A     @    76.76.21.21
   CNAME www  cname.vercel-dns.com
   ```
4. **环境变量（如需）**
   ```env
   NEXT_PUBLIC_SITE_URL=https://www.yuxuantax.cn
   ```

---

## 🛠️ 常见问题

**Q1：如何替换公司文案？**  
在 `src/data/companyData.json` 中修改对应字段后重新部署即可。

**Q2：想缩短页面内容？**  
删除 `focusAreas`、`team.leadership` 等数组元素，UI 会自动收起。

**Q3：SEO 信息在哪里设置？**  
`src/app/layout.tsx` 的 `metadata` 中可配置标题、描述、关键词与域名。

**Q4：Logo 暂时没有？**  
`public/yuxuan-logo.svg` 目前是占位图，可直接替换成正式 Logo 并保持同名。

---

## 📞 联系方式

- **公司**：四川省煜轩财税咨询有限公司  
- **电话**：17364521649  
- **邮箱**：hello@yuxuantax.cn  
- **地址**：中国(四川)自由贸易试验区成都市天府新区华阳街道海昌路169号18栋1层9号  
- **官网**：www.yuxuantax.cn

---

## 📝 许可证

本项目为四川省煜轩财税咨询有限公司所有，保留所有权利。

---

*最后更新：2025年1月8日 · v1.2.0*
