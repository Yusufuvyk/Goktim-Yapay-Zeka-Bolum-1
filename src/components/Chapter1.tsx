import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Database, Table, Image as ImageIcon, Mic, FileText, 
  MousePointerSquareDashed, AlertTriangle, ShieldCheck, 
  ShieldAlert, BookOpen, Edit3, GraduationCap, AlertOctagon,
  Sparkles, BrainCircuit, Activity, Scan, Binary, Waves, Search,
  Droplet, Zap, VolumeX, Grid, Palette, Contrast, BarChart, Filter,
  Scale, Calculator
} from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import VibeCodingBox from './VibeCodingBox';

const splitData = [
  { name: 'Eğitim (Derste Çözülen)', value: 70, color: '#6366f1' },
  { name: 'Doğrulama (Deneme Sınavı)', value: 15, color: '#0ea5e9' },
  { name: 'Test (Gerçek Sınav)', value: 15, color: '#10b981' },
];

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);

const NoiseInteractive = () => {
  const [isNoisy, setIsNoisy] = useState(false);
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm border border-rose-100">
      <div className="relative aspect-video rounded-xl overflow-hidden mb-4 bg-slate-200">
        <img 
          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=800" 
          alt="Cat" 
          className={`w-full h-full object-cover transition-all duration-300 ${isNoisy ? 'blur-md contrast-150 grayscale' : ''}`}
          referrerPolicy="no-referrer"
        />
        {isNoisy && (
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8L3N2Zz4=')] opacity-50 mix-blend-overlay"></div>
        )}
        <div className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-lg text-sm font-bold backdrop-blur-md ${isNoisy ? 'bg-rose-500/80 text-white' : 'bg-emerald-500/80 text-white'}`}>
          {isNoisy ? 'Yapay Zeka: "Bu ne? Anlayamıyorum!"' : 'Yapay Zeka: "Bu bir kedi! %99 emin."'}
        </div>
      </div>
      <button 
        onClick={() => setIsNoisy(!isNoisy)}
        className={`w-full py-3 rounded-xl font-bold transition-colors ${isNoisy ? 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200' : 'bg-rose-100 text-rose-700 hover:bg-rose-200'}`}
      >
        {isNoisy ? 'Gürültüyü Temizle (Filtrele)' : 'Gürültü Ekle (Noise)'}
      </button>
    </div>
  );
};

const PixelSimulator = () => {
  const [mode, setMode] = useState<'gray' | 'rgb'>('gray');
  const [gray, setGray] = useState(128);
  const [r, setR] = useState(239);
  const [g, setG] = useState(68);
  const [b, setB] = useState(68);

  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-2xl text-white mt-8">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2 space-y-6">
          <div className="flex gap-2">
            <button 
              onClick={() => setMode('gray')}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors flex items-center gap-2 ${mode === 'gray' ? 'bg-white text-slate-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              <Contrast size={16} /> Siyah-Beyaz (1 Kanal)
            </button>
            <button 
              onClick={() => setMode('rgb')}
              className={`px-4 py-2 rounded-lg font-bold text-sm transition-colors flex items-center gap-2 ${mode === 'rgb' ? 'bg-white text-slate-900' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
            >
              <Palette size={16} /> Renkli RGB (3 Kanal)
            </button>
          </div>
          
          <h3 className="text-2xl font-bold">Bilgisayar Rengi Nasıl Görür?</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            {mode === 'gray' 
              ? 'Siyah-beyaz bir görüntüde her piksel sadece tek bir sayıdan ibarettir. 0 tam karanlık (siyah), 255 ise tam parlaklık (beyaz) demektir. Aradaki sayılar gri tonlarını oluşturur.' 
              : 'Renkli bir görüntüde ise her piksel üst üste binmiş 3 sayıdan (Kırmızı, Yeşil, Mavi) oluşur. Bilgisayar "Kırmızı" rengini bilmez, sadece [255, 0, 0] matrisini bilir!'}
          </p>

          <div className="space-y-4">
            {mode === 'gray' ? (
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono text-slate-400">
                  <span>0 (Siyah)</span>
                  <span>Değer: {gray}</span>
                  <span>255 (Beyaz)</span>
                </div>
                <input type="range" min="0" max="255" value={gray} onChange={(e) => setGray(Number(e.target.value))} className="w-full accent-slate-400" />
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-red-400"><span>R (Kırmızı)</span><span>{r}</span></div>
                  <input type="range" min="0" max="255" value={r} onChange={(e) => setR(Number(e.target.value))} className="w-full accent-red-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-green-400"><span>G (Yeşil)</span><span>{g}</span></div>
                  <input type="range" min="0" max="255" value={g} onChange={(e) => setG(Number(e.target.value))} className="w-full accent-green-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono text-blue-400"><span>B (Mavi)</span><span>{b}</span></div>
                  <input type="range" min="0" max="255" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full accent-blue-500" />
                </div>
              </>
            )}
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col items-center justify-center gap-6">
          {/* Color Preview Box */}
          <div 
            className="w-48 h-48 rounded-2xl shadow-inner border-4 border-slate-700 transition-colors duration-75"
            style={{ backgroundColor: mode === 'gray' ? `rgb(${gray},${gray},${gray})` : `rgb(${r},${g},${b})` }}
          ></div>
          
          {/* Matrix Representation */}
          <div className="bg-black/50 p-4 rounded-xl border border-slate-700 font-mono text-center">
            <div className="text-slate-500 text-xs mb-2 uppercase tracking-widest">Yapay Zekanın Gördüğü Matris</div>
            <div className="text-2xl font-bold tracking-widest">
              {mode === 'gray' ? (
                <span className="text-slate-300">[{gray}]</span>
              ) : (
                <span>
                  [<span className="text-red-400">{r}</span>, <span className="text-green-400">{g}</span>, <span className="text-blue-400">{b}</span>]
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataDetective = () => {
  const [step, setStep] = useState(0);

  const data = [
    { id: 1, name: 'Ayşe', age: 15, grade: 85 },
    { id: 2, name: 'Ali', age: step >= 3 ? 16 : 999, grade: 90, isOutlier: step >= 1 && step < 3 },
    { id: 3, name: 'Zeynep', age: 16, grade: step >= 3 ? 87 : null, isMissing: step >= 2 && step < 3 },
  ];

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl mt-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold">
            <Search size={14} /> EDA (KEŞİFÇİ VERİ ANALİZİ)
          </div>
          <h3 className="text-3xl font-bold text-slate-900">Veri Dedektifliği: Sayıların Hikayesi</h3>
          <p className="text-slate-600 leading-relaxed">
            Veriyi bulduk, peki şimdi ne olacak? Yapay zekaya bu veriyi doğrudan verirsek kafası karışır. Önce bir dedektif gibi veriyi incelemeli (analiz etmeli) ve hataları bulmalıyız. Bu işleme <strong>Keşifçi Veri Analizi (EDA)</strong> denir.
          </p>
          
          <div className="space-y-3">
            <button 
              onClick={() => setStep(1)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between ${step >= 1 ? 'bg-rose-100 text-rose-800' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
            >
              <span>1. Aykırı Değerleri (Outliers) Bul</span>
              {step >= 1 && <AlertTriangle size={18} />}
            </button>
            {step === 1 && <p className="text-sm text-rose-600 px-2">Dedektif Diyor ki: "Bir insan 999 yaşında olamaz! Bu bir klavye hatası (gürültü). Yapay zeka bunu görürse insanların bin yıl yaşadığını sanır."</p>}

            <button 
              disabled={step < 1}
              onClick={() => setStep(2)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between ${step >= 2 ? 'bg-amber-100 text-amber-800' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'} ${step < 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span>2. Eksik Verileri (Missing Data) Bul</span>
              {step >= 2 && <Search size={18} />}
            </button>
            {step === 2 && <p className="text-sm text-amber-600 px-2">Dedektif Diyor ki: "Zeynep'in notu girilmemiş (Boş/Null). Yapay zeka boşlukları sevmez, hata verir."</p>}

            <button 
              disabled={step < 2}
              onClick={() => setStep(3)}
              className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-all flex items-center justify-between ${step >= 3 ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'} ${step < 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <span>3. Veriyi Temizle ve Doldur</span>
              {step >= 3 && <Sparkles size={18} />}
            </button>
            {step === 3 && <p className="text-sm text-emerald-600 px-2">Çözüm: 999 yaşını sildik (gerçek yaşı olan 16'yı yazdık). Zeynep'in boş notunu ise sınıfın ortalaması (87) ile doldurduk. Artık veri tertemiz!</p>}
          </div>
        </div>

        <div className="md:w-1/2 bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-slate-400 uppercase border-b border-slate-200">
              <tr>
                <th className="px-4 py-3">Öğrenci</th>
                <th className="px-4 py-3">Yaş</th>
                <th className="px-4 py-3">Not</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr key={row.id} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-4 font-medium text-slate-900">{row.name}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-md transition-colors ${row.isOutlier ? 'bg-rose-200 text-rose-800 font-bold animate-pulse' : step >= 3 && row.id === 2 ? 'bg-emerald-100 text-emerald-700 font-bold' : 'text-slate-600'}`}>
                      {row.age}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className={`px-2 py-1 rounded-md transition-colors ${row.isMissing ? 'bg-amber-200 text-amber-800 font-bold animate-pulse' : step >= 3 && row.id === 3 ? 'bg-emerald-100 text-emerald-700 font-bold' : 'text-slate-600'}`}>
                      {row.grade === null ? 'BOŞ (NULL)' : row.grade}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {step >= 3 && (
            <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-800 text-sm text-center font-medium flex items-center justify-center gap-2">
              <ShieldCheck size={18} /> Veri Yapay Zeka İçin Hazır!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const MatrixInteractive = () => {
  const [showMatrix, setShowMatrix] = useState(false);
  const grid = [
    [250, 250, 250, 250, 250, 250, 250, 250],
    [250,  40,  40, 250, 250,  40,  40, 250],
    [250,  40,  40, 250, 250,  40,  40, 250],
    [250, 250, 250, 250, 250, 250, 250, 250],
    [250,  40, 250, 250, 250, 250,  40, 250],
    [250, 250,  40,  40,  40,  40, 250, 250],
    [250, 250, 250, 250, 250, 250, 250, 250],
    [250, 250, 250, 250, 250, 250, 250, 250],
  ];

  return (
    <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200 shadow-xl mt-8 cursor-pointer group" onClick={() => setShowMatrix(!showMatrix)}>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h4 className="text-2xl font-bold text-slate-900 mb-4">Bir Resim Aslında Nedir?</h4>
          <p className="text-slate-600 leading-relaxed mb-6">
            Yandaki gülen yüze tıklayın! Bilgisayarın klasöründe bu resim bir "görsel" olarak değil, <strong>sayılardan oluşan bir tablo (matris)</strong> olarak saklanır. 0 siyaha, 255 beyaza yakındır.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-100 text-indigo-700 text-sm font-bold group-hover:bg-indigo-200 transition-colors">
            <MousePointerSquareDashed size={18} /> Tıklayarak Matrisi Gör
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center w-full">
          <div className="grid grid-cols-8 gap-0.5 bg-slate-300 p-1.5 rounded-xl w-full max-w-[300px] aspect-square">
            {grid.map((row, i) => row.map((val, j) => (
              <div 
                key={`${i}-${j}`} 
                className="flex items-center justify-center text-[10px] sm:text-xs font-mono transition-all duration-700 rounded-sm"
                style={{ 
                  backgroundColor: `rgb(${val},${val},${val})`,
                  color: val > 128 ? '#cbd5e1' : '#475569'
                }}
              >
                <span className={`transition-opacity duration-700 ${showMatrix ? 'opacity-100' : 'opacity-0'}`}>
                  {val}
                </span>
              </div>
            )))}
          </div>
        </div>
      </div>
    </div>
  );
};

const SignalInteractive = () => {
  const [showSignal, setShowSignal] = useState(false);
  const dataPoints = [0, 0.5, 0.86, 1, 0.86, 0.5, 0, -0.5, -0.86, -1, -0.86, -0.5, 0];

  return (
    <div className="bg-slate-900 p-6 md:p-8 rounded-3xl border border-slate-800 shadow-xl mt-8 cursor-pointer group text-white" onClick={() => setShowSignal(!showSignal)}>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="md:w-1/2">
          <h4 className="text-2xl font-bold text-white mb-4">Ses Nasıl Saklanır?</h4>
          <p className="text-slate-400 leading-relaxed mb-6">
            Ses sürekli bir dalgadır. Ancak bilgisayar sürekli olan hiçbir şeyi saklayamaz. Dalgayı saniyede binlerce kez "ölçer" ve bu ölçümleri bir sayı dizisi (array) olarak kaydeder. Tıklayın ve dalganın nasıl sayılara dönüştüğünü görün!
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 text-sm font-bold group-hover:bg-emerald-500/30 transition-colors">
            <MousePointerSquareDashed size={18} /> Tıklayarak Diziyi Gör
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col items-center">
          <div className="relative w-full h-40 bg-slate-800 rounded-2xl flex items-center justify-between px-6 py-4">
            {/* Center Line */}
            <div className="absolute left-0 right-0 h-px bg-slate-600 top-1/2"></div>
            
            {dataPoints.map((val, i) => {
              const heightPct = Math.abs(val) * 40;
              const isPositive = val >= 0;
              return (
                <div key={i} className="relative flex flex-col items-center justify-center w-4 h-full">
                  {showSignal ? (
                    <>
                      <div 
                        className="absolute w-3 h-3 bg-emerald-400 rounded-full z-10 shadow-[0_0_10px_rgba(52,211,153,0.8)] transition-all duration-500"
                        style={{ [isPositive ? 'bottom' : 'top']: `calc(50% + ${heightPct}%)` }}
                      ></div>
                      <div 
                        className="absolute w-0.5 bg-emerald-400/50 transition-all duration-500"
                        style={{ 
                          height: `${heightPct}%`, 
                          [isPositive ? 'bottom' : 'top']: '50%' 
                        }}
                      ></div>
                    </>
                  ) : (
                    <div 
                        className="absolute w-4 h-4 bg-indigo-500 rounded-full blur-[4px] transition-all duration-500"
                        style={{ [isPositive ? 'bottom' : 'top']: `calc(50% + ${heightPct}%)` }}
                    ></div>
                  )}
                </div>
              )
            })}
          </div>
          <div className={`mt-4 font-mono text-[10px] sm:text-xs text-emerald-400 bg-black/50 px-4 py-3 rounded-xl w-full text-center overflow-x-auto whitespace-nowrap transition-all duration-500 ${showSignal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
            [{dataPoints.join(', ')}]
          </div>
        </div>
      </div>
    </div>
  );
};

const StatsVisualizer = () => {
  const [dataset, setDataset] = useState<'A' | 'B'>('A');
  
  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl mt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-sky-100 text-sky-600 rounded-xl">
          <BarChart size={24} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Veri Bilimcisi Gibi Okumak: Ortalama ve Standart Sapma</h3>
      </div>
      
      <p className="text-slate-600 mb-8 leading-relaxed">
        Bir veri bilimci sayılara tek tek bakmaz, onlara "kuş bakışı" bakar. İki sınıfın sınav notlarını incelediğimizi düşünelim. İki sınıfın da <strong>Ortalaması 50</strong>. Peki bu sınıflar aynı mı?
      </p>

      <div className="flex gap-4 mb-12">
        <button 
          onClick={() => setDataset('A')}
          className={`flex-1 py-4 rounded-xl font-bold transition-all ${dataset === 'A' ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/30 scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Sınıf A (Düzenli)
        </button>
        <button 
          onClick={() => setDataset('B')}
          className={`flex-1 py-4 rounded-xl font-bold transition-all ${dataset === 'B' ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
        >
          Sınıf B (Uçlarda)
        </button>
      </div>

      <div className="relative h-40 bg-slate-50 rounded-2xl border border-slate-200 flex items-end pb-8 px-8 mb-8">
        {/* Number line */}
        <div className="absolute bottom-8 left-8 right-8 h-1.5 bg-slate-300 rounded-full"></div>
        
        {/* Mean marker */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="h-40 w-0.5 bg-slate-400 border-l-2 border-dashed border-slate-400"></div>
          <span className="text-sm font-bold text-slate-600 mt-2 bg-white px-3 py-1 rounded-full shadow-sm border border-slate-200">Ortalama: 50</span>
        </div>

        {/* Dots */}
        {dataset === 'A' ? (
          <>
            <div className="absolute bottom-10 left-[40%] w-6 h-6 bg-sky-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-[45%] w-6 h-6 bg-sky-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-[50%] w-6 h-6 bg-sky-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-20 left-[50%] w-6 h-6 bg-sky-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-[55%] w-6 h-6 bg-sky-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-[60%] w-6 h-6 bg-sky-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
          </>
        ) : (
          <>
            <div className="absolute bottom-10 left-[10%] w-6 h-6 bg-rose-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-[20%] w-6 h-6 bg-rose-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-[30%] w-6 h-6 bg-rose-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-[70%] w-6 h-6 bg-rose-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-[80%] w-6 h-6 bg-rose-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
            <div className="absolute bottom-10 left-[90%] w-6 h-6 bg-rose-500 rounded-full shadow-md -translate-x-1/2 transition-all duration-500"></div>
          </>
        )}
      </div>

      <div className={`p-6 rounded-2xl border transition-colors duration-500 ${dataset === 'A' ? 'bg-sky-50 border-sky-100' : 'bg-rose-50 border-rose-100'}`}>
        <h4 className={`text-lg font-bold mb-2 ${dataset === 'A' ? 'text-sky-900' : 'text-rose-900'}`}>Standart Sapma Ne Anlatır?</h4>
        <p className={`leading-relaxed ${dataset === 'A' ? 'text-sky-800' : 'text-rose-800'}`}>
          {dataset === 'A' 
            ? 'Sınıf A\'da herkesin notu 50 civarında. Standart sapma DÜŞÜK. Veri bilimci buna bakıp "Bu sınıf homojen, herkes konuyu orta düzeyde anlamış" der.' 
            : 'Sınıf B\'de notlar 10 ile 90 arasında dağılmış. Standart sapma YÜKSEK. Veri bilimci buna bakıp "Ortalama 50 ama bu sınıf çok kutuplaşmış, yarısı dahi, yarısı hiçbir şey anlamamış!" der.'}
        </p>
      </div>
    </div>
  );
};

const WordVectorInteractive = () => {
  return (
    <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl mt-8 text-white">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl">
          <Calculator size={24} />
        </div>
        <h3 className="text-2xl font-bold">Kelimeleri Nasıl Matematikleştiririz? (Word Embeddings)</h3>
      </div>
      <p className="text-slate-400 mb-8 leading-relaxed">
        Yapay zeka kelimeleri anlamaz, onlara farklı özelliklere göre <strong>puanlar</strong> verir. Mesela kelimeleri 3 özelliğe göre puanlayalım: Cinsiyet (Erkek=1, Kadın=-1), Asalet (Sıradan=0, Asil=1) ve Yaş (Genç=0, Yaşlı=1). Bu puanlar yan yana gelince kelimenin <strong>dizisi (array/vektör)</strong> oluşur.
      </p>
      
      <div className="overflow-x-auto mb-8">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-slate-500 uppercase bg-slate-800/50">
            <tr>
              <th className="px-4 py-3 rounded-tl-lg">Kelime</th>
              <th className="px-4 py-3">Cinsiyet</th>
              <th className="px-4 py-3">Asalet</th>
              <th className="px-4 py-3">Yaş</th>
              <th className="px-4 py-3 rounded-tr-lg">Vektör (Dizi)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            <tr className="bg-slate-800/20">
              <td className="px-4 py-3 font-bold text-indigo-400">Kral</td>
              <td className="px-4 py-3 font-mono">1.0</td>
              <td className="px-4 py-3 font-mono">1.0</td>
              <td className="px-4 py-3 font-mono">1.0</td>
              <td className="px-4 py-3 font-mono text-emerald-400">[1.0, 1.0, 1.0]</td>
            </tr>
            <tr className="bg-slate-800/20">
              <td className="px-4 py-3 font-bold text-sky-400">Erkek</td>
              <td className="px-4 py-3 font-mono">1.0</td>
              <td className="px-4 py-3 font-mono">0.0</td>
              <td className="px-4 py-3 font-mono">0.0</td>
              <td className="px-4 py-3 font-mono text-emerald-400">[1.0, 0.0, 0.0]</td>
            </tr>
            <tr className="bg-slate-800/20">
              <td className="px-4 py-3 font-bold text-rose-400">Kadın</td>
              <td className="px-4 py-3 font-mono">-1.0</td>
              <td className="px-4 py-3 font-mono">0.0</td>
              <td className="px-4 py-3 font-mono">0.0</td>
              <td className="px-4 py-3 font-mono text-emerald-400">[-1.0, 0.0, 0.0]</td>
            </tr>
            <tr className="bg-slate-800/50 border-t-2 border-slate-700">
              <td className="px-4 py-3 font-bold text-amber-400">Kraliçe</td>
              <td className="px-4 py-3 font-mono">-1.0</td>
              <td className="px-4 py-3 font-mono">1.0</td>
              <td className="px-4 py-3 font-mono">1.0</td>
              <td className="px-4 py-3 font-mono text-emerald-400">[-1.0, 1.0, 1.0]</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-black/40 p-6 rounded-2xl border border-slate-700">
        <h4 className="text-emerald-400 font-bold mb-4 flex items-center gap-2"><Sparkles size={18}/> İşin Sihirli Kısmı: Kelimelerle Matematik!</h4>
        <p className="text-slate-300 mb-4 text-sm">Eğer kelimeler sayı dizisiyse, onlarla toplama çıkarma yapabiliriz!</p>
        <div className="flex flex-wrap items-center gap-3 font-mono text-sm sm:text-base bg-slate-900 p-4 rounded-xl">
          <span className="text-indigo-400 font-bold">Kral</span>
          <span className="text-slate-500">-</span>
          <span className="text-sky-400 font-bold">Erkek</span>
          <span className="text-slate-500">+</span>
          <span className="text-rose-400 font-bold">Kadın</span>
          <span className="text-slate-500">=</span>
          <span className="text-amber-400 font-bold">Kraliçe</span>
        </div>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs sm:text-sm mt-3 text-slate-400">
          <span>[1, 1, 1]</span>
          <span>-</span>
          <span>[1, 0, 0]</span>
          <span>+</span>
          <span>[-1, 0, 0]</span>
          <span>=</span>
          <span className="text-emerald-400 font-bold">[-1, 1, 1]</span>
        </div>
      </div>
    </div>
  );
};

const ClassImbalanceInteractive = () => {
  const [aiGuessed, setAiGuessed] = useState(false);

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl mt-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
          <Scale size={24} />
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Veri Dengesi Neden Önemlidir? (Class Imbalance)</h3>
      </div>
      
      <p className="text-slate-600 mb-8 leading-relaxed">
        Bir hastanede <strong>95 sağlıklı</strong> ve sadece <strong>5 kanser hastası</strong> olduğunu düşünün. Yapay zekaya bu veriyi verirseniz, zekice bir hile bulur: <em>"Hiç düşünmeden herkese 'Sağlıklı' dersem, %95 başarılı olurum!"</em>
      </p>

      <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
        <div className="flex flex-wrap gap-1 mb-6">
          {Array.from({length: 95}).map((_, i) => (
            <div key={`h-${i}`} className={`w-3 h-3 rounded-full ${aiGuessed ? 'bg-emerald-400' : 'bg-emerald-200'} transition-colors duration-500`} title="Sağlıklı"></div>
          ))}
          {Array.from({length: 5}).map((_, i) => (
            <div key={`s-${i}`} className={`w-3 h-3 rounded-full ${aiGuessed ? 'bg-emerald-400' : 'bg-rose-500'} transition-colors duration-500`} title="Hasta"></div>
          ))}
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <button 
            onClick={() => setAiGuessed(!aiGuessed)}
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors w-full sm:w-auto"
          >
            {aiGuessed ? 'Gerçek Veriyi Gör' : 'Yapay Zekanın Tahminini Gör'}
          </button>
          
          {aiGuessed && (
            <div className="text-right">
              <div className="text-2xl font-black text-emerald-600">%95 Başarı!</div>
              <div className="text-sm font-bold text-rose-600 mt-1">Ama 5 hastayı da kaçırdı! 🚨</div>
            </div>
          )}
        </div>
      </div>

      <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl text-amber-800 text-sm font-medium">
        <strong>Ders:</strong> Veri setinizdeki sınıflar (Sağlıklı vs Hasta, Kedi vs Köpek) eşit dağılmazsa, modeliniz tembelleşir ve her zaman çoğunluğu seçer. Buna <strong>Sınıf Dengesizliği (Class Imbalance)</strong> denir.
      </div>
    </div>
  );
};

export default function Chapter1() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-200 selection:text-indigo-900 overflow-x-hidden">
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900 text-white px-6 py-20">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-indigo-500 via-slate-900 to-slate-900"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 font-medium text-sm mb-4"
          >
            <Sparkles size={16} />
            <span>Bölüm 1</span>
          </motion.div>
          
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400"
          >
            Verinin Dünyası
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Yapay zeka sihirli bir küre değildir. O, sadece çok fazla örneğe bakarak kuralları öğrenen inanılmaz çalışkan bir öğrencidir. Peki bu öğrenci neyle beslenir?
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="pt-12 animate-bounce text-indigo-400/50 flex flex-col items-center gap-2"
          >
            <span className="text-sm font-medium uppercase tracking-widest">Aşağı Kaydır</span>
            <div className="w-0.5 h-12 bg-gradient-to-b from-indigo-400/50 to-transparent"></div>
          </motion.div>
        </div>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-24 space-y-40">

        {/* Veri: Yeni Dünyanın Petrolü */}
        <section className="space-y-8">
          <FadeIn>
            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10"><Droplet size={150} /></div>
              <div className="relative z-10 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-300 text-xs font-bold mb-6">
                  <Zap size={14} /> İLGİNÇ BİLGİ
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Veri: Yeni Dünyanın Petrolü</h2>
                <p className="text-lg text-indigo-100 leading-relaxed mb-6">
                  Günümüzde veri, petrol kadar değerlidir. Ancak tıpkı petrol gibi, <strong>işlenmemiş (ham) veri tek başına bir işe yaramaz.</strong> Petrolü çıkarıp rafine ederek arabaları çalıştıran yakıta dönüştürdüğümüz gibi, ham veriyi de temizleyip düzenleyerek yapay zekayı çalıştıran "bilgiye" dönüştürmeliyiz.
                </p>
                <div className="bg-black/30 rounded-2xl p-6 border border-indigo-500/30">
                  <p className="text-indigo-200 font-medium flex items-start gap-3">
                    <span className="text-2xl">🤯</span>
                    <span>Biliyor muydunuz? İnsanlık olarak her gün <strong>2.5 kentilyon bayt</strong> veri üretiyoruz! Bu, dünyadaki tüm kumsallardaki kum tanelerinden bile daha fazla bir miktar. Yapay zekanın bu kadar hızlı gelişmesinin sebebi, işte bu devasa veri okyanusudur.</span>
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* 1. Veri Nedir? */}
        <section className="space-y-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">1. Makinenin Besin Kaynağı: Veri</h2>
              <p className="text-lg text-slate-600">
                Yapay zekanın öğrenmek için kullandığı her şeye <strong>"veri"</strong> diyoruz. Ama veri her zaman aynı şekilde gelmez. Bazen çok düzenlidir, bazen ise odanız kadar dağınık!
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 h-full transform transition-transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl">
                    <Table size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Yapılandırılmış Veri</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Okulunuzdaki not çizelgesi gibidir. Her şeyin yeri bellidir. İsimler bir sütunda, notlar diğer sütunda. Makine bunu çok sever, hemen anlar.
                </p>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <table className="w-full text-sm text-left text-slate-600">
                    <thead className="text-xs text-slate-400 uppercase bg-slate-100">
                      <tr>
                        <th className="px-4 py-2 rounded-tl-lg">İsim</th>
                        <th className="px-4 py-2">Yaş</th>
                        <th className="px-4 py-2 rounded-tr-lg">Not</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-slate-50">
                        <td className="px-4 py-2 font-medium text-slate-900">Ayşe</td>
                        <td className="px-4 py-2">15</td>
                        <td className="px-4 py-2">85</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="px-4 py-2 font-medium text-slate-900 rounded-bl-lg">Ali</td>
                        <td className="px-4 py-2">16</td>
                        <td className="px-4 py-2 rounded-br-lg">92</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl shadow-slate-200/50 h-full transform transition-transform hover:-translate-y-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-rose-100 text-rose-600 rounded-2xl">
                    <Database size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Yapılandırılmamış Veri</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Odanızın dağınık hali gibidir. Yerdeki fotoğraflar, masadaki ses kayıt cihazı, defterinize karaladığınız yazılar... Makine bunları anlamak için önce düzenlemeye ihtiyaç duyar.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-slate-100 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer">
                    <ImageIcon size={28} />
                    <span className="text-xs font-medium">Görüntü</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-slate-100 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer">
                    <Mic size={28} />
                    <span className="text-xs font-medium">Ses</span>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.1, rotate: -5 }} className="bg-slate-50 rounded-xl p-4 flex flex-col items-center justify-center gap-2 border border-slate-100 text-slate-400 hover:text-rose-500 transition-colors cursor-pointer">
                    <FileText size={28} />
                    <span className="text-xs font-medium">Metin</span>
                  </motion.div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Sayısallaştırma ve Gürültü */}
        <section className="space-y-16">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">Gerçek Dünya Nasıl Sayılara Dönüşür?</h2>
              <p className="text-lg text-slate-600">
                Bilgisayarlar ışığı göremez veya sesi duyamaz. Onlar sadece <strong>0 ve 1'leri</strong> anlar. Bu yüzden gerçek dünyadaki her şeyi sayısallaştırmamız (digitize) gerekir.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Görüntü Sayısallaştırma */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl h-full group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-sky-100 text-sky-600 rounded-2xl">
                    <Grid size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Görüntüyü Sayısallaştırmak</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Bir fotoğrafı çok yakından incelerseniz, <strong>piksel</strong> adı verilen minik karelerden oluştuğunu görürsünüz. Her piksel, rengini belirleyen sayılardan (Kırmızı, Yeşil, Mavi) ibarettir.
                </p>
                <div className="aspect-video bg-slate-100 rounded-2xl overflow-hidden relative cursor-crosshair">
                  <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800" alt="Retro" className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:blur-sm" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 flex items-center justify-center p-4">
                    <div className="grid grid-cols-4 gap-1 w-full h-full">
                      {Array.from({length: 16}).map((_, i) => (
                        <div key={i} className="border border-white/20 flex items-center justify-center text-white/80 font-mono text-xs">
                          [{Math.floor(Math.random()*255)}, {Math.floor(Math.random()*255)}, {Math.floor(Math.random()*255)}]
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 text-white text-xs px-3 py-1.5 rounded-full">
                    Fareyle üzerine gel
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Ses Sayısallaştırma */}
            <FadeIn delay={0.4}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl h-full group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-4 bg-indigo-100 text-indigo-600 rounded-2xl">
                    <Activity size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Sesi Sayısallaştırmak</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Ses, havada yayılan sürekli bir dalgadır. Bilgisayar bu dalgayı saniyede binlerce kez ölçerek (örnekleme/sampling) sayılara dönüştürür. CD kalitesinde bir ses saniyede 44.100 kez ölçülür!
                </p>
                <div className="aspect-video bg-slate-900 rounded-2xl overflow-hidden relative flex items-center justify-center p-4">
                  <div className="w-full h-0.5 bg-indigo-500/30 relative">
                    <motion.div 
                      className="absolute top-1/2 left-0 w-full h-24 -translate-y-1/2 flex items-center justify-between px-2"
                    >
                      {Array.from({length: 20}).map((_, i) => (
                        <motion.div 
                          key={i}
                          animate={{ height: ['10%', `${Math.random() * 80 + 20}%`, '10%'] }}
                          transition={{ repeat: Infinity, duration: Math.random() * 1 + 0.5 }}
                          className="w-1.5 bg-indigo-500 rounded-full group-hover:bg-emerald-400 transition-colors"
                        />
                      ))}
                    </motion.div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between px-2 -translate-y-1/2 h-24 z-10">
                      {Array.from({length: 20}).map((_, i) => (
                        <div key={i} className="text-[8px] text-emerald-300 font-mono -rotate-90 origin-left translate-y-12">
                          {Math.random().toFixed(2)}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur text-white text-xs px-3 py-1.5 rounded-full">
                    Fareyle üzerine gel
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Gürültü (Noise) */}
          <FadeIn delay={0.6}>
            <div className="bg-rose-50 rounded-3xl p-8 md:p-12 border border-rose-100 shadow-xl">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-200 text-rose-800 text-xs font-bold">
                    <VolumeX size={14} /> DİKKAT: GÜRÜLTÜ TEHLİKESİ
                  </div>
                  <h3 className="text-3xl font-bold text-rose-900">Gürültü (Noise) Veriyi Nasıl Bozar?</h3>
                  <p className="text-rose-800 leading-relaxed">
                    Arkadaşınızla çok gürültülü bir konserde konuşmaya çalıştığınızı hayal edin. Onu duymak çok zordur, değil mi? Yapay zeka için de durum aynıdır.
                  </p>
                  <p className="text-rose-800 leading-relaxed">
                    Veri biliminde <strong>"Gürültü" (Noise)</strong>, asıl bilgiyi saklayan işe yaramaz fazlalıklardır. Bulanık bir fotoğraf, cızırtılı bir ses kaydı veya yanlış yazılmış kelimeler birer gürültüdür. Yapay zekaya veriyi vermeden önce bu gürültüyü temizlememiz (filtrelememiz) gerekir.
                  </p>
                </div>
                <div className="md:w-1/2 w-full">
                  <NoiseInteractive />
                </div>
              </div>
            </div>
          </FadeIn>

          {/* NEW: Pixel Simulator Deep Dive */}
          <FadeIn delay={0.8}>
            <PixelSimulator />
          </FadeIn>

          <FadeIn delay={1.0}>
            <MatrixInteractive />
          </FadeIn>

          <FadeIn delay={1.2}>
            <SignalInteractive />
          </FadeIn>
        </section>

        {/* NEW DEEP DIVE: Makinenin Gözünden Yapılandırılmamış Veri */}
        <section className="space-y-16">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">Peki Makine Bunları Nasıl Anlıyor?</h2>
              <p className="text-lg text-slate-600">
                Bilgisayarların gözü, kulağı veya beyni yoktur. Onlar sadece <strong>sayıları</strong> anlar. Yapılandırılmamış veriyi (fotoğraf, ses, metin) bilgisayarın anlayacağı sayılara çevirmemiz gerekir. Gelin bunun nasıl çalıştığına yakından bakalım.
              </p>
            </div>
          </FadeIn>

          {/* Example 1: MRI Image */}
          <FadeIn delay={0.2}>
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col md:flex-row">
              <div className="md:w-1/2 relative group bg-black">
                <img 
                  src={`${import.meta.env.BASE_URL}tumor-mri.png`} 
                  alt="MRI Scan" 
                  className="w-full h-full object-contain bg-black opacity-80 group-hover:opacity-30 transition-opacity duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="grid grid-cols-5 gap-1 p-4 bg-black/80 rounded-xl border border-emerald-500/30">
                    {Array.from({length: 25}).map((_, i) => (
                      <div key={i} className={`w-8 h-8 flex items-center justify-center text-[10px] font-mono rounded ${i === 12 || i === 13 ? 'bg-rose-500/20 text-rose-400 font-bold border border-rose-500/50' : 'text-emerald-400/70'}`}>
                        {i === 12 ? '255' : i === 13 ? '240' : Math.floor(Math.random() * 50 + 10)}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-2">
                  <Scan size={14} className="text-emerald-400" />
                  <span>Fareyle üzerine gel</span>
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold mb-4 w-fit">
                  <ImageIcon size={14} /> GÖRÜNTÜ İŞLEME
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Bir MR Görüntüsünde Hastalığı Bulmak</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Yapay zeka bir beyin MR'ına baktığında gri tonları görmez; <strong>0 (siyah) ile 255 (beyaz)</strong> arasındaki sayıları görür.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Görselde solda sağlıklı bir beyin, sağda ise <strong>sarı okla işaretlenmiş tümörlü bir beyin</strong> görüyorsunuz. Tümörlü doku, etrafındaki sağlıklı dokudan farklı bir parlaklığa sahiptir (örneğin aniden 255 değerine fırlayan pikseller). Yapay zeka binlerce hastalıklı ve sağlıklı MR'ı inceleyerek bu <strong>"sayısal anormalliği"</strong> ezberler ve yeni bir hastada aynı sayısal örüntüyü gördüğünde alarm verir.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Example 2: Audio Scream */}
          <FadeIn delay={0.3}>
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col md:flex-row-reverse">
              <div className="md:w-1/2 bg-slate-900 p-8 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1516280440502-a29883109318?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="flex items-end justify-center h-48 gap-1.5 z-10 w-full">
                  {mounted && Array.from({length: 30}).map((_, i) => {
                    const isScream = i === 15 || i === 16;
                    return (
                      <motion.div 
                        key={i}
                        animate={{ 
                          height: isScream ? ['20%', '100%', '20%'] : ['10%', `${Math.random() * 40 + 10}%`, '10%'] 
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: isScream ? 0.4 : Math.random() * 1 + 0.5,
                          ease: "easeInOut"
                        }}
                        className={`w-full max-w-[12px] rounded-t-sm ${isScream ? 'bg-rose-500 shadow-[0_0_20px_rgba(244,63,94,0.8)]' : 'bg-indigo-500/50'}`}
                      />
                    );
                  })}
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-bold mb-4 w-fit">
                  <Waves size={14} /> SES İŞLEME
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Gürültüde Bir Çığlığı Ayırt Etmek</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Kalabalık bir caddedeki uğultu ile bir insanın yardım çığlığı bilgisayar için sadece ses dalgalarıdır. Yapay zeka bu dalgaları <strong>Spektrogram</strong> adı verilen bir "ses fotoğrafına" dönüştürür.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Uğultu düşük frekanslı, kalın ve yayvan dalgalar (sayılar) üretirken; bir çığlık aniden çok yüksek frekanslı, ince ve keskin bir tepe noktası (kırmızı çubuk) oluşturur. Bilgisayar bu ani sayısal sıçramayı anında tespit eder.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Example 3: Text Contradiction */}
          <FadeIn delay={0.4}>
            <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col md:flex-row">
              <div className="md:w-1/2 bg-slate-50 p-8 flex flex-col justify-center gap-6 relative">
                <div className="absolute top-0 right-0 p-8 opacity-5"><Binary size={150} /></div>
                
                <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 relative z-10">
                  <p className="text-slate-700 font-medium">"Ben hayvanları <span className="text-emerald-500 font-bold bg-emerald-50 px-1 rounded">çok severim</span>."</p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-50 p-2 rounded-lg">
                    <span className="text-emerald-500">Vektör:</span> [0.85, 0.92, -0.12, 0.44]
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 relative z-10">
                  <p className="text-slate-700 font-medium">"Dün sokaktaki köpeğe <span className="text-rose-500 font-bold bg-rose-50 px-1 rounded">tekme attım</span>."</p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-50 p-2 rounded-lg">
                    <span className="text-rose-500">Vektör:</span> [-0.88, -0.95, 0.82, -0.51]
                  </div>
                </motion.div>

                <div className="flex items-center justify-center gap-2 text-sm font-bold text-rose-600 bg-rose-100 py-2 px-4 rounded-full w-fit mx-auto relative z-10">
                  <AlertTriangle size={16} /> Çelişki Tespit Edildi! (Zıt Yönlü Vektörler)
                </div>
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-xs font-bold mb-4 w-fit">
                  <FileText size={14} /> DOĞAL DİL İŞLEME (NLP)
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Bir Metindeki Yalanı/Çelişkiyi Yakalamak</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Yapay zeka kelimelerin anlamını bilmez. Bunun yerine her kelimeyi ve cümleyi yüzlerce sayıdan oluşan bir koordinata (<strong>Vektör / Embedding</strong>) çevirir.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  "Sevmek" ve "Şefkat" gibi kelimeler uzayda birbirine çok yakın pozitif sayılardır. "Tekme atmak" veya "Nefret" ise tam tersi yönde negatif sayılardır. Yapay zeka bir metni okurken bu sayıları toplar; eğer aynı kişinin metninde birbirine matematiksel olarak tamamen zıt iki vektör bulursa, <strong>"Burada bir çelişki var"</strong> der.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <WordVectorInteractive />
          </FadeIn>

          <FadeIn delay={0.8}>
            <VibeCodingBox 
              title="Vibe Coding: Yapılandırılmamış Veriyi İşlemek"
              prompt="Bana bir ses dosyasını (WAV) okuyup, bunu bir spektrograma (sesin fotoğrafına) çeviren ve yüksek frekanslı sesleri (örneğin bir çığlığı) kırmızıyla işaretleyen bir Python kodu yazar mısın? Kütüphane olarak 'librosa' ve 'matplotlib' kullanabilirsin."
            />
          </FadeIn>
        </section>

        {/* 2. Etiketleme ve Önyargı */}
        <section className="space-y-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">2. Öğretmen Sensin: Etiketleme</h2>
              <p className="text-lg text-slate-600">
                Makineye veriyi verdik, peki ne arayacağını nasıl bilecek? Ona "Bu bir kedidir" veya "Bu bir tümördür" demeniz gerekir. İşte bu işleme <strong>"etiketleme" (labeling)</strong> diyoruz.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <FadeIn delay={0.2}>
              <div className="relative aspect-video bg-slate-100 rounded-3xl overflow-hidden border border-slate-200 shadow-2xl group">
                <img 
                  src="https://picsum.photos/seed/cat/800/600" 
                  alt="Kedi Örneği" 
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    initial={{ width: 0, height: 0, opacity: 0 }}
                    whileInView={{ width: 192, height: 192, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="border-4 border-emerald-500 bg-emerald-500/10 rounded-lg relative"
                  >
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                      className="absolute -top-8 left-[-4px] bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-t-lg rounded-br-lg shadow-sm flex items-center gap-1.5"
                    >
                      <MousePointerSquareDashed size={14} />
                      Kedi (Cat)
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
                    <BrainCircuit className="text-indigo-500" />
                    Sınırlayıcı Kutu (Bounding Box)
                  </h3>
                  <p className="text-slate-600">
                    Küçük bir çocuğa dünyayı öğretmek gibidir. Etrafını çizerek "İşte kedi tam burada" demelisiniz. Makine, çizdiğiniz bu kutunun içindeki pikselleri (sayıları) "kedi" olarak öğrenir.
                  </p>
                </div>

                <div className="bg-amber-50 rounded-3xl p-8 border border-amber-200 shadow-lg">
                  <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-3">
                    <AlertTriangle className="text-amber-500" />
                    Veri Önyargısı (Bias)
                  </h3>
                  <p className="text-amber-800 mb-4">
                    Eğer çocuğa sadece <strong>beyaz kedileri</strong> gösterip "kedi" derseniz, siyah bir kedi gördüğünde onu tanıyamaz. Yapay zeka da böyledir!
                  </p>
                  <ul className="space-y-2 text-sm text-amber-700">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> <strong>Temsil Eksikliği:</strong> Hep aynı tip veri kullanmak.</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> <strong>Etiketleyici Yorgunluğu:</strong> İnsanların yorulup yanlış etiketlemesi.</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <VibeCodingBox 
              title="Vibe Coding: Otomatik Etiketleme Aracı"
              prompt="Elimdeki bir fotoğrafın üzerine Python ve OpenCV (cv2) kullanarak kırmızı bir dikdörtgen (bounding box) çizen ve üstüne 'Kedi' yazan basit bir kod yazar mısın? Görüntüyü ekranda görebilmem için matplotlib kullan."
            />
          </FadeIn>
        </section>

        {/* 3. Veri Avcılığı ve Etik */}
        <section className="space-y-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">3. Veri Avcılığı ve Etik</h2>
              <p className="text-lg text-slate-600">
                Veri toplamak, bir pasta yapmak için malzeme toplamaya benzer. Peki malzemeleri nereden alacağız? Başkasının bahçesinden izinsiz elma koparmak hırsızlıktır!
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl relative overflow-hidden h-full">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-4 bg-emerald-100 text-emerald-600 rounded-2xl">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Halka Açık Parklar (Açık Veri)</h3>
                </div>
                <p className="text-slate-600 mb-6 relative z-10">
                  Markete gidip parasını ödeyerek (veya ücretsiz reyonundan) malzeme almak gibidir. Her şey yasaldır. Kaggle, Hugging Face gibi platformlar bu iş içindir.
                </p>
                <div className="flex gap-4">
                  <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center font-bold text-slate-700">Kaggle</div>
                  <div className="flex-1 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center font-bold text-slate-700">Hugging Face</div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 shadow-xl relative overflow-hidden h-full text-white">
                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="p-4 bg-rose-500/20 text-rose-400 rounded-2xl">
                    <ShieldAlert size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Özel Bahçeler (Web Scraping)</h3>
                </div>
                <p className="text-slate-300 mb-6 relative z-10">
                  Bir siteyi kazımadan (scraping) önce izin almalı ve kurallara uymalısınız. Sitelerin kapısında duran güvenlik görevlisi <code>robots.txt</code> dosyasıdır.
                </p>
                <div className="bg-black/50 rounded-xl p-4 border border-slate-700 font-mono text-sm">
                  <span className="text-emerald-400">User-agent:</span> *<br/>
                  <span className="text-rose-400">Disallow:</span> /private-data/<br/>
                  <span className="text-sky-400">Allow:</span> /public-data/
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <VibeCodingBox 
              title="Vibe Coding: Etik Veri Toplama"
              prompt="Python kullanarak Kaggle'dan açık kaynaklı bir veri setini indirmek için gereken kodu yazar mısın? Ayrıca, bir web sitesinden veri çekerken 'robots.txt' dosyasına saygı duyan ve sadece izin verilen sayfaları okuyan basit bir BeautifulSoup örneği ekle."
            />
          </FadeIn>

          {/* NEW: Data Detective (EDA) */}
          <FadeIn delay={0.8}>
            <DataDetective />
          </FadeIn>

          <FadeIn delay={1.0}>
            <StatsVisualizer />
          </FadeIn>

          <FadeIn delay={1.2}>
            <ClassImbalanceInteractive />
          </FadeIn>
        </section>

        {/* 4. Sınava Hazırlık */}
        <section className="space-y-12">
          <FadeIn>
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h2 className="text-4xl font-bold text-slate-900">4. Büyük Sınav: Model Ne Kadar Zeki?</h2>
              <p className="text-lg text-slate-600">
                Modelimizi eğittikten sonra ne kadar başarılı olduğunu test etmeliyiz. Bunun için elimizdeki veriyi üçe böleriz. Tıpkı bir öğrencinin sınava hazırlanması gibi!
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn delay={0.2}>
              <div className="space-y-6">
                <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex gap-4 items-start">
                  <div className="p-3 bg-indigo-100 text-indigo-600 rounded-xl shrink-0">
                    <BookOpen size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">1. Eğitim Verisi (%70)</h4>
                    <p className="text-slate-600 text-sm">Öğretmenin derste çözdüğü örnek sorulardır. Model bu veriye bakarak kuralları öğrenir.</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex gap-4 items-start">
                  <div className="p-3 bg-sky-100 text-sky-600 rounded-xl shrink-0">
                    <Edit3 size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">2. Doğrulama Verisi (%15)</h4>
                    <p className="text-slate-600 text-sm">Evde çözdüğünüz deneme sınavıdır. Eksiklerinizi görüp çalışma yönteminizi değiştirirsiniz.</p>
                  </div>
                </motion.div>

                <motion.div whileHover={{ scale: 1.02 }} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex gap-4 items-start">
                  <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl shrink-0">
                    <GraduationCap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">3. Test Verisi (%15)</h4>
                    <p className="text-slate-600 text-sm">Gerçek sınavdır! Soruları daha önce hiç görmemiş olmanız gerekir. Burada alınan not, modelin gerçek dünyadaki başarısıdır.</p>
                  </div>
                </motion.div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-6">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl h-72 flex flex-col items-center justify-center relative">
                  <h3 className="absolute top-6 left-6 text-lg font-bold text-slate-900">Veri Bölme Oranları</h3>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={splitData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={90}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {splitData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip 
                        contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                        itemStyle={{ fontWeight: 'bold' }}
                      />
                      <Legend verticalAlign="bottom" height={36} iconType="circle" />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <motion.div 
                  initial={{ rotate: -2 }}
                  whileHover={{ rotate: 0 }}
                  className="bg-rose-500 rounded-2xl p-6 text-white shadow-lg shadow-rose-500/30 flex gap-4 items-start flex-col sm:flex-row"
                >
                  <div className="p-3 bg-white/20 rounded-xl shrink-0">
                    <AlertOctagon size={24} />
                  </div>
                  <div className="w-full">
                    <h4 className="text-lg font-bold mb-2">Veri Sızıntısı (Data Leakage)</h4>
                    <p className="text-rose-100 text-sm leading-relaxed mb-4">
                      Öğretmenin gerçek sınav sorularını yanlışlıkla çalışma kağıdına koymasıdır. Sınavdan 100 alırsınız ama aslında konuyu öğrenmemiş, sadece soruları ezberlemişsinizdir! Test verisi <strong>asla</strong> eğitim aşamasında görülmemelidir.
                    </p>
                    
                    <div className="bg-rose-900/40 p-4 rounded-xl border border-rose-400/30">
                      <h5 className="font-bold text-rose-50 mb-2 flex items-center gap-2">
                        <Scan size={16} /> Güncel Bir Örnek: COVID-19 Skandalı
                      </h5>
                      <p className="text-rose-200 text-xs leading-relaxed">
                        Pandemi döneminde araştırmacılar, akciğer röntgenlerinden COVID-19'u tespit eden bir yapay zeka eğittiler. Model %99 başarılıydı! Ancak sonradan anlaşıldı ki; hasta olanların röntgenleri yatarak çekilmişti ve o makine fotoğrafa "L" harfi (sol tarafı belirtmek için) koyuyordu. Sağlıklı olanlar ise ayakta çekilmişti. Yapay zeka hastalığı öğrenmemiş, sadece fotoğraftaki <strong>"L" harfini ezberlemişti!</strong> İşte eğitim verisine test sonucunu belli edecek bir ipucunun sızmasına Veri Sızıntısı denir.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <VibeCodingBox 
              title="Vibe Coding: Veriyi Bölmek"
              prompt="Elimdeki bir veri setini Scikit-Learn (sklearn.model_selection.train_test_split) kullanarak %70 eğitim, %15 doğrulama ve %15 test olarak bölen bir Python kodu yaz. Veri sızıntısını (data leakage) önlemek için veriyi bölmeden önce rastgele karıştırmasını (shuffle) sağla."
            />
          </FadeIn>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <p className="flex items-center justify-center gap-2">
          <Sparkles size={16} className="text-indigo-400" />
          Bölüm 1 Sonu. Harika iş çıkardın!
        </p>
      </footer>
    </div>
  );
}
