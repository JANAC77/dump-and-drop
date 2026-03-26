function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Changed to flex-col to stack items vertically */}
        <div className="flex flex-col items-center justify-center gap-2">
          
          <p className="text-blue-200/60 text-sm font-medium tracking-wide">
            © {new Date().getFullYear()} Dump & Drop. All rights reserved.
          </p>

          <p className="text-blue-200/40 text-xs font-semibold tracking-widest uppercase">
            Powered by <span className="text-blue-500/80">INNOMATRICS TECH.</span>
          </p>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;