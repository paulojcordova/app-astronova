'use client';

import { useState } from 'react';
import Onboarding from '@/components/onboarding';
import Dashboard from '@/components/dashboard';
import Settings from '@/components/settings';
import { UserData } from '@/lib/types';

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [showOnboarding, setShowOnboarding] = useState(true);
  const [currentView, setCurrentView] = useState<'dashboard' | 'birthChart' | 'zodiacSign' | 'settings'>('dashboard');

  const handleOnboardingComplete = (data: UserData) => {
    setUserData(data);
    setShowOnboarding(false);
  };

  const handleViewBirthChart = () => {
    setCurrentView('birthChart');
  };

  const handleViewZodiacSign = () => {
    setCurrentView('zodiacSign');
  };

  const handleViewSettings = () => {
    setCurrentView('settings');
  };

  const handleBackToDashboard = () => {
    setCurrentView('dashboard');
  };

  const handleUpdateUserData = (data: UserData) => {
    setUserData(data);
  };

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  if (!userData) {
    return null;
  }

  if (currentView === 'settings') {
    return (
      <Settings
        userData={userData}
        onBack={handleBackToDashboard}
        onUpdate={handleUpdateUserData}
      />
    );
  }

  if (currentView === 'dashboard') {
    return (
      <Dashboard
        userData={userData}
        onViewBirthChart={handleViewBirthChart}
        onViewZodiacSign={handleViewZodiacSign}
        onViewSettings={handleViewSettings}
      />
    );
  }

  if (currentView === 'birthChart') {
    return (
      <div className="min-h-screen bg-[#0B0C2A] p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-[#F8F8F8] py-20">
            <h1 className="text-4xl font-bold mb-4">Mapa Astral 🗺️</h1>
            <p className="text-xl text-[#F8F8F8]/70 mb-8">
              Módulo 4 - Em construção
            </p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-3 bg-[#00FFF7] text-[#0B0C2A] rounded-lg font-semibold hover:bg-[#5D3AEE] hover:text-[#F8F8F8] transition-all"
            >
              Voltar ao Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (currentView === 'zodiacSign') {
    return (
      <div className="min-h-screen bg-[#0B0C2A] p-4 md:p-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center text-[#F8F8F8] py-20">
            <h1 className="text-4xl font-bold mb-4">Seu Signo ⭐</h1>
            <p className="text-xl text-[#F8F8F8]/70 mb-8">
              Módulo 3 - Em construção
            </p>
            <button
              onClick={() => setCurrentView('dashboard')}
              className="px-6 py-3 bg-[#00FFF7] text-[#0B0C2A] rounded-lg font-semibold hover:bg-[#5D3AEE] hover:text-[#F8F8F8] transition-all"
            >
              Voltar ao Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
