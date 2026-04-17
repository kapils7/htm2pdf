export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30 flex flex-col items-center justify-center p-6 sm:p-12 overflow-hidden">
      
      {/* Background Gradients & Ornaments */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-violet-600/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full flex flex-col gap-12">
        
        {/* Header content */}
        <div className="flex flex-col items-center text-center gap-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium tracking-wide shadow-lg shadow-indigo-500/10">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_rgba(129,140,248,0.8)]" />
            API Service is Online
          </div>
          
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-indigo-200 to-purple-400 leading-tight pb-2 cursor-default">
            HTML to PDF
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Integrate our lightning-fast, highly scalable web service to convert your HTML strings into beautiful PDF files in milliseconds.
          </p>
        </div>

        {/* Code Block Container */}
        <div className="group w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/5 transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20">
          
          {/* Mock Window Controls */}
          <div className="flex items-center justify-between px-5 py-4 bg-black/20 border-b border-white/5">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 shadow-sm" />
              <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 shadow-sm" />
            </div>
            <div className="text-xs font-mono text-slate-500 px-3 py-1 bg-white/5 rounded-md self-center">
              POST /api/v1/convert-to-pdf
            </div>
            <div className="w-12"></div>
          </div>
          
          {/* Output Code */}
          <div className="p-6 sm:p-8 overflow-x-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
            <pre className="text-sm sm:text-base font-mono leading-loose">
              <code className="text-pink-400 font-bold">curl</code> <span className="text-slate-300">-X POST</span> <span className="text-emerald-400 transition-colors hover:text-emerald-300 cursor-pointer">https://api.yourdomain.com/api/v1/convert-to-pdf</span> \
              <br/>
              <span className="text-slate-400 hover:text-slate-300 transition-colors">  -H</span> <span className="text-amber-200">"Content-Type: application/json"</span> \
              <br/>
              <span className="text-slate-400 hover:text-slate-300 transition-colors">  -H</span> <span className="text-amber-200">"x-api-key: your_api_key_here"</span> \
              <br/>
              <span className="text-slate-400 hover:text-slate-300 transition-colors">  -d</span> <span className="text-indigo-300">'{'{'}"html": "&lt;h1&gt;Hello World&lt;/h1&gt;&lt;p&gt;Built with Next.js&lt;/p&gt;"{'}'}'</span> \
              <br/>
              <span className="text-slate-400 hover:text-slate-300 transition-colors">  --output</span> <span className="text-slate-200">document.pdf</span>
            </pre>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
           <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all duration-300 group cursor-default">
             <div className="w-10 h-10 mb-5 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
             </div>
             <h3 className="text-xl font-semibold text-white mb-2">Secure Authentication</h3>
             <p className="text-slate-400 text-sm leading-relaxed">Enterprise-grade API access is validated via Supabase tracking keys in edge middleware.</p>
           </div>
           
           <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all duration-300 group cursor-default">
             <div className="w-10 h-10 mb-5 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center text-violet-300 group-hover:scale-110 transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             </div>
             <h3 className="text-xl font-semibold text-white mb-2">Usage Limits</h3>
             <p className="text-slate-400 text-sm leading-relaxed">Built-in rate limiting limits API requests efficiently preventing billing surprises to maintain quotas.</p>
           </div>
        </div>

      </div>
    </main>
  );
}
