'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Star, Map, Calendar, ChevronRight, Settings as SettingsIcon } from 'lucide-react';
import { UserData } from '@/lib/types';
import { getZodiacSign } from '@/lib/zodiac-data';

interface DashboardProps {
  userData: UserData;
  onViewBirthChart: () => void;
  onViewZodiacSign: () => void;
  onViewSettings: () => void;
}

export default function Dashboard({ userData, onViewBirthChart, onViewZodiacSign, onViewSettings }: DashboardProps) {
  const zodiacSign = userData.birthDate ? getZodiacSign(userData.birthDate) : null;
  
  // Gerar horóscopo baseado no tom escolhido
  const generateHoroscope = () => {
    const horoscopes = {
      leve: `Olá, ${userData.name}! ✨ Hoje é um dia especial para você, ${zodiacSign?.name}. As energias cósmicas estão alinhadas para trazer momentos de clareza e inspiração. Pela manhã, você pode sentir uma vontade renovada de começar projetos que estavam pausados. Aproveite essa motivação! No campo afetivo, pequenos gestos de carinho farão toda a diferença. Seja gentil consigo mesmo e com quem está ao seu redor. À tarde, uma conversa inesperada pode abrir portas interessantes. Mantenha a mente aberta para novas possibilidades. Sua intuição está aguçada, confie nela. Lembre-se: cada passo, por menor que seja, te aproxima dos seus sonhos. O universo está conspirando a seu favor! 🌟`,
      
      serio: `${userData.name}, como ${zodiacSign?.name}, hoje você enfrentará desafios que exigem foco e determinação. O alinhamento planetário indica que decisões importantes devem ser tomadas com cautela. Analise todos os aspectos antes de agir. No trabalho, sua capacidade de liderança será testada - mantenha a postura profissional e evite conflitos desnecessários. Financeiramente, é momento de revisar investimentos e cortar gastos supérfluos. Nos relacionamentos, a comunicação direta será essencial para evitar mal-entendidos. Não deixe questões importantes para depois. Sua saúde merece atenção: priorize descanso adequado e alimentação balanceada. O dia favorece planejamento estratégico e organização. Seja pragmático e objetivo em suas ações.`,
      
      divertido: `E aí, ${userData.name}! 🎉 Bora ver o que as estrelas aprontaram pra você hoje? Como ${zodiacSign?.name}, você tá com a energia lá em cima! O universo tá tipo aquele amigo que sempre te anima: "Vai, vai que dá certo!" 😄 Hoje é dia de soltar a criatividade e fazer aquela coisa maluca que você vem adiando. Sabe aquele projeto doido? Bora tirar do papel! No amor, tá tudo conspirado pra você arrasar - se joga! E se pintar aquela oportunidade inesperada, não pensa duas vezes. Às vezes a vida é tipo Netflix: você clica sem saber e descobre uma série incrível! Ah, e cuidado com aquele amigo que sempre pede dinheiro emprestado... você sabe quem é! 😅 Curta o dia, ria muito e espalhe boas vibes por aí! 🌈✨`
    };

    return horoscopes[userData.horoscopeTone];
  };

  const horoscope = generateHoroscope();

  // Histórico de horóscopos (mock data)
  const horoscopeHistory = [
    { date: 'Ontem', preview: 'Dia de reflexão e autoconhecimento. As energias...' },
    { date: '2 dias atrás', preview: 'Momento favorável para novos começos e...' },
    { date: '3 dias atrás', preview: 'Sua intuição está em alta. Confie nos seus...' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C2A] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-in fade-in duration-700">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#F8F8F8] mb-2">
                Olá, {userData.name}! ✨
              </h1>
              <p className="text-[#F8F8F8]/70">
                Seu horóscopo de hoje como {zodiacSign?.name} {zodiacSign?.symbol}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                onClick={onViewSettings}
                variant="ghost"
                size="icon"
                className="text-[#F8F8F8] hover:text-[#00FFF7] hover:bg-[#1A1B3D]"
              >
                <SettingsIcon className="w-6 h-6" />
              </Button>
              <Sparkles className="w-12 h-12 text-[#00FFF7] animate-pulse hidden md:block" />
            </div>
          </div>
        </div>

        {/* Main Horoscope Card */}
        <div className="bg-[#1A1B3D] rounded-2xl p-6 md:p-8 shadow-2xl mb-8 animate-in slide-in-from-bottom duration-500">
          <div className="flex items-center gap-3 mb-6">
            <Star className="w-8 h-8 text-[#5D3AEE]" />
            <h2 className="text-2xl md:text-3xl font-bold text-[#F8F8F8]">
              Horóscopo de Hoje
            </h2>
          </div>

          <div className="prose prose-invert max-w-none mb-6">
            <p className="text-[#F8F8F8] text-base md:text-lg leading-relaxed">
              {horoscope}
            </p>
          </div>

          <div className="flex items-center gap-3 text-[#F8F8F8]/60 text-sm mb-6">
            <Calendar className="w-4 h-4" />
            <span>{new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button
              onClick={onViewBirthChart}
              className="h-14 text-lg font-semibold bg-[#00FFF7] text-[#0B0C2A] hover:bg-[#5D3AEE] hover:text-[#F8F8F8] transition-all duration-300 group"
            >
              <Map className="mr-2 w-5 h-5" />
              Ver Mapa Astral
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              onClick={onViewZodiacSign}
              className="h-14 text-lg font-semibold bg-[#00FFF7] text-[#0B0C2A] hover:bg-[#5D3AEE] hover:text-[#F8F8F8] transition-all duration-300 group"
            >
              <Star className="mr-2 w-5 h-5" />
              Ver Signo
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Horoscope History */}
        <div className="animate-in slide-in-from-bottom duration-700 delay-200">
          <h3 className="text-xl md:text-2xl font-bold text-[#F8F8F8] mb-4 flex items-center gap-2">
            <Calendar className="w-6 h-6 text-[#5D3AEE]" />
            Histórico de Horóscopos
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {horoscopeHistory.map((item, index) => (
              <div
                key={index}
                className="bg-[#1A1B3D] rounded-xl p-5 hover:bg-[#1A1B3D]/80 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-[#5D3AEE]/30"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[#00FFF7] font-semibold text-sm">{item.date}</span>
                  <ChevronRight className="w-4 h-4 text-[#F8F8F8]/40 group-hover:text-[#00FFF7] group-hover:translate-x-1 transition-all" />
                </div>
                <p className="text-[#F8F8F8]/70 text-sm line-clamp-2">
                  {item.preview}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="bg-[#1A1B3D] rounded-xl p-4 text-center">
            <div className="text-[#00FFF7] text-2xl font-bold mb-1">
              {zodiacSign?.element}
            </div>
            <div className="text-[#F8F8F8]/60 text-sm">Elemento</div>
          </div>

          <div className="bg-[#1A1B3D] rounded-xl p-4 text-center">
            <div className="text-[#00FFF7] text-2xl font-bold mb-1">
              {zodiacSign?.quality}
            </div>
            <div className="text-[#F8F8F8]/60 text-sm">Qualidade</div>
          </div>

          <div className="bg-[#1A1B3D] rounded-xl p-4 text-center">
            <div className="text-[#00FFF7] text-2xl font-bold mb-1">
              {zodiacSign?.rulingPlanet}
            </div>
            <div className="text-[#F8F8F8]/60 text-sm">Planeta Regente</div>
          </div>

          <div className="bg-[#1A1B3D] rounded-xl p-4 text-center">
            <div className="text-[#00FFF7] text-2xl font-bold mb-1">
              {userData.horoscopeTone === 'leve' ? '✨' : userData.horoscopeTone === 'serio' ? '🎯' : '🎉'}
            </div>
            <div className="text-[#F8F8F8]/60 text-sm">Tom Preferido</div>
          </div>
        </div>
      </div>
    </div>
  );
}
