import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-white/8 py-8 text-center mt-20">
        <p className="font-heading text-volt text-xl mb-1">SkyMart</p>
        <p className="text-white/30 text-xs">© 2025 SkyMart • Built with React + Redux + TanStack Query</p>
      </footer>
    </div>
  )
}
