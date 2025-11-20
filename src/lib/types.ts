// Tipos da aplicação AstroNova

export interface UserData {
  name: string;
  birthDate: Date | null;
  birthTime: string;
  birthCity: string;
  birthLat: number | null;
  birthLon: number | null;
  horoscopeTone: 'leve' | 'serio' | 'divertido';
  emailNotifications: boolean;
}

export interface Horoscope {
  id: string;
  date: string;
  content: string;
  sign: string;
}

export interface ZodiacSign {
  name: string;
  symbol: string;
  element: string;
  essence: string;
  love: string;
  work: string;
  tips: string[];
}
