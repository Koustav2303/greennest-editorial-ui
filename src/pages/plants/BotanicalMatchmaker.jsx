import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronRight, Sun, Droplets, Cat, ArrowRight, RefreshCcw, ShoppingCart } from 'lucide-react';

const BotanicalMatchmaker = ({ plantsData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0); // 0: Intro, 1-3: Questions, 4: Analyzing, 5: Result
  const [answers, setAnswers] = useState({ light: '', water: '', pets: '' });
  const [perfectMatch, setPerfectMatch] = useState(null);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
    return () => document.body.style.overflow = 'unset';
  }, [isOpen]);

  const questions = [
    {
      id: 'light',
      icon: Sun,
      title: "How much natural light does your space get?",
      options: [
        { label: "Low Light", desc: "Mostly shadows, maybe a north-facing window.", value: "Low Light" },
        { label: "Bright, Indirect", desc: "Lots of light, but no harsh direct sun.", value: "Bright Indirect Light" },
        { label: "Sun-drenched", desc: "Direct sunlight beams in for hours.", value: "Direct Sunlight" }
      ]
    },
    {
      id: 'water',
      icon: Droplets,
      title: "Be honest: What's your watering style?",
      options: [
        { label: "I forget often", desc: "I need something highly forgiving.", value: "Low Watering" },
        { label: "Pretty consistent", desc: "I can water once a week reliably.", value: "Moderate Watering" },
        { label: "Helicopter Parent", desc: "I love tending to them constantly.", value: "High Watering" }
      ]
    },
    {
      id: 'pets',
      icon: Cat,
      title: "Do you have furry friends running around?",
      options: [
        { label: "Yes, I have pets", desc: "Must be 100% non-toxic.", value: "Pet Friendly" },
        { label: "No pets here", desc: "Just me and the plants.", value: "None" }
      ]
    }
  ];

  const handleAnswer = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    if (step < 3) {
      setStep(step + 1);
    } else {
      analyzeMatch({ ...answers, [questionId]: value });
    }
  };

  const analyzeMatch = (finalAnswers) => {
    setStep(4); // Trigger "Analyzing" state
    
    // Artificial delay for dramatic cinematic effect
    setTimeout(() => {
      // 1. Try to find a perfect match
      let match = plantsData.find(p => 
        (finalAnswers.light === p.light || p.light.includes('Low to Bright')) &&
        (finalAnswers.water === p.watering) &&
        (finalAnswers.pets === 'None' || p.features.includes('Pet Friendly'))
      );

      // 2. Fallback: If no perfect match, find the most resilient plant (e.g., Snake Plant or Pothos)
      if (!match) {
        match = plantsData.find(p => p.title === "Snake Plant") || plantsData[0];
      }

      setPerfectMatch(match);
      setStep(5); // Show Result
    }, 2000);
  };

  const resetQuiz = () => {
    setAnswers({ light: '', water: '', pets: '' });
    setStep(0);
    setPerfectMatch(null);
  };

  return (
    <>
      {/* 1. The Entry Banner (Rendered on the main page) */}
      <div className="w-full bg-[#1a1f16] rounded-[2rem] p-8 md:p-12 mb-16 relative overflow-hidden isolate group cursor-pointer shadow-2xl" onClick={() => setIsOpen(true)}>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#85B060]/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-1000 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#4A6731]/30 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/4 z-0"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-2 text-[#85B060] font-bold text-sm tracking-widest uppercase mb-3">
              <Sparkles size={16} />
              <span>Botanical Concierge</span>
            </div>
            <h2 className="text-white text-3xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
              Don't know what to choose?<br />Find your perfect match.
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-medium max-w-lg">
              Take our 3-question glassmorphic quiz. We'll analyze your space, lighting, and lifestyle to pair you with a plant guaranteed to thrive.
            </p>
          </div>
          
          <button className="flex items-center justify-center gap-3 px-8 py-4 bg-white text-[#1a1f16] rounded-full font-bold text-base hover:bg-[#F4F7F2] hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.2)] shrink-0">
            Start the Quiz <ArrowRight size={20} />
          </button>
        </div>
      </div>

      {/* 2. The Full-Screen Glassmorphic Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 isolate"
          >
            {/* Extremely blurred glass backdrop */}
            <div 
              className="absolute inset-0 bg-[#0a1508]/40 backdrop-blur-2xl z-0"
              onClick={() => setIsOpen(false)}
            ></div>

            {/* Main Quiz Container */}
            <motion.div 
              initial={{ y: 50, scale: 0.95, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 20, scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-2xl bg-white/80 backdrop-blur-xl border border-white/50 rounded-[2.5rem] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.3)] overflow-hidden flex flex-col min-h-[500px]"
            >
              
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center bg-white/50 hover:bg-white text-gray-500 hover:text-black rounded-full transition-colors z-20"
              >
                <X size={20} />
              </button>

              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative">
                <AnimatePresence mode="wait">
                  
                  {/* STEP 0: Intro */}
                  {step === 0 && (
                    <motion.div key="intro" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="text-center flex flex-col items-center">
                      <div className="w-20 h-20 bg-[#F4F7F2] rounded-full flex items-center justify-center text-[#4A6731] mb-6 shadow-inner">
                        <Sparkles size={32} />
                      </div>
                      <h3 className="text-3xl font-extrabold text-[#1a1f16] mb-3">Let's find your plant mate.</h3>
                      <p className="text-gray-500 font-medium mb-10 max-w-md">3 quick questions to analyze your environment and habits.</p>
                      <button onClick={() => setStep(1)} className="px-10 py-4 bg-[#4A6731] text-white rounded-full font-bold text-lg shadow-lg hover:bg-[#3A5226] hover:scale-105 transition-all flex items-center gap-2">
                        Begin <ArrowRight size={20} />
                      </button>
                    </motion.div>
                  )}

                  {/* STEPS 1-3: Questions */}
                  {step >= 1 && step <= 3 && (
                    <motion.div key={`q-${step}`} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex flex-col w-full h-full justify-center">
                      <span className="text-[#85B060] font-bold text-sm tracking-widest uppercase mb-4">Question {step} of 3</span>
                      
                      <div className="flex items-center gap-3 mb-8">
                        {React.createElement(questions[step-1].icon, { className: "text-[#1a1f16]", size: 28 })}
                        <h3 className="text-2xl md:text-3xl font-extrabold text-[#1a1f16] tracking-tight">
                          {questions[step-1].title}
                        </h3>
                      </div>

                      <div className="flex flex-col gap-3">
                        {questions[step-1].options.map((opt, i) => (
                          <button 
                            key={i}
                            onClick={() => handleAnswer(questions[step-1].id, opt.value)}
                            className="flex items-center justify-between p-5 bg-white/60 hover:bg-white border border-white/60 hover:border-[#85B060] rounded-2xl transition-all text-left group shadow-sm hover:shadow-md"
                          >
                            <div className="flex flex-col">
                              <span className="text-[#1a1f16] font-bold text-lg mb-1">{opt.label}</span>
                              <span className="text-gray-500 text-sm font-medium">{opt.desc}</span>
                            </div>
                            <div className="w-8 h-8 rounded-full border-2 border-gray-200 group-hover:border-[#85B060] flex items-center justify-center text-transparent group-hover:text-[#85B060] transition-colors">
                              <Check size={16} strokeWidth={3} />
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* STEP 4: Analyzing (Fake Loading) */}
                  {step === 4 && (
                    <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center text-center h-full py-10">
                      <div className="relative w-24 h-24 mb-8">
                        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
                        <div className="absolute inset-0 border-4 border-[#85B060] rounded-full border-t-transparent animate-spin"></div>
                        <Sparkles className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#4A6731]" size={28} />
                      </div>
                      <h3 className="text-2xl font-extrabold text-[#1a1f16] mb-2">Analyzing your profile...</h3>
                      <p className="text-gray-500 font-medium">Scanning hundreds of botanical variables.</p>
                    </motion.div>
                  )}

                  {/* STEP 5: The Reveal */}
                  {step === 5 && perfectMatch && (
                    <motion.div key="result" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center text-center">
                      <span className="inline-block px-4 py-1.5 bg-[#F4F7F2] text-[#4A6731] font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                        100% Match Found
                      </span>
                      
                      <div className="relative w-40 h-40 md:w-56 md:h-56 bg-white rounded-full shadow-2xl flex items-center justify-center p-4 mb-6 isolate group/img">
                        <div className="absolute inset-0 bg-gradient-to-tr from-[#85B060]/20 to-transparent rounded-full z-0"></div>
                        <img src={perfectMatch.image} alt={perfectMatch.title} className="max-h-full w-auto object-contain drop-shadow-xl z-10 group-hover/img:scale-110 transition-transform duration-700" />
                      </div>

                      <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1f16] mb-2">{perfectMatch.title}</h2>
                      <p className="text-gray-500 font-medium italic mb-6 max-w-sm">{perfectMatch.subtitle}</p>

                      <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                        <button className="w-full sm:w-auto px-8 py-3.5 bg-[#4A6731] text-white rounded-full font-bold text-sm shadow-lg hover:bg-[#3A5226] hover:scale-105 transition-all flex items-center justify-center gap-2">
                          <ShoppingCart size={18} /> Add to Cart — {perfectMatch.price}
                        </button>
                        <button onClick={resetQuiz} className="w-full sm:w-auto px-8 py-3.5 bg-white border border-gray-200 text-[#1a1f16] rounded-full font-bold text-sm hover:bg-gray-50 transition-all flex items-center justify-center gap-2">
                          <RefreshCcw size={16} /> Retake Quiz
                        </button>
                      </div>
                    </motion.div>
                  )}

                </AnimatePresence>
              </div>

              {/* Progress Bar (Only visible during quiz) */}
              {step >= 1 && step <= 3 && (
                <div className="h-1.5 w-full bg-gray-100 relative">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(step / 3) * 100}%` }}
                    className="absolute top-0 left-0 h-full bg-[#85B060]"
                  />
                </div>
              )}

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Small helper component for the radio button checkmark
const Check = ({ size, ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <polyline points="20 6 9 17 4 12"></polyline>
  </svg>
);

export default BotanicalMatchmaker;