import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, Sparkles, Heart } from "lucide-react";
import bannerImage from "@/assets/hello-kitty-banner.jpg";

interface TimeSlot {
  period: number;
  time: string;
  mon?: string;
  tue?: string;
  wed?: string;
  thu?: string;
  fri?: string;
  sat?: string;
  sun?: string;
}

const timetableData: TimeSlot[] = [
  {
    period: 1,
    time: "7h00 - 7h50",
    thu: "Tin học cơ sở - A5-05",
    fri: "Địa chất học - A3.304",
  },
  {
    period: 2,
    time: "8h00 - 8h50",
    thu: "Tin học cơ sở - A5-05",
    fri: "Địa chất học - A3.304",
  },
  {
    period: 3,
    time: "9h00 - 9h50",
    wed: "Call với a kia",
    thu: "Triết học Mác - A8.31",
    fri: "Địa lý đại cương 1 - A1.403",
    sun: "Call với a kia",
  },
  {
    period: 4,
    time: "10h00 - 10h50",
    thu: "Triết học Mác - A8.31",
    fri: "Địa lý đại cương 1 - A1.403",
  },
  {
    period: 5,
    time: "11h00 - 11h50",
    thu: "Triết học Mác - A8.31",
    fri: "Địa lý đại cương 1 - A1.403",
  },
  {
    period: 6,
    time: "13h00 - 13h50",
    mon: "Tiếng Anh 1 - A3.102",
    tue: "Tiếng Anh 1",
    thu: "Tin học cơ sở",
    fri: "Tin học cơ sở - A1.401",
    sat: "Pháp luật đại cương - A8.24",
  },
  {
    period: 7,
    time: "14h00 - 14h50",
    mon: "Tiếng Anh 1 - A3.102",
    tue: "Tiếng Anh 1",
    thu: "Tin học cơ sở",
    fri: "Tin học cơ sở - A1.401",
    sat: "Pháp luật đại cương - A8.24",
  },
  {
    period: 8,
    time: "15h00 - 15h50",
    tue: "Bóng chuyền - Nhà đa năng",
  },
  {
    period: 9,
    time: "16h00 - 16h50",
    tue: "Bóng chuyền - Nhà đa năng",
  },
  {
    period: 10,
    time: "17h00 - 17h50",
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

const getCurrentDayInVietnam = () => {
  const vietnamTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Ho_Chi_Minh"
  });
  const date = new Date(vietnamTime);
  const day = date.getDay();

  const dayMapping: { [key: number]: string } = {
    1: "mon",
    2: "tue",
    3: "wed",
    4: "thu",
    5: "fri",
    6: "sat",
    0: "sun"
  };

  return dayMapping[day];
};

const getCurrentTimeInVietnam = () => {
  const vietnamTime = new Date().toLocaleString("en-US", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  return vietnamTime;
};

export default function HelloKittyTimetable() {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [currentDay, setCurrentDay] = useState<string>(getCurrentDayInVietnam());
  const [currentTime, setCurrentTime] = useState<string>(getCurrentTimeInVietnam());

  useEffect(() => {
    setCurrentDay(getCurrentDayInVietnam());
    setCurrentTime(getCurrentTimeInVietnam());

    const interval = setInterval(() => {
      setCurrentDay(getCurrentDayInVietnam());
      setCurrentTime(getCurrentTimeInVietnam());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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

        <div className="flex justify-center mb-4 md:mb-6">
          <div className="bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-cute border-2 border-primary/30">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-primary animate-pulse" />
              <span className="text-lg md:text-2xl font-bold text-primary">{currentTime}</span>
            </div>
          </div>
        </div>

        <Card className="overflow-hidden shadow-cute border-2 border-primary/20 rounded-2xl md:rounded-3xl bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
          <div className="overflow-x-auto">
            <table className="w-full text-xs md:text-sm">
              <thead>
                <tr className="bg-gradient-hero">
                  <th className="px-2 md:px-4 py-2 md:py-4 text-center text-white font-semibold min-w-[50px] md:min-w-[70px] sticky left-0 bg-primary z-10">
                    <span className="text-xs md:text-base">Tiết</span>
                  </th>
                  <th className="px-2 md:px-4 py-2 md:py-4 text-left text-white font-semibold min-w-[90px] md:min-w-[120px] sticky left-[50px] md:left-[70px] bg-primary z-10">
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
                      } ${currentDay === day.key ? "bg-gradient-to-b from-yellow-400 to-pink-500" : ""}`}
                    >
                      <div className="flex flex-col items-center gap-0.5 md:gap-1">
                        <span className="text-base md:text-2xl">{day.emoji}</span>
                        <span className="text-xs md:text-base">{day.label}</span>
                        {currentDay === day.key && (
                          <div className="flex items-center gap-1 mt-1">
                            <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="text-[10px] md:text-xs font-bold">Hôm nay</span>
                          </div>
                        )}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {timetableData.map((slot, index) => (
                  <tr
                    key={index}
                    className="hover:bg-white/20 transition-smooth"
                  >
                    <td className="px-2 md:px-4 py-2 md:py-3 font-bold text-sm md:text-base text-foreground border-r border-white/50 bg-gradient-to-r from-pink-100 to-purple-100 sticky left-0 z-10 text-center">
                      {slot.period}
                    </td>
                    <td className="px-2 md:px-4 py-2 md:py-3 font-bold text-[10px] md:text-sm text-foreground border-r border-white/50 bg-white/60 sticky left-[50px] md:left-[70px] z-10">
                      {slot.time}
                    </td>
                    {days.map((day) => {
                      const content = slot[day.key as keyof TimeSlot] as string;
                      const cellId = `${slot.time}-${day.key}`;
                      const isSelected = selectedCell === cellId;
                      const isCurrentDay = currentDay === day.key;
                      return (
                        <td
                          key={day.key}
                          onClick={() => content && setSelectedCell(isSelected ? null : cellId)}
                          className={`px-1.5 md:px-3 py-2 md:py-3 text-center border-r border-white/50 last:border-r-0 transition-bounce ${
                            content ? "cursor-pointer hover:bg-white/40 active:scale-95" : ""
                          } ${isSelected ? "bg-white shadow-cute" : ""} ${
                            isCurrentDay ? "bg-gradient-to-b from-yellow-100/80 to-pink-100/80" : ""
                          }`}
                        >
                          {content && (
                            <div className={`font-semibold leading-relaxed p-1.5 md:p-2 rounded-lg md:rounded-xl ${
                              isCurrentDay ? "bg-gradient-to-br from-yellow-200 to-pink-200 ring-2 ring-yellow-400" : "bg-white/70"
                            } ${
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
