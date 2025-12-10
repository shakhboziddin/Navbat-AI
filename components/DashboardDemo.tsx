
import React, { useState } from 'react';
import { ContentData, CRMPatient } from '../types';
import { 
  Users, Activity, Calendar, Clock, Search, Bell, 
  ChevronRight, PlayCircle, CheckCircle, CheckCircle2, XCircle, Shield, Stethoscope, 
  MoreHorizontal, DollarSign, TrendingUp, TrendingDown, Wallet, ArrowRight
} from 'lucide-react';

interface DashboardDemoProps {
  content: ContentData['crmDemo'];
}

// --- Helper Components ---

const BarChart = ({ data }: { data: { label: string; income: number; expense: number }[] }) => {
  const max = Math.max(...data.map(d => Math.max(d.income, d.expense))) * 1.1;

  return (
    <div className="w-full h-full flex items-end justify-between gap-3 px-2 pb-6 select-none">
      {data.map((d, i) => (
        <div key={i} className="flex-1 flex gap-1 items-end justify-center h-full group relative">
           {/* Income Bar */}
           <div 
             style={{ height: `${(d.income / max) * 100}%` }} 
             className="w-full bg-emerald-500 rounded-t-sm transition-all duration-500 relative hover:bg-emerald-400"
           >
             <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
               +{d.income.toLocaleString()}
             </div>
           </div>
           
           {/* Expense Bar */}
           <div 
             style={{ height: `${(d.expense / max) * 100}%` }} 
             className="w-full bg-rose-500 rounded-t-sm transition-all duration-500 relative hover:bg-rose-400"
           >
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10 pointer-events-none">
               -{d.expense.toLocaleString()}
             </div>
           </div>

           {/* X Axis Label */}
           <div className="absolute -bottom-6 text-[10px] text-slate-400 font-medium">{d.label}</div>
        </div>
      ))}
      {/* Background grid lines could go here */}
    </div>
  )
}

const DonutChart = ({ data }: { data: { name: string; value: number; color: string }[] }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulativePercent = 0;

    return (
        <div className="relative w-40 h-40 mx-auto">
            <svg viewBox="0 0 42 42" className="transform -rotate-90 w-full h-full">
                {data.map((item, i) => {
                    const percent = item.value / total;
                    const dashArray = percent * 100;
                    const dashOffset = -cumulativePercent;
                    cumulativePercent += dashArray;
                    
                    return (
                        <circle
                            key={i}
                            cx="21"
                            cy="21"
                            r="15.91549430918954"
                            fill="transparent"
                            stroke={item.color}
                            strokeWidth="6"
                            strokeDasharray={`${dashArray} ${100 - dashArray}`}
                            strokeDashoffset={dashOffset}
                            className="transition-all duration-1000 ease-out hover:stroke-width-8 cursor-pointer"
                        />
                    );
                })}
            </svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                 <span className="text-xl font-bold text-slate-800">{total}%</span>
                 <span className="text-[10px] text-slate-400 uppercase font-semibold">Ulish</span>
            </div>
        </div>
    );
};


const DashboardDemo: React.FC<DashboardDemoProps> = ({ content }) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'patients' | 'queue'>('dashboard');
  const [patients, setPatients] = useState<CRMPatient[]>(content.patients);
  const [currentRole, setCurrentRole] = useState<'admin' | 'doctor'>('admin');

  const updateStatus = (id: string, newStatus: CRMPatient['status']) => {
    setPatients(prev => prev.map(p => p.id === id ? { ...p, status: newStatus } : p));
  };

  // --- Financial Data for Admin ---
  const financialData = [
      { label: 'Yan', income: 45000, expense: 20000 },
      { label: 'Fev', income: 52000, expense: 22000 },
      { label: 'Mar', income: 49000, expense: 25000 },
      { label: 'Apr', income: 60000, expense: 28000 },
      { label: 'May', income: 58000, expense: 24000 },
      { label: 'Iyun', income: 75000, expense: 30000 },
  ];
  
  const revenueSources = [
      { name: 'Konsultatsiya', value: 45, color: '#10b981', tailwindColor: 'bg-emerald-500' },
      { name: 'Diagnostika', value: 30, color: '#3b82f6', tailwindColor: 'bg-blue-500' },
      { name: 'Laboratoriya', value: 25, color: '#f59e0b', tailwindColor: 'bg-amber-500' },
  ];

  // --- Stats Data ---
  const adminStats = [
      { label: "Jami Tushum", value: "750 mln", change: "+15%", isPositive: true, icon: DollarSign },
      { label: "Xarajatlar", value: "320 mln", change: "+5%", isPositive: false, icon: TrendingDown },
      { label: "Sof Foyda", value: "430 mln", change: "+22%", isPositive: true, icon: Wallet },
      { label: "Tashriflar", value: "1,240", change: "+12%", isPositive: true, icon: Users },
  ];

  const doctorStats = [
      { label: "Kutayotganlar", value: "4", change: "Bemor", isPositive: true, icon: Users },
      { label: "Qabul qilindi", value: "12", change: "Bugun", isPositive: true, icon: CheckCircle2 },
      { label: "O'rtacha vaqt", value: "15 daq", change: "Stabil", isPositive: true, icon: Clock },
      { label: "Reyting", value: "4.9", change: "A'lo", isPositive: true, icon: Activity },
  ];

  const currentPatient = patients.find(p => p.status === 'in-progress');
  const nextPatient = patients.find(p => p.status === 'waiting');

  return (
    <section id="crm-demo" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium mb-4">
               <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
               Interaktiv Demo #2
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{content.title}</h2>
            <p className="text-slate-500 text-lg">{content.subtitle}</p>
        </div>

        {/* External Role Switcher */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
            <div className="bg-white p-1.5 rounded-2xl border border-slate-200 shadow-sm inline-flex items-center gap-1">
                <button
                onClick={() => setCurrentRole('admin')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${currentRole === 'admin' ? 'bg-slate-800 text-white shadow-lg shadow-slate-900/20' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                <Shield size={18} />
                Administrator Rejimi
                </button>
                <button
                onClick={() => setCurrentRole('doctor')}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${currentRole === 'doctor' ? 'bg-brand-blue text-white shadow-lg shadow-blue-500/30' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}`}
                >
                <Stethoscope size={18} />
                Shifokor Rejimi
                </button>
            </div>
        </div>

        {/* CRM Interface */}
        <div className="bg-slate-900 rounded-3xl p-2 md:p-4 shadow-2xl overflow-hidden animate-fade-in-up">
            <div className="bg-slate-50 rounded-2xl overflow-hidden flex flex-col md:flex-row h-[700px] w-full">
                
                {/* Sidebar */}
                <div className="w-full md:w-64 bg-white border-r border-slate-200 flex-col hidden md:flex">
                    <div className="p-6 border-b border-slate-100">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center text-white">
                                <Activity size={18} />
                            </div>
                            <span className="font-bold text-lg text-slate-800">Klinika Tizimi</span>
                        </div>
                    </div>
                    
                    <nav className="p-4 space-y-1 mt-4">
                        <button 
                            onClick={() => setActiveTab('dashboard')}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'dashboard' ? 'bg-blue-50 text-brand-blue' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            <Activity size={20} />
                            {currentRole === 'admin' ? 'Moliya va Hisobot' : 'Navbat Nazorati'}
                        </button>
                        <button 
                             onClick={() => setActiveTab('queue')}
                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'queue' ? 'bg-blue-50 text-brand-blue' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            <Clock size={20} />
                            Bemorlar Ro'yxati
                        </button>
                        <button 
                             onClick={() => setActiveTab('patients')}
                             className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'patients' ? 'bg-blue-50 text-brand-blue' : 'text-slate-600 hover:bg-slate-50'}`}
                        >
                            <Users size={20} />
                            Bemorlar Bazasi
                        </button>
                    </nav>
                    <div className="mt-auto p-4 border-t border-slate-100">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                <img 
                                  src={currentRole === 'admin' ? "https://api.dicebear.com/7.x/avataaars/svg?seed=admin" : "https://api.dicebear.com/7.x/avataaars/svg?seed=d1"} 
                                  alt="User" 
                                />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-slate-800">{currentRole === 'admin' ? 'Admin' : 'Dr. Azimov'}</p>
                                <p className="text-xs text-slate-500">{currentRole === 'admin' ? 'Moliya Menejeri' : 'Terapevt'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col overflow-hidden bg-slate-50/50">
                    
                    {/* Header */}
                    <header className="bg-white h-16 border-b border-slate-200 flex items-center justify-between px-6 shrink-0">
                        <h2 className="font-bold text-slate-800 text-lg capitalize">
                            {activeTab === 'dashboard' ? (currentRole === 'admin' ? 'Moliya Statistikasi' : 'Navbat Boshqaruv') : activeTab === 'queue' ? 'Navbat Ro\'yxati' : 'Bemorlar Bazasi'}
                        </h2>
                        <div className="flex items-center gap-4">
                            <div className="relative hidden sm:block">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                                <input 
                                    type="text" 
                                    placeholder="Qidirish..." 
                                    className="pl-10 pr-4 py-2 bg-slate-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                />
                            </div>
                            <button className="p-2 relative hover:bg-slate-100 rounded-full">
                                <Bell size={20} className="text-slate-600" />
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
                            </button>
                        </div>
                    </header>

                    {/* Content Body */}
                    <div className="flex-1 overflow-y-auto p-6">
                        
                        {/* DASHBOARD VIEW */}
                        {activeTab === 'dashboard' && (
                            <div className="space-y-6 animate-fade-in">
                                {/* Stats Cards */}
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    {(currentRole === 'admin' ? adminStats : doctorStats).map((stat, idx) => (
                                        <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
                                            <div className="flex justify-between items-start mb-2">
                                                <div className={`p-2 rounded-lg ${currentRole === 'admin' ? 'bg-indigo-50 text-indigo-600' : 'bg-blue-50 text-brand-blue'}`}>
                                                   <stat.icon size={18} />
                                                </div>
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${stat.isPositive ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'}`}>
                                                    {stat.change}
                                                </span>
                                            </div>
                                            <p className="text-sm text-slate-500 font-medium mt-2">{stat.label}</p>
                                            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
                                        </div>
                                    ))}
                                </div>

                                <div className="grid lg:grid-cols-3 gap-6">
                                    {/* Main Area: Admin gets Charts, Doctor gets Queue Controller */}
                                    <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col min-h-[300px]">
                                        {currentRole === 'admin' ? (
                                            <>
                                                <div className="flex justify-between items-center mb-6">
                                                    <h3 className="font-bold text-slate-800">Daromad va Xarajatlar</h3>
                                                    <div className="flex gap-4">
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                                                            <span className="text-xs text-slate-500">Tushum</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                                                            <span className="text-xs text-slate-500">Xarajat</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-1 h-64 w-full">
                                                    <BarChart data={financialData} />
                                                </div>
                                            </>
                                        ) : (
                                            /* Doctor View: Current Patient Focus */
                                            <div className="flex flex-col h-full justify-between">
                                                <div className="flex justify-between items-center mb-6 border-b border-slate-100 pb-4">
                                                    <h3 className="font-bold text-slate-800 flex items-center gap-2">
                                                        <Activity size={20} className="text-brand-blue"/>
                                                        Qabuldagi Bemor
                                                    </h3>
                                                    {currentPatient && (
                                                        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold animate-pulse">
                                                            Jarayonda
                                                        </span>
                                                    )}
                                                </div>
                                                
                                                {currentPatient ? (
                                                    <div className="text-center py-4">
                                                        <div className="w-24 h-24 bg-brand-blue/10 rounded-full flex items-center justify-center text-brand-blue mx-auto mb-4">
                                                            <span className="text-3xl font-bold">{currentPatient.name.charAt(0)}</span>
                                                        </div>
                                                        <h2 className="text-3xl font-bold text-slate-900 mb-2">{currentPatient.name}</h2>
                                                        <p className="text-lg text-slate-500 mb-1">ID: <span className="font-mono font-bold text-slate-700">{currentPatient.id}</span></p>
                                                        <p className="text-sm text-slate-400 mb-8">Vaqti: {currentPatient.time}</p>
                                                        
                                                        <div className="flex justify-center gap-4">
                                                             <button 
                                                                onClick={() => updateStatus(currentPatient.id, 'completed')}
                                                                className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/20 transition-all flex items-center gap-2"
                                                             >
                                                                 <CheckCircle size={20} />
                                                                 Qabulni Tugatish
                                                             </button>
                                                             <button className="px-6 py-3 bg-white border-2 border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300 rounded-xl font-bold transition-all">
                                                                 Tarixni Ko'rish
                                                             </button>
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="text-center py-12 text-slate-400">
                                                        <Users size={48} className="mx-auto mb-4 opacity-50" />
                                                        <p>Hozir qabulda hech kim yo'q</p>
                                                        <button 
                                                            onClick={() => nextPatient && updateStatus(nextPatient.id, 'in-progress')}
                                                            disabled={!nextPatient}
                                                            className="mt-6 px-6 py-2 bg-brand-blue text-white rounded-lg font-medium hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
                                                        >
                                                            Keyingi bemorni chaqirish
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Secondary Area: Admin gets Donut, Doctor gets Next in Line */}
                                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
                                        {currentRole === 'admin' ? (
                                            <>
                                                <h3 className="font-bold text-slate-800 mb-4">Daromad Manbalari</h3>
                                                <div className="mb-6">
                                                    <DonutChart data={revenueSources} />
                                                </div>
                                                <div className="space-y-3">
                                                    {revenueSources.map((dept, i) => (
                                                        <div key={i} className="flex items-center justify-between text-sm">
                                                            <div className="flex items-center gap-2">
                                                                <div className={`w-3 h-3 rounded-full ${dept.tailwindColor}`}></div>
                                                                <span className="text-slate-600 font-medium">{dept.name}</span>
                                                            </div>
                                                            <span className="font-bold text-slate-800">{dept.value}%</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        ) : (
                                            <>
                                                <div className="flex items-center justify-between mb-4">
                                                    <h3 className="font-bold text-slate-800">Navbatda</h3>
                                                    <span className="text-xs font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-md">
                                                        {patients.filter(p => p.status === 'waiting').length} kishi
                                                    </span>
                                                </div>
                                                <div className="space-y-3">
                                                    {patients.filter(p => p.status === 'waiting').length === 0 && (
                                                        <p className="text-sm text-slate-400 text-center py-4">Navbat bo'sh</p>
                                                    )}
                                                    {patients.filter(p => p.status === 'waiting').slice(0, 4).map((p, i) => (
                                                        <div key={p.id} className="group flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-brand-blue/30 hover:bg-blue-50/50 transition-all cursor-pointer">
                                                            <div className="flex items-center gap-3">
                                                                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                                                                    {i + 1}
                                                                </div>
                                                                <div>
                                                                    <p className="text-sm font-bold text-slate-800">{p.name}</p>
                                                                    <p className="text-xs text-slate-500">{p.time}</p>
                                                                </div>
                                                            </div>
                                                            <button 
                                                                onClick={() => updateStatus(p.id, 'in-progress')}
                                                                className="text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity p-1.5 hover:bg-blue-100 rounded-lg"
                                                                title="Chaqirish"
                                                            >
                                                                <PlayCircle size={18} />
                                                            </button>
                                                        </div>
                                                    ))}
                                                    {patients.filter(p => p.status === 'waiting').length > 0 && (
                                                        <button 
                                                            onClick={() => setActiveTab('queue')}
                                                            className="w-full text-center text-xs text-brand-blue font-medium mt-2 hover:underline flex items-center justify-center gap-1"
                                                        >
                                                            Barchasini ko'rish <ArrowRight size={12} />
                                                        </button>
                                                    )}
                                                </div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* QUEUE CONTROL VIEW (Table) */}
                        {activeTab === 'queue' && (
                            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden animate-fade-in">
                                <table className="w-full text-left">
                                    <thead className="bg-slate-50 border-b border-slate-200">
                                        <tr>
                                            <th className="px-6 py-4 font-medium text-slate-500 text-sm">ID</th>
                                            <th className="px-6 py-4 font-medium text-slate-500 text-sm">Bemor</th>
                                            <th className="px-6 py-4 font-medium text-slate-500 text-sm">Vaqt</th>
                                            <th className="px-6 py-4 font-medium text-slate-500 text-sm">Holat</th>
                                            <th className="px-6 py-4 font-medium text-slate-500 text-sm text-right">Amallar</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {patients.map((patient) => (
                                            <tr key={patient.id} className="hover:bg-slate-50/50">
                                                <td className="px-6 py-4 font-mono text-slate-600 text-sm">{patient.id}</td>
                                                <td className="px-6 py-4">
                                                    <div className="font-medium text-slate-900">{patient.name}</div>
                                                    <div className="text-xs text-slate-500">{patient.doctor}</div>
                                                </td>
                                                <td className="px-6 py-4 text-slate-600 text-sm">{patient.time}</td>
                                                <td className="px-6 py-4">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                                        patient.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                                        patient.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                        patient.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                                                        'bg-yellow-100 text-yellow-700'
                                                    }`}>
                                                        {patient.status === 'in-progress' ? 'Qabulda' : 
                                                         patient.status === 'completed' ? 'Tugatildi' : 
                                                         patient.status === 'cancelled' ? 'Bekor qilindi' : 'Kutmoqda'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex items-center justify-end gap-2">
                                                        {patient.status === 'waiting' && (
                                                            <button 
                                                                onClick={() => updateStatus(patient.id, 'in-progress')}
                                                                className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg tooltip" title="Chaqirish"
                                                            >
                                                                <PlayCircle size={20} />
                                                            </button>
                                                        )}
                                                        {patient.status === 'in-progress' && (
                                                            <button 
                                                                onClick={() => updateStatus(patient.id, 'completed')}
                                                                className="p-1.5 text-green-600 hover:bg-green-50 rounded-lg" title="Tugatish"
                                                            >
                                                                <CheckCircle size={20} />
                                                            </button>
                                                        )}
                                                        {(patient.status === 'waiting' || patient.status === 'in-progress') && (
                                                            <button 
                                                                onClick={() => updateStatus(patient.id, 'cancelled')}
                                                                className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg" title="Bekor qilish"
                                                            >
                                                                <XCircle size={20} />
                                                            </button>
                                                        )}
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* PATIENTS LIST VIEW */}
                        {activeTab === 'patients' && (
                            <div className="space-y-4 animate-fade-in">
                                {patients.map((patient) => (
                                    <div key={patient.id} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:border-brand-blue hover:shadow-md transition-all cursor-pointer">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-slate-500 font-bold">
                                                {patient.name.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-slate-900">{patient.name}</h4>
                                                <p className="text-sm text-slate-500">{patient.department} • {patient.doctor}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="text-right hidden sm:block">
                                                <p className="text-sm font-medium text-slate-800">{patient.time}</p>
                                                <p className="text-xs text-slate-500">Bugun</p>
                                            </div>
                                            <ChevronRight className="text-slate-300" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardDemo;
