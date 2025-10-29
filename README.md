# Dice Tools — Starter Scaffold

A production-ready starter scaffold for **Dice Tools** — a multi-tool web app built with **Next.js 14 (App Router)** and **Tailwind CSS**.

## Included
- Next.js app router structure (`app/`)
- Example components: Header, Footer, ToolCard, SEO component
- Example tool page: `/tools/ai-text-summarizer`
- API route example (Edge)
- CSV manifest of all tool slugs + meta
- 10 ready SEO descriptions (120 words each) inside `tools/descriptions.md`
- Generator script `scripts/generate_tools.py` to auto-create remaining tool pages/descriptions
- `vercel.json`, `sitemap.xml`, `robots.txt`

## Quick Start
1. Extract ZIP and open terminal in project root.
2. Install: `npm install`
3. Run dev: `npm run dev`
4. Build: `npm run build`
5. Deploy: `vercel --prod` (configure project in Vercel dashboard)

## Notes
- This scaffold includes production-focused SEO meta, JSON-LD templates, and accessible components.
- Use `scripts/generate_tools.py` to programmatically generate other tool pages and 120-word descriptions using the included metadata CSV.
