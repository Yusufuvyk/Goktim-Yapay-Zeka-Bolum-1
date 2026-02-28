import { Terminal, Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface VibeCodingBoxProps {
  prompt: string;
  title?: string;
}

export default function VibeCodingBox({ prompt, title = "Vibe Coding İpucu" }: VibeCodingBoxProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-12 bg-gray-900 rounded-2xl overflow-hidden shadow-xl border border-gray-800">
      <div className="flex items-center justify-between px-4 py-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Terminal size={18} className="text-emerald-400" />
          <span className="text-sm font-medium text-gray-200">{title}</span>
        </div>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-400 hover:text-white bg-gray-700/50 hover:bg-gray-700 rounded-lg transition-colors"
        >
          {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
          {copied ? 'Kopyalandı!' : 'Kopyala'}
        </button>
      </div>
      <div className="p-6">
        <p className="text-gray-300 font-mono text-sm leading-relaxed">
          <span className="text-emerald-400 font-bold select-none mr-2">❯</span>
          {prompt}
        </p>
      </div>
    </div>
  );
}
