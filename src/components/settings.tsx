'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { UserData } from '@/lib/types';
import { User, Bell, History, Crown, ArrowLeft, Save, Calendar, MapPin, Clock } from 'lucide-react';

interface SettingsProps {
  userData: UserData;
  onBack: () => void;
  onUpdate: (data: UserData) => void;
}

export default function Settings({ userData, onBack, onUpdate }: SettingsProps) {
  const [activeTab, setActiveTab] = useState<'profile' | 'notifications' | 'history' | 'premium'>('profile');
  const [formData, setFormData] = useState<UserData>(userData);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    onUpdate(formData);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'profile', label: 'Perfil', icon: User },
    { id: 'notifications', label: 'Notificações', icon: Bell },
    { id: 'history', label: 'Histórico', icon: History },
    { id: 'premium', label: 'Premium', icon: Crown },
  ];

  // Mock histórico
  const horoscopeHistory = [
    { date: '15/01/2025', preview: 'Dia de reflexão e autoconhecimento. As energias cósmicas favorecem...', tone: 'Leve' },
    { date: '14/01/2025', preview: 'Momento favorável para novos começos e decisões importantes...', tone: 'Sério' },
    { date: '13/01/2025', preview: 'Sua intuição está em alta. Confie nos seus instintos e...', tone: 'Leve' },
    { date: '12/01/2025', preview: 'E aí! Hoje é dia de soltar a criatividade e fazer aquela...', tone: 'Divertido' },
    { date: '11/01/2025', preview: 'Como seu signo, hoje você enfrentará desafios que exigem...', tone: 'Sério' },
    { date: '10/01/2025', preview: 'Bora ver o que as estrelas aprontaram pra você? Energia lá...', tone: 'Divertido' },
  ];

  return (
    <div className="min-h-screen bg-[#0B0C2A] p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 animate-in fade-in duration-700">
          <Button
            onClick={onBack}
            variant="ghost"
            className="mb-4 text-[#F8F8F8] hover:text-[#00FFF7] hover:bg-[#1A1B3D]"
          >
            <ArrowLeft className="mr-2 w-5 h-5" />
            Voltar ao Dashboard
          </Button>
          <h1 className="text-3xl md:text-4xl font-bold text-[#F8F8F8]">
            Configurações
          </h1>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-[#00FFF7] text-[#0B0C2A]'
                    : 'bg-[#1A1B3D] text-[#F8F8F8] hover:bg-[#1A1B3D]/80'
                }`}
              >
                <Icon className="w-5 h-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-[#1A1B3D] rounded-2xl p-6 md:p-8 shadow-2xl animate-in slide-in-from-bottom duration-500">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#F8F8F8] mb-6">Editar Dados do Usuário</h2>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-[#F8F8F8] mb-2 block">Nome</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-[#0B0C2A] border-[#5D3AEE]/30 text-[#F8F8F8] focus:border-[#00FFF7]"
                  />
                </div>

                <div>
                  <Label htmlFor="birthDate" className="text-[#F8F8F8] mb-2 block flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Data de Nascimento
                  </Label>
                  <Input
                    id="birthDate"
                    type="date"
                    value={formData.birthDate ? formData.birthDate.toISOString().split('T')[0] : ''}
                    onChange={(e) => setFormData({ ...formData, birthDate: new Date(e.target.value) })}
                    className="bg-[#0B0C2A] border-[#5D3AEE]/30 text-[#F8F8F8] focus:border-[#00FFF7]"
                  />
                </div>

                <div>
                  <Label htmlFor="birthTime" className="text-[#F8F8F8] mb-2 block flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Hora de Nascimento
                  </Label>
                  <Input
                    id="birthTime"
                    value={formData.birthTime}
                    onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
                    placeholder="HH:MM ou Não sei"
                    className="bg-[#0B0C2A] border-[#5D3AEE]/30 text-[#F8F8F8] focus:border-[#00FFF7]"
                  />
                </div>

                <div>
                  <Label htmlFor="birthCity" className="text-[#F8F8F8] mb-2 block flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Cidade de Nascimento
                  </Label>
                  <Input
                    id="birthCity"
                    value={formData.birthCity}
                    onChange={(e) => setFormData({ ...formData, birthCity: e.target.value })}
                    className="bg-[#0B0C2A] border-[#5D3AEE]/30 text-[#F8F8F8] focus:border-[#00FFF7]"
                  />
                </div>

                <div>
                  <Label className="text-[#F8F8F8] mb-3 block">Tom do Horóscopo</Label>
                  <div className="grid grid-cols-3 gap-3">
                    {['leve', 'serio', 'divertido'].map((tone) => (
                      <button
                        key={tone}
                        onClick={() => setFormData({ ...formData, horoscopeTone: tone as any })}
                        className={`py-3 px-4 rounded-lg font-semibold capitalize transition-all duration-300 ${
                          formData.horoscopeTone === tone
                            ? 'bg-[#00FFF7] text-[#0B0C2A]'
                            : 'bg-[#0B0C2A] text-[#F8F8F8] hover:bg-[#0B0C2A]/80'
                        }`}
                      >
                        {tone}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                onClick={handleSave}
                className="w-full h-14 text-lg font-semibold bg-[#00FFF7] text-[#0B0C2A] hover:bg-[#5D3AEE] hover:text-[#F8F8F8] transition-all duration-300"
              >
                <Save className="mr-2 w-5 h-5" />
                {saved ? 'Salvo com sucesso! ✓' : 'Salvar Alterações'}
              </Button>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#F8F8F8] mb-6">Gerenciar Notificações</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-[#0B0C2A] rounded-lg">
                  <Checkbox
                    id="emailNotifications"
                    checked={formData.emailNotifications}
                    onCheckedChange={(checked) => 
                      setFormData({ ...formData, emailNotifications: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <Label htmlFor="emailNotifications" className="text-[#F8F8F8] font-semibold cursor-pointer">
                      Receber horóscopo diário por email
                    </Label>
                    <p className="text-[#F8F8F8]/60 text-sm mt-1">
                      Receba seu horóscopo personalizado todos os dias no seu email
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0B0C2A] rounded-lg">
                  <Checkbox id="pushNotifications" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="pushNotifications" className="text-[#F8F8F8] font-semibold cursor-pointer">
                      Notificações push
                    </Label>
                    <p className="text-[#F8F8F8]/60 text-sm mt-1">
                      Receba alertas sobre eventos astrológicos importantes
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0B0C2A] rounded-lg">
                  <Checkbox id="weeklyReport" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="weeklyReport" className="text-[#F8F8F8] font-semibold cursor-pointer">
                      Relatório semanal
                    </Label>
                    <p className="text-[#F8F8F8]/60 text-sm mt-1">
                      Resumo semanal das previsões astrológicas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-[#0B0C2A] rounded-lg">
                  <Checkbox id="moonPhases" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="moonPhases" className="text-[#F8F8F8] font-semibold cursor-pointer">
                      Fases da lua
                    </Label>
                    <p className="text-[#F8F8F8]/60 text-sm mt-1">
                      Alertas sobre mudanças nas fases lunares
                    </p>
                  </div>
                </div>
              </div>

              <Button
                onClick={handleSave}
                className="w-full h-14 text-lg font-semibold bg-[#00FFF7] text-[#0B0C2A] hover:bg-[#5D3AEE] hover:text-[#F8F8F8] transition-all duration-300"
              >
                <Save className="mr-2 w-5 h-5" />
                Salvar Preferências
              </Button>
            </div>
          )}

          {/* History Tab */}
          {activeTab === 'history' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-[#F8F8F8] mb-6">Histórico de Horóscopos</h2>

              <div className="space-y-4">
                {horoscopeHistory.map((item, index) => (
                  <div
                    key={index}
                    className="p-5 bg-[#0B0C2A] rounded-lg hover:bg-[#0B0C2A]/80 transition-all duration-300 cursor-pointer group border-2 border-transparent hover:border-[#5D3AEE]/30"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-[#00FFF7]" />
                        <span className="text-[#F8F8F8] font-semibold">{item.date}</span>
                      </div>
                      <span className="text-[#5D3AEE] text-sm font-medium px-3 py-1 bg-[#5D3AEE]/10 rounded-full">
                        {item.tone}
                      </span>
                    </div>
                    <p className="text-[#F8F8F8]/70 line-clamp-2">
                      {item.preview}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Premium Tab */}
          {activeTab === 'premium' && (
            <div className="space-y-8">
              <div className="text-center">
                <Crown className="w-16 h-16 text-[#00FFF7] mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-[#F8F8F8] mb-2">AstroNova Premium</h2>
                <p className="text-[#F8F8F8]/70">
                  Desbloqueie todo o potencial da astrologia
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Benefícios */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">Benefícios Premium</h3>
                  
                  {[
                    { icon: '📊', title: 'Horóscopos Detalhados', desc: 'Análises profundas e personalizadas' },
                    { icon: '🗺️', title: 'Mapas Interativos', desc: 'Explore seu mapa astral completo' },
                    { icon: '🔔', title: 'Alertas Diários', desc: 'Notificações sobre eventos importantes' },
                    { icon: '📈', title: 'Previsões Mensais', desc: 'Planejamento astrológico completo' },
                    { icon: '💫', title: 'Compatibilidade', desc: 'Análise de relacionamentos' },
                    { icon: '🎯', title: 'Sem Anúncios', desc: 'Experiência premium sem interrupções' },
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-[#0B0C2A] rounded-lg">
                      <span className="text-2xl">{benefit.icon}</span>
                      <div>
                        <h4 className="text-[#F8F8F8] font-semibold">{benefit.title}</h4>
                        <p className="text-[#F8F8F8]/60 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Planos */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-[#F8F8F8] mb-4">Escolha seu Plano</h3>

                  {/* Plano Mensal */}
                  <div className="p-6 bg-[#0B0C2A] rounded-xl border-2 border-[#00FFF7]/30 hover:border-[#00FFF7] transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-[#F8F8F8]">Mensal</h4>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-[#00FFF7]">R$ 29,90</div>
                        <div className="text-[#F8F8F8]/60 text-sm">por mês</div>
                      </div>
                    </div>
                    <Button className="w-full h-12 bg-[#00FFF7] text-[#0B0C2A] hover:bg-[#5D3AEE] hover:text-[#F8F8F8] font-semibold transition-all duration-300">
                      Assinar Mensal
                    </Button>
                  </div>

                  {/* Plano Anual */}
                  <div className="p-6 bg-gradient-to-br from-[#5D3AEE] to-[#5D3AEE]/80 rounded-xl border-2 border-[#5D3AEE] relative overflow-hidden">
                    <div className="absolute top-3 right-3 bg-[#00FFF7] text-[#0B0C2A] text-xs font-bold px-3 py-1 rounded-full">
                      ECONOMIZE 40%
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-xl font-bold text-white">Anual</h4>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-white">R$ 179,90</div>
                        <div className="text-white/80 text-sm">R$ 14,99/mês</div>
                      </div>
                    </div>
                    <Button className="w-full h-12 bg-white text-[#5D3AEE] hover:bg-[#00FFF7] hover:text-[#0B0C2A] font-semibold transition-all duration-300">
                      Assinar Anual
                    </Button>
                  </div>

                  <p className="text-[#F8F8F8]/60 text-sm text-center mt-4">
                    Cancele quando quiser. Sem compromisso.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
