
function Terminal() {
  return (
    <div className="mt-12 rounded-lg overflow-hidden bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d]">
      <div className="backdrop-blur-sm flex items-center gap-2 px-4 py-2">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex gap-4 text-gray-400 text-sm">
          <span className="hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer">Problems</span>
          <span className="hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer">Output</span>
          <span className="hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer">Debug Console</span>
          <span className="text-white bg-white/10 px-2 py-1 rounded">Terminal</span>
          <span className="hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer">Ports</span>
          <span className="hover:text-white hover:bg-white/10 px-2 py-1 rounded transition-colors cursor-pointer">Comments</span>
        </div>
      </div>
      <div className="bg-gradient-to-br from-[#1e1e1e] to-[#2d2d2d] p-4 font-mono text-sm">
        <div className="text-[#0078D4]">
          PS C:\Users\freddysongg\portfolio&gt; git add .
        </div>
        <div className="text-[#0078D4]">
          PS C:\Users\freddysongg\portfolio&gt; git commit -m "Hi! Thanks for checking out my website!"
        </div>
        <div className="text-[#0078D4]">
          [main 123456] Hi! Thanks for checking out my website!
        </div>
        <div className="text-[#0078D4]">
          PS C:\Users\freddysongg\portfolio&gt; git push origin main
        </div>
        <div className="text-[#0078D4]">
          To github.com:freddysongg/portfolio.git
        </div>
        <div className="text-[#0078D4]">
          121437..8a2b3def main -&gt; main
        </div>
      </div>
    </div>
  );
}

export default Terminal;