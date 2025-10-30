import Head from 'next/head'
import Link from 'next/link'
export default function Header(){ 
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <header className="bg-white border-b">
        <div className="container flex items-center justify-between py-4">
          <nav className="flex items-center space-x-4">
            <Link href="/"><a className="font-semibold">Home</a></Link>
            <Link href="/tools"><a>Tools</a></Link>
            <Link href="/suggestion"><a>Suggestion</a></Link>
          </nav>
          <div className="flex items-center space-x-3">
            <img src="/dice-logo.svg" alt="Dicetools logo" className="h-10 w-10" />
            <span className="font-bold">Dicetools</span>
          </div>
        </div>
      </header>
    </>
  )
}
