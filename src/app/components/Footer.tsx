export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 mt-24 border-t border-white/10 bg-black/10 text-center text-sm text-white/80">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span>&copy; {new Date().getFullYear()} Hillpointe. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="/about" className="hover:text-orange-500 transition-colors">About</a>
          <a href="/contact" className="hover:text-orange-500 transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
} 