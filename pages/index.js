import Link from 'next/link'
export default function Home(){
  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Dicetools.online — 100+ Tools (Placeholders)</h1>
      <p className="mb-4">Welcome to the Dicetools scaffold. This site includes placeholder UIs for all tools and example pages. Use the Tools index to browse.</p>
      <Link href="/tools"><a className="inline-block px-4 py-2 bg-blue-600 text-white rounded">Open Tools Index</a></Link>
    </>
  )
}
