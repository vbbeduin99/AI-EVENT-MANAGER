import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { GeneratorConsole } from './components/GeneratorConsole';
import { GenerationModal } from './components/GenerationModal';
import { BlueprintSection } from './components/BlueprintSection';
import { MilestoneChecklist } from './components/MilestoneChecklist';
import { HowItWorks } from './components/HowItWorks';
import { CtaFooter } from './components/CtaFooter';
import { ExportModal } from './components/ExportModal';
import { Toast } from './components/Toast';
import { EventInputState, Blueprint, ChecklistMilestone } from './types';
import { generateBlueprint, getDefaultMilestones } from './utils/eventGenerator';

export default function App() {
  const [inputState, setInputState] = useState<EventInputState>({
    eventType: 'Wedding',
    guests: 150,
    budget: 300000,
    location: 'Dhaka',
    prompt: 'An ethereal glasshouse celebration with botanical installations, subtle ambient golden lighting, acoustic indie live sets, bespoke mocktail mixology bar, and an interactive memory photo gallery.'
  });

  const [blueprint, setBlueprint] = useState<Blueprint>(() => generateBlueprint({
    eventType: 'Wedding',
    guests: 150,
    budget: 300000,
    location: 'Dhaka',
    prompt: 'An ethereal glasshouse celebration with botanical installations, subtle ambient golden lighting, acoustic indie live sets, bespoke mocktail mixology bar, and an interactive memory photo gallery.'
  }));

  const [milestones, setMilestones] = useState<ChecklistMilestone[]>(getDefaultMilestones);
  const [isGenerating, setIsGenerating] = useState(false);
  const [modalStatus, setModalStatus] = useState('Understanding your vision...');
  const [modalProgress, setModalProgress] = useState(0);
  const [modalStep, setModalStep] = useState(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleStartGeneration = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setModalProgress(0);
    setModalStep(1);

    const steps = [
      { message: 'Understanding your vision...', progress: 18, step: 1 },
      { message: 'Designing the experience...', progress: 38, step: 1 },
      { message: 'Creating the visual direction...', progress: 58, step: 2 },
      { message: 'Building your budget...', progress: 78, step: 2 },
      { message: 'Planning the guest journey...', progress: 92, step: 3 },
      { message: 'Preparing your execution plan...', progress: 100, step: 3 }
    ];

    let currentIdx = 0;
    const interval = setInterval(() => {
      if (currentIdx < steps.length) {
        setModalStatus(steps[currentIdx].message);
        setModalProgress(steps[currentIdx].progress);
        setModalStep(steps[currentIdx].step);
        currentIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsGenerating(false);
          const newBlueprint = generateBlueprint(inputState);
          setBlueprint(newBlueprint);

          // Scroll smoothly to blueprint
          const el = document.getElementById('blueprint-section');
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
          showToast('Blueprint synthesized successfully!');
        }, 300);
      }
    }, 380);
  };

  const handleApplyRefinement = (action: string) => {
    showToast(`Applying AI Mutation: "${action}"...`);

    let updatedInput = { ...inputState };

    if (action.includes('luxurious')) {
      updatedInput.budget = Math.round(updatedInput.budget * 1.35);
      updatedInput.prompt += ' Infused with ultra-luxury finishes, crystal chandeliers, and white-glove butler hospitality.';
    } else if (action.includes('Reduce the budget')) {
      updatedInput.budget = Math.max(50000, Math.round(updatedInput.budget * 0.75));
    } else if (action.includes('intimate')) {
      updatedInput.guests = Math.max(25, Math.round(updatedInput.guests * 0.6));
      updatedInput.prompt += ' Scaled down to an intimate, candlelit gathering with cozy conversation alcoves.';
    } else if (action.includes('Add 100 guests')) {
      updatedInput.guests += 100;
      updatedInput.budget += 120000;
    } else if (action.includes('modern')) {
      updatedInput.prompt = 'Ultra-modern architectural minimalism, sleek linear lights, floating stages, and digital keynote aesthetics.';
    } else if (action.includes('corporate')) {
      updatedInput.eventType = 'Corporate Event';
    } else if (action.includes('traditional')) {
      updatedInput.prompt = 'Rich traditional South Asian heritage decor, brass marigold bowls, live sitar instruments, and authentic royal feast.';
    } else if (action.includes('theme')) {
      const themes = ['Cyberpunk Rooftop', 'Bohemian Pampas Sunset', 'Nordic Glasshouse Minimal', 'Art Deco Speakeasy'];
      const chosen = themes[Math.floor(Math.random() * themes.length)];
      updatedInput.prompt = `Reimagined in ${chosen} aesthetic with distinct lighting design and signature culinary pairing.`;
    } else {
      // Custom user text
      updatedInput.prompt += ` Custom direction: ${action}`;
    }

    setInputState(updatedInput);

    setTimeout(() => {
      const newBp = generateBlueprint(updatedInput);
      setBlueprint(newBp);
      showToast(`Blueprint updated with: ${action}`);
    }, 450);
  };

  const handleToggleTask = (milestoneId: string, taskId: string) => {
    setMilestones((prev) =>
      prev.map((col) => {
        if (col.id !== milestoneId) return col;
        return {
          ...col,
          tasks: col.tasks.map((t) => (t.id === taskId ? { ...t, done: !t.done } : t))
        };
      })
    );
  };

  const handleMarkAllTasks = (done: boolean) => {
    setMilestones((prev) =>
      prev.map((col) => ({
        ...col,
        tasks: col.tasks.map((t) => ({ ...t, done }))
      }))
    );
    showToast(done ? 'All production milestones marked verified!' : 'All milestones reset.');
  };

  const scrollToGenerator = () => {
    const el = document.getElementById('generator-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen relative selection:bg-[#D9FF65] selection:text-[#08090C]">
      
      {/* Atmospheric Background Glow Elements */}
      <div className="fixed top-0 left-1/4 w-[600px] h-[600px] accent-glow rounded-full blur-3xl pointer-events-none -z-10 animate-pulseGlow" />
      <div className="fixed top-1/3 right-10 w-[500px] h-[500px] peri-glow rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-10 left-1/3 w-[700px] h-[450px] accent-glow rounded-full blur-3xl pointer-events-none -z-10 opacity-30" />

      {/* Navigation Header */}
      <Header
        onStartCreating={scrollToGenerator}
        onOpenExport={() => setIsExportOpen(true)}
      />

      <main>
        {/* HERO SECTION */}
        <HeroSection />

        {/* EVENT GENERATOR CONSOLE */}
        <GeneratorConsole
          inputState={inputState}
          onChange={(updates) => setInputState((prev) => ({ ...prev, ...updates }))}
          onSubmit={handleStartGeneration}
          isGenerating={isGenerating}
        />

        {/* LIVING BLUEPRINT SECTION */}
        <BlueprintSection
          blueprint={blueprint}
          onApplyRefinement={handleApplyRefinement}
        />

        {/* PRODUCTION MILESTONE CHECKLIST */}
        <MilestoneChecklist
          milestones={milestones}
          onToggleTask={handleToggleTask}
          onMarkAll={handleMarkAllTasks}
        />

        {/* HOW IT WORKS */}
        <HowItWorks />

        {/* FINAL CTA & FOOTER */}
        <CtaFooter onCreateAnother={scrollToGenerator} />
      </main>

      {/* AI GENERATION PROCESSING MODAL */}
      <GenerationModal
        isOpen={isGenerating}
        statusMessage={modalStatus}
        progressPercent={modalProgress}
        currentStep={modalStep}
      />

      {/* EXPORT & SHARE MODAL */}
      <ExportModal
        isOpen={isExportOpen}
        onClose={() => setIsExportOpen(false)}
        blueprint={blueprint}
        onToast={showToast}
      />

      {/* NOTIFICATION TOAST */}
      <Toast message={toastMessage} />

    </div>
  );
}
