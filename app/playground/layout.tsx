import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kompilator HTML & CSS',
  description: 'Testuj swoje umiejetności HTML i CSS bez potrzeby instalowania żadnych programów',
}

export default function HTMLPlaygroundLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
        
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="relative pt-20">
        {children}
        
      </div>

    </div>
  )
}

