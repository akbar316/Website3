export default function Footer(){
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="container py-8 text-sm text-gray-600">
        <div className="flex justify-between">
          <div>
            <a href="/about">About</a> • <a href="/privacy">Privacy</a> • <a href="/terms">Terms</a> • <a href="/contact">Contact</a>
          </div>
          <div>© {new Date().getFullYear()} Dicetools.online</div>
        </div>
      </div>
    </footer>
  )
}
