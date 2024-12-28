import Link from "next/link"
import Image from "next/image"
import { Search, Heart, ShoppingBag } from 'lucide-react'

export default function Navbar() {
  return ( 
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-end gap-4 px-8 py-2 text-xs bg-gray-100">
        <Link href="#" className="hover:opacity-70">Find a Store</Link>
        <span className="text-gray-300">|</span>
        <Link href="#" className="hover:opacity-70">Help</Link>
        <span className="text-gray-300">|</span>
        <Link href={"/joing"} className="hover:opacity-70">Join Us</Link>
        <span className="text-gray-300">|</span>
        <Link href={"/signup"} className="hover:opacity-70">Sign In</Link>
      </div>
      
      <div className="flex items-center justify-between px-8 py-4">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image 
              src="/nike-logo.svg" 
              alt="Nike" 
              width={58} 
              height={20} 
              className="h-5 w-auto"
            />
          </Link>
          <Link href="/jordan">
            <Image 
              src="/jordan-logo.svg" 
              alt="Jordan" 
              width={24} 
              height={24} 
              className="h-6 w-auto"
            />
          </Link>
        </div>

        <nav className="flex items-center gap-6">
          <Link href="#" className="text-base font-medium hover:opacity-70">New & Featured</Link>
          <Link href="#" className="text-base font-medium hover:opacity-70">Men</Link>
          <Link href="#" className="text-base font-medium hover:opacity-70">Women</Link>
          <Link href="#" className="text-base font-medium hover:opacity-70">Kids</Link>
          <Link href="#" className="text-base font-medium hover:opacity-70">Sale</Link>
          <Link href="#" className="text-base font-medium hover:opacity-70">SNKRS</Link>
        </nav>
 
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="h-10 w-40 rounded-full bg-gray-100 pl-10 pr-4 text-sm outline-none focus:w-60 transition-all"
            />
          </div>
          <button className="hover:opacity-70">
            <Heart className="h-6 w-6" />
          </button>
          <button className="hover:opacity-70">
            <ShoppingBag className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}