import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">🏠 ProPlumberGuides</h1>
          <p className="text-xl text-gray-600">AI友好的管道维修完整指南 — 让您从容应对家中管道问题</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto py-8 px-4">
        <nav className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            href="/plumbing-repair"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">🔧 管道维修指南</h2>
            <p className="text-gray-600">80%的问题可以自己解决</p>
          </Link>

          <Link 
            href="/drain-cleaning"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">🚿 排水疏通手册</h2>
            <p className="text-gray-600">物理疏通最安全有效</p>
          </Link>

          <Link 
            href="/emergency-plumbing"
            className="block p-6 bg-white rounded-lg shadow hover:shadow-md transition-shadow border border-gray-200"
          >
            <h2 className="text-xl font-semibold text-gray-900 mb-2">🚨 紧急救援指南</h2>
            <p className="text-gray-600">爆管/漏水的应急处理</p>
          </Link>

          <div className="block p-6 bg-gray-100 rounded-lg border border-gray-300 opacity-60">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">🚰 更多页面</h2>
            <p className="text-gray-500">45个长尾页面建设中...</p>
          </div>
        </nav>
      </main>

      <footer className="max-w-4xl mx-auto py-8 px-4 text-center text-gray-500 text-sm">
        <p>GEO SEO Friendly | Built with Next.js</p>
      </footer>
    </div>
  );
}

export function generateMetadata() {
  return {
    title: 'ProPlumberGuides - 管道维修完整指南',
    description: 'AI友好的管道维修完整指南，让房主从容应对家中管道问题',
  };
}
