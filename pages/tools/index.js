import Link from 'next/link'
import toolsData from '../../tools/tools.json'
export default function ToolsIndex(){
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <p className="mb-4">Browse all available tools (placeholders).</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {toolsData.map(t => (
          <div key={t.slug} className="p-4 border rounded">
            <h3 className="font-semibold">{t.name}</h3>
            <p className="text-sm text-gray-600">{t.short}</p>
            <div className="mt-2">
              <Link href={t.path}><a className="text-sm text-blue-600">Open</a></Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
