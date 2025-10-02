import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Sunrise, Sun, Moon, Sparkles, Heart } from "lucide-react";
import bannerImage from "@/assets/hello-kitty-banner.jpg";

interface TimeSlot {
  time: string;
  mon?: string;
  tue?: string;
  wed?: string;
  thu?: string;
  fri?: string;
  sat?: string;
  sun?: string;
  period: "morning" | "afternoon" | "evening";
}

const timetableData: TimeSlot[] = [
  {
    time: "7h00 - 7h50",
    thu: "Tin học cơ sở - A5-05",
    fri: "Địa chất học - A3.304",
    period: "morning"
  },
  {
    time: "8h00 - 8h50",
    thu: "Tin học cơ sở - A5-05",
    fri: "Địa chất học - A3.304",
    period: "morning"
  },
  {
    time: "9h00 - 9h50",
    wed: "Call với a kia",
    thu: "Triết học Mác - A8.31",
    fri: "Địa lý đại cương 1 - A1.403",
    sun: "Call với a kia",
    period: "morning"
  },
  {
    time: "10h00 - 10h50",
    thu: "Triết học Mác - A8.31",
    fri: "Địa lý đại cương 1 - A1.403",
    period: "morning"
  },
  {
    time: "11h00 - 11h50",
    thu: "Triết học Mác - A8.31",
    fri: "Địa lý đại cương 1 - A1.403",
    period: "morning"
  },
  {
    time: "13h00 - 13h50",
    mon: "Tiếng Anh 1 - A3.102",
    tue: "Tiếng Anh 1",
    thu: "Tin học cơ sở",
    fri: "Tin học cơ sở - A1.401",
    sat: "Pháp luật đại cương - A8.24",
    period: "afternoon"
  },
  {
    time: "14h00 - 14h50",
    mon: "Tiếng Anh 1 - A3.102",
    tue: "Tiếng Anh 1",
    thu: "Tin học cơ sở",
    fri: "Tin học cơ sở - A1.401",
    sat: "Pháp luật đại cương - A8.24",
    period: "afternoon"
  },
  {
    time: "15h00 - 15h50",
    tue: "Bóng chuyền - Nhà đa năng",
    period: "afternoon"
  },
  {
    time: "16h00 - 16h50",
    tue: "Bóng chuyền - Nhà đa năng",
    period: "afternoon"
  },
  {
    time: "17h00 - 17h50",
    period: "afternoon"
  },
  {
    time: "17h30 - 18h15",
    period: "evening"
  },
  {
    time: "18h15 - 19h00",
    period: "evening"
  },
  {
    time: "19h10 - 19h55",
    period: "evening"
  },
  {
    time: "19h55 - 20h40",
    period: "evening"
  },
];

const days = [
  { key: "mon", label: "Thứ 2", emoji: "💗" },
  { key: "tue", label: "Thứ 3", emoji: "🎀" },
  { key: "wed", label: "Thứ 4", emoji: "🌸" },
  { key: "thu", label: "Thứ 5", emoji: "✨" },
  { key: "fri", label: "Thứ 6", emoji: "🎨" },
  { key: "sat", label: "Thứ 7", emoji: "🌺" },
  { key: "sun", label: "Chủ Nhật", emoji: "💝" },
];

const periods = [
  { 
    key: "morning" as const, 
    label: "Buổi Sáng", 
    icon: Sunrise, 
    gradient: "bg-gradient-morning",
    accentColor: "text-morning-accent"
  },
  { 
    key: "afternoon" as const, 
    label: "Buổi Chiều", 
    icon: Sun, 
    gradient: "bg-gradient-afternoon",
    accentColor: "text-afternoon-accent"
  },
  { 
    key: "evening" as const, 
    label: "Buổi Tối", 
    icon: Moon, 
    gradient: "bg-gradient-evening",
    accentColor: "text-evening-accent"
  },
];

export default function HelloKittyTimetable() {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [activePeriod, setActivePeriod] = useState<string>("all");

  const filteredData = activePeriod === "all" 
    ? timetableData 
    : timetableData.filter(slot => slot.period === activePeriod);

  return (
    <div className="min-h-screen bg-gradient-kitty py-6 px-3 md:py-12 md:px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Header with Image */}
        <div className="relative mb-6 md:mb-12 overflow-hidden rounded-3xl shadow-kitty">
          <img 
            src={bannerImage} 
            alt="Hello Kitty Banner" 
            className="w-full h-40 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3 animate-bounce">
              <Heart className="w-6 md:w-8 h-6 md:h-8 text-white fill-white" />
              <h1 className="text-3xl md:text-6xl font-bold text-white drop-shadow-lg">
                Thời Khóa Biểu Của Liễu
              </h1>
              <Heart className="w-6 md:w-8 h-6 md:h-8 text-white fill-white" />
            </div>
            <p className="text-white text-base md:text-xl font-semibold drop-shadow-md flex items-center gap-2">
              <Sparkles className="w-4 md:w-5 h-4 md:h-5" />
              Lịch học Hello Kitty
              <Sparkles className="w-4 md:w-5 h-4 md:h-5" />
            </p>
          </div>
        </div>

        {/* Period Filter Buttons */}
        <div className="flex flex-wrap gap-2 md:gap-3 justify-center mb-6 md:mb-8">
          <button
            onClick={() => setActivePeriod("all")}
            className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold transition-bounce shadow-card hover:shadow-cute hover:scale-105 ${
              activePeriod === "all"
                ? "bg-gradient-hero text-white"
                : "bg-white text-foreground border-2 border-border"
            }`}
          >
            <Calendar className="w-4 md:w-5 h-4 md:h-5 inline mr-2" />
            Tất cả
          </button>
          {periods.map((period) => {
            const Icon = period.icon;
            return (
              <button
                key={period.key}
                onClick={() => setActivePeriod(period.key)}
                className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full font-semibold transition-bounce shadow-card hover:shadow-cute hover:scale-105 ${
                  activePeriod === period.key
                    ? `${period.gradient} border-2`
                    : "bg-white text-foreground border-2 border-border"
                }`}
              >
                <Icon className="w-4 md:w-5 h-4 md:h-5 inline mr-2" />
                {period.label}
              </button>
            );
          })}
        </div>

        {/* Table View - All Devices */}
        <div className="space-y-6 md:space-y-8">
          {periods.map((period) => {
            const periodData = filteredData.filter((slot) => slot.period === period.key);
            if (periodData.length === 0) return null;

            const Icon = period.icon;
            return (
              <div key={period.key}>
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <Icon className={`w-6 md:w-8 h-6 md:h-8 ${period.accentColor}`} />
                  <h2 className="text-xl md:text-3xl font-bold text-foreground">{period.label}</h2>
                  <div className="flex-1 h-0.5 md:h-1 bg-gradient-hero rounded-full" />
                </div>
                <Card className={`overflow-hidden shadow-cute border-2 border-primary/20 rounded-2xl md:rounded-3xl ${period.gradient}`}>
                  <div className="overflow-x-auto">
                    <table className="w-full text-xs md:text-sm">
                      <thead>
                        <tr className="bg-gradient-hero">
                          <th className="px-2 md:px-4 py-2 md:py-4 text-left text-white font-semibold min-w-[90px] md:min-w-[120px] rounded-tl-xl md:rounded-tl-2xl sticky left-0 bg-primary z-10">
                            <div className="flex items-center gap-1 md:gap-2">
                              <Clock className="w-3 md:w-5 h-3 md:h-5" />
                              <span className="text-xs md:text-base">Giờ</span>
                            </div>
                          </th>
                          {days.map((day, index) => (
                            <th
                              key={day.key}
                              className={`px-2 md:px-4 py-2 md:py-4 text-center text-white font-semibold min-w-[100px] md:min-w-[140px] ${
                                index === days.length - 1 ? "rounded-tr-xl md:rounded-tr-2xl" : ""
                              }`}
                            >
                              <div className="flex flex-col items-center gap-0.5 md:gap-1">
                                <span className="text-base md:text-2xl">{day.emoji}</span>
                                <span className="text-xs md:text-base">{day.label}</span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {periodData.map((slot, index) => (
                          <tr
                            key={index}
                            className="border-t border-white/50 hover:bg-white/20 transition-smooth"
                          >
                            <td className="px-2 md:px-4 py-2 md:py-3 font-bold text-[10px] md:text-sm text-foreground border-r border-white/50 bg-white/60 sticky left-0 z-10">
                              {slot.time}
                            </td>
                            {days.map((day) => {
                              const content = slot[day.key as keyof TimeSlot] as string;
                              const cellId = `${slot.time}-${day.key}`;
                              const isSelected = selectedCell === cellId;
                              return (
                                <td
                                  key={day.key}
                                  onClick={() => content && setSelectedCell(isSelected ? null : cellId)}
                                  className={`px-1.5 md:px-3 py-2 md:py-3 text-center border-r border-white/50 last:border-r-0 transition-bounce ${
                                    content ? "cursor-pointer hover:bg-white/40 active:scale-95" : ""
                                  } ${isSelected ? "bg-white shadow-cute" : ""}`}
                                >
                                  {content && (
                                    <div className={`font-semibold leading-relaxed p-1.5 md:p-2 rounded-lg md:rounded-xl bg-white/70 ${
                                      isSelected ? "bg-white ring-2 ring-primary" : ""
                                    }`}>
                                      {content.split(" - ").map((line, i) => (
                                        <div key={i} className={i > 0 ? "text-[9px] md:text-xs text-muted-foreground mt-0.5 md:mt-1" : "text-[10px] md:text-sm"}>
                                          {line}
                                        </div>
                                      ))}
                                      {isSelected && (
                                        <Heart className="w-3 h-3 md:w-4 md:h-4 text-primary fill-primary animate-pulse mx-auto mt-1" />
                                      )}
                                    </div>
                                  )}
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Footer with cute decorations */}
        <div className="mt-8 md:mt-12 text-center">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Heart className="w-4 md:w-5 h-4 md:h-5 fill-primary animate-pulse" />
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 animate-bounce" />
            <p className="text-base md:text-lg font-semibold">Chúc Liễu học tập vui vẻ!</p>
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 animate-bounce" />
            <Heart className="w-4 md:w-5 h-4 md:h-5 fill-primary animate-pulse" />
          </div>
        </div>
      </div>
    </div>
  );
}
