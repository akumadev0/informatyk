import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'INF 03 / E.09',
  description: 'Jedno losowe pytanie z zakresu INF 03 / E.09',
}

export default function INF03Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#04040D] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="relative">
        {children}
      </div>
      <p className="text-center py-2  text-xs text-gray-400">© Akumadev 2025. Pytania pochodzą ze strony praktycznyegzamin.pl</p>
    </div>
  )
}

