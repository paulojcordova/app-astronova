'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sparkles, ArrowRight } from 'lucide-react';
import { UserData } from '@/lib/types';

interface OnboardingProps {
  onComplete: (data: UserData) => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userData, setUserData] = useState<UserData>({
    name: '',
    birthDate: null,
    birthTime: '',
    birthCity: '',
    birthLat: null,
    birthLon: null,
    horoscopeTone: 'leve',
    emailNotifications: false,
  });

  const questions = [
    {
      id: 'name',
      question: 'Qual é o seu nome?',
      placeholder: 'Digite seu nome',
      type: 'text',
    },
    {
      id: 'birthDate',
      question: 'Quando você nasceu?',
      placeholder: 'DD/MM/AAAA',
      type: 'date',
    },
    {
      id: 'birthTime',
      question: 'A que horas você nasceu?',
      placeholder: 'HH:MM (ou deixe em branco se não souber)',
      type: 'time',
    },
    {
      id: 'birthCity',
      question: 'Onde você nasceu?',
      placeholder: 'Cidade, Estado',
      type: 'text',
    },
    {
      id: 'horoscopeTone',
      question: 'Que tipo de horóscopo você prefere?',
      type: 'choice',
      options: [
        { value: 'leve', label: '✨ Leve e inspirador', emoji: '✨' },
        { value: 'serio', label: '🎯 Sério e direto', emoji: '🎯' },
        { value: 'divertido', label: '🎉 Divertido e descontraído', emoji: '🎉' },
      ],
    },
  ];

  const currentQ = questions[currentQuestion];

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(userData);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const canProceed = () => {
    switch (currentQ.id) {
      case 'name':
        return userData.name.trim() !== '';
      case 'birthDate':
        return userData.birthDate !== null;
      case 'birthTime':
        return true; // Opcional
      case 'birthCity':
        return userData.birthCity.trim() !== '';
      case 'horoscopeTone':
        return true; // Sempre tem valor padrão
      default:
        return false;
    }
  };

  const handleDateChange = (value: string) => {
    const [year, month, day] = value.split('-');
    if (year && month && day) {
      setUserData({ ...userData, birthDate: new Date(parseInt(year), parseInt(month) - 1, parseInt(day)) });
    }
  };

  const formatDateForInput = (date: Date | null) => {
    if (!date) return '';
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="min-h-screen bg-[#0B0C2A] flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8 animate-in fade-in duration-700">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-[#00FFF7] animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#F8F8F8]">AstroNova</h1>
          </div>
          <p className="text-[#F8F8F8]/70 text-lg">Vamos conhecer você melhor!</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[#F8F8F8]/60 text-sm">
              Pergunta {currentQuestion + 1} de {questions.length}
            </span>
            <span className="text-[#00FFF7] text-sm font-semibold">
              {Math.round(((currentQuestion + 1) / questions.length) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-[#1A1B3D] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#00FFF7] to-[#5D3AEE] transition-all duration-500 ease-out"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-[#1A1B3D] rounded-2xl p-8 md:p-12 shadow-2xl animate-in slide-in-from-right duration-500">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F8F8F8] mb-8">
            {currentQ.question}
          </h2>

          {/* Text/Date/Time Input */}
          {(currentQ.type === 'text' || currentQ.type === 'date' || currentQ.type === 'time') && (
            <div className="space-y-6">
              {currentQ.type === 'date' ? (
                <Input
                  type="date"
                  value={formatDateForInput(userData.birthDate)}
                  onChange={(e) => handleDateChange(e.target.value)}
                  max={new Date().toISOString().split('T')[0]}
                  min="1900-01-01"
                  className="bg-[#0B0C2A] border-2 border-[#5D3AEE]/30 text-[#F8F8F8] placeholder:text-[#F8F8F8]/40 h-14 text-lg focus:border-[#00FFF7] focus:ring-2 focus:ring-[#00FFF7]/20 transition-all"
                />
              ) : currentQ.type === 'time' ? (
                <Input
                  type="time"
                  value={userData.birthTime}
                  onChange={(e) => setUserData({ ...userData, birthTime: e.target.value })}
                  placeholder={currentQ.placeholder}
                  className="bg-[#0B0C2A] border-2 border-[#5D3AEE]/30 text-[#F8F8F8] placeholder:text-[#F8F8F8]/40 h-14 text-lg focus:border-[#00FFF7] focus:ring-2 focus:ring-[#00FFF7]/20 transition-all"
                />
              ) : (
                <Input
                  type="text"
                  value={currentQ.id === 'name' ? userData.name : userData.birthCity}
                  onChange={(e) =>
                    setUserData({
                      ...userData,
                      [currentQ.id]: e.target.value,
                    })
                  }
                  placeholder={currentQ.placeholder}
                  className="bg-[#0B0C2A] border-2 border-[#5D3AEE]/30 text-[#F8F8F8] placeholder:text-[#F8F8F8]/40 h-14 text-lg focus:border-[#00FFF7] focus:ring-2 focus:ring-[#00FFF7]/20 transition-all"
                  autoFocus
                />
              )}
            </div>
          )}

          {/* Choice Input */}
          {currentQ.type === 'choice' && currentQ.options && (
            <div className="space-y-4">
              {currentQ.options.map((option) => (
                <button
                  key={option.value}
                  onClick={() =>
                    setUserData({
                      ...userData,
                      horoscopeTone: option.value as 'leve' | 'serio' | 'divertido',
                    })
                  }
                  className={`w-full p-6 rounded-xl border-2 transition-all duration-300 text-left ${
                    userData.horoscopeTone === option.value
                      ? 'bg-[#00FFF7]/10 border-[#00FFF7] shadow-lg shadow-[#00FFF7]/20'
                      : 'bg-[#0B0C2A] border-[#5D3AEE]/30 hover:border-[#5D3AEE] hover:bg-[#0B0C2A]/80'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{option.emoji}</span>
                    <span className="text-[#F8F8F8] text-lg font-medium">{option.label}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {currentQuestion > 0 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1 h-14 text-lg font-semibold bg-transparent border-2 border-[#5D3AEE] text-[#F8F8F8] hover:bg-[#5D3AEE]/20 transition-all"
              >
                Voltar
              </Button>
            )}
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
              className="flex-1 h-14 text-lg font-semibold bg-[#00FFF7] text-[#0B0C2A] hover:bg-[#5D3AEE] hover:text-[#F8F8F8] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              {currentQuestion === questions.length - 1 ? 'Finalizar' : 'Próximo'}
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Hint Text */}
        {currentQ.type === 'time' && (
          <p className="text-center text-[#F8F8F8]/50 text-sm mt-4">
            💡 Não sabe a hora? Sem problemas! Deixe em branco e continue.
          </p>
        )}
      </div>
    </div>
  );
}
