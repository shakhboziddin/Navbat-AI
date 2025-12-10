
import React, { useState } from 'react';
import { ContentData, BookingDoctor, TimeSlot } from '../types';
import { 
  Building2, ChevronRight, Calendar, User, CheckCircle2, 
  Stethoscope, Heart, Baby, Smile, Clock, ArrowLeft, ArrowRight
} from 'lucide-react';

interface BookingDemoProps {
  content: ContentData['bookingDemo'];
}

const steps = [
  { id: 1, title: "Bo'lim" },
  { id: 2, title: "Shifokor" },
  { id: 3, title: "Vaqt" },
  { id: 4, title: "Ma'lumot" },
  { id: 5, title: "Tasdiq" },
];

// Helper to get icons
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'stethoscope': return <Stethoscope size={24} />;
    case 'tooth': return <Smile size={24} />;
    case 'heart': return <Heart size={24} />;
    case 'baby': return <Baby size={24} />;
    default: return <Building2 size={24} />;
  }
};

const BookingDemo: React.FC<BookingDemoProps> = ({ content }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [selectedDoctor, setSelectedDoctor] = useState<BookingDoctor | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  // Generate mock time slots
  const timeSlots: TimeSlot[] = [
    { time: '09:00', available: false },
    { time: '09:30', available: true },
    { time: '10:00', available: true },
    { time: '10:30', available: false },
    { time: '11:00', available: true },
    { time: '11:30', available: true },
    { time: '14:00', available: true },
    { time: '14:30', available: true },
    { time: '15:00', available: false },
  ];

  const handleNext = () => {
    if (currentStep < 5) setCurrentStep(c => c + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) setCurrentStep(c => c - 1);
  };

  const resetDemo = () => {
    setCurrentStep(1);
    setSelectedDept(null);
    setSelectedDoctor(null);
    setSelectedTime(null);
    setFormData({ name: '', phone: '' });
  };

  return (
    <section id="booking-demo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-brand-blue text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
            Interaktiv Demo #1
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">{content.title}</h2>
          <p className="text-slate-500 text-lg">{content.subtitle}</p>
        </div>

        {/* Demo Device Frame */}
        <div className="max-w-md mx-auto bg-slate-900 rounded-[3rem] p-3 shadow-2xl border-4 border-slate-800 relative">
          {/* Dynamic Island / Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-3xl z-20"></div>

          {/* Screen */}
          <div className="bg-slate-50 rounded-[2.5rem] overflow-hidden h-[700px] flex flex-col relative w-full">
            
            {/* Status Bar Mock */}
            <div className="h-12 bg-white flex justify-between items-center px-6 pt-2 text-xs font-medium text-slate-900 border-b border-slate-100 z-10">
              <span>9:41</span>
              <div className="flex gap-1">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>

            {/* App Header */}
            <div className="bg-white p-4 border-b border-slate-100 flex items-center gap-3 shadow-sm z-10">
               {currentStep > 1 && currentStep < 5 && (
                 <button onClick={handleBack} className="p-1 rounded-full hover:bg-slate-100">
                   <ArrowLeft size={20} className="text-slate-600" />
                 </button>
               )}
               <h3 className="font-bold text-slate-800 flex-1 text-center pr-6">Navbat Olish</h3>
            </div>

            {/* Progress Bar */}
            {currentStep < 5 && (
              <div className="flex gap-1 px-4 py-2 bg-white">
                {steps.slice(0,4).map((s) => (
                  <div key={s.id} className={`h-1 flex-1 rounded-full transition-all duration-300 ${s.id <= currentStep ? 'bg-brand-blue' : 'bg-slate-200'}`} />
                ))}
              </div>
            )}

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
              
              {/* STEP 1: Department */}
              {currentStep === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Bo'limni tanlang</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {content.departments.map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => {
                          setSelectedDept(dept.id);
                          handleNext();
                        }}
                        className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm hover:border-brand-blue hover:shadow-md transition-all gap-3 group"
                      >
                        <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors">
                          {getIcon(dept.icon)}
                        </div>
                        <span className="font-semibold text-slate-700">{dept.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Doctor */}
              {currentStep === 2 && selectedDept && (
                <div className="space-y-4 animate-fade-in">
                  <h2 className="text-xl font-bold text-slate-900 mb-6">Shifokorni tanlang</h2>
                  <div className="space-y-3">
                    {content.doctors[selectedDept]?.map((doc) => (
                      <div 
                        key={doc.id} 
                        onClick={() => {
                          setSelectedDoctor(doc);
                          handleNext();
                        }}
                        className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-slate-200 shadow-sm cursor-pointer hover:border-brand-blue transition-all"
                      >
                        <img src={doc.image} alt={doc.name} className="w-14 h-14 rounded-full bg-slate-100" />
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900">{doc.name}</h4>
                          <p className="text-sm text-slate-500">{doc.specialty}</p>
                        </div>
                        <ChevronRight className="text-slate-300" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Time */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                   <div className="flex items-center justify-between">
                     <h2 className="text-xl font-bold text-slate-900">Vaqtni tanlang</h2>
                     <span className="text-sm text-brand-blue font-medium bg-blue-50 px-3 py-1 rounded-lg">Bugun</span>
                   </div>
                   
                   <div className="grid grid-cols-3 gap-3">
                     {timeSlots.map((slot, idx) => (
                       <button
                        key={idx}
                        disabled={!slot.available}
                        onClick={() => {
                          setSelectedTime(slot.time);
                          handleNext();
                        }}
                        className={`py-3 rounded-xl text-sm font-semibold border transition-all ${
                          !slot.available 
                            ? 'bg-slate-100 text-slate-400 border-transparent cursor-not-allowed'
                            : selectedTime === slot.time 
                              ? 'bg-brand-blue text-white border-brand-blue shadow-md'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-brand-blue'
                        }`}
                       >
                         {slot.time}
                       </button>
                     ))}
                   </div>
                   <p className="text-xs text-center text-slate-400">Toshkent vaqti bilan</p>
                </div>
              )}

              {/* STEP 4: Info Form */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <h2 className="text-xl font-bold text-slate-900">Ma'lumotlaringiz</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Ism va Familiya</label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                        <input 
                          type="text" 
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Ismingizni kiriting"
                          className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-1">Telefon raqam</label>
                      <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-medium">+998</span>
                        <input 
                          type="tel" 
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          placeholder="90 123 45 67"
                          className="w-full pl-14 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 mt-4">
                    <h4 className="text-sm font-bold text-brand-dark mb-2">Qabul ma'lumotlari:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li className="flex justify-between"><span>Shifokor:</span> <span className="font-medium">{selectedDoctor?.name}</span></li>
                      <li className="flex justify-between"><span>Vaqt:</span> <span className="font-medium">Bugun, {selectedTime}</span></li>
                    </ul>
                  </div>

                  <button 
                    onClick={handleNext}
                    disabled={!formData.name || !formData.phone}
                    className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-600 transition-all flex items-center justify-center gap-2"
                  >
                    Tasdiqlash <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {/* STEP 5: Success */}
              {currentStep === 5 && (
                <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">Navbat olindi!</h2>
                  <p className="text-slate-500 mb-8 max-w-[200px]">Sizning navbatingiz muvaffaqiyatli band qilindi.</p>
                  
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm w-full mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-purple-500"></div>
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">Navbat Raqamingiz</p>
                    <h1 className="text-5xl font-black text-slate-900 tracking-tight mb-4">A-042</h1>
                    <div className="flex items-center justify-center gap-2 text-sm text-slate-600 bg-slate-50 py-2 rounded-lg">
                      <Clock size={16} />
                      <span>{selectedTime}</span>
                    </div>
                  </div>

                  <div className="text-xs text-slate-400 bg-slate-50 p-3 rounded-lg">
                    Navbatingiz yaqinlashganda SMS xabarnoma yuboriladi.
                  </div>

                  <button 
                    onClick={resetDemo}
                    className="mt-8 text-brand-blue font-medium hover:underline"
                  >
                    Bosh sahifaga qaytish
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingDemo;
