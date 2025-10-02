import { Card } from "@/components/ui/card";
import { Calendar, Clock } from "lucide-react";

interface TimeSlot {
  time: string;
  mon?: string;
  tue?: string;
  wed?: string;
  thu?: string;
  fri?: string;
  sat?: string;
  sun?: string;
  color?: string;
}

const timetableData: TimeSlot[] = [
  {
    time: "7h00 - 7h50",
    thu: "Tin học cơ sở - A5-05",
    fri: "Địa chất học - A3.304",
    color: "yellow"
  },
  {
    time: "8h00 - 8h50",
    thu: "Tin học cơ sở - A5-05",
    fri: "Địa chất học - A3.304",
    color: "yellow"
  },
  {
    time: "9h00 - 9h50",
    wed: "Call với a kia",
    thu: "Triết học Mác - A8.31",
    fri: "Địa lý đại cương 1 - A1.403",
    sun: "Call với a kia",
    color: "yellow"
  },
  {
    time: "10h00 - 10h50",
    thu: "Triết học Mác - A8.31",
    fri: "Địa lý đại cương 1 - A1.403",
    color: "yellow"
  },
  {
    time: "11h00 - 11h50",
    thu: "Triết học Mác - A8.31",
    fri: "Địa lý đại cương 1 - A1.403",
    color: "yellow"
  },
  {
    time: "13h00 - 13h50",
    mon: "Tiếng Anh 1 - A3.102",
    tue: "Tiếng Anh 1",
    thu: "Tin học cơ sở",
    fri: "Tin học cơ sở - A1.401",
    sat: "Pháp luật đại cương - A8.24",
    color: "blue"
  },
  {
    time: "14h00 - 14h50",
    mon: "Tiếng Anh 1 - A3.102",
    tue: "Tiếng Anh 1",
    thu: "Tin học cơ sở",
    fri: "Tin học cơ sở - A1.401",
    sat: "Pháp luật đại cương - A8.24",
    color: "blue"
  },
  {
    time: "15h00 - 15h50",
    tue: "Bóng chuyền - Nhà đa năng",
    color: "blue"
  },
  {
    time: "16h00 - 16h50",
    tue: "Bóng chuyền - Nhà đa năng",
    color: "blue"
  },
  {
    time: "17h00 - 17h50",
    color: "blue"
  },
  {
    time: "17h30 - 18h15",
    color: "green"
  },
  {
    time: "18h15 - 19h00",
    color: "green"
  },
  {
    time: "19h10 - 19h55",
    color: "green"
  },
  {
    time: "19h55 - 20h40",
    color: "green"
  },
];

const days = [
  { key: "mon", label: "Thứ 2" },
  { key: "tue", label: "Thứ 3" },
  { key: "wed", label: "Thứ 4" },
  { key: "thu", label: "Thứ 5" },
  { key: "fri", label: "Thứ 6" },
  { key: "sat", label: "Thứ 7" },
  { key: "sun", label: "Chủ Nhật" },
];

const getColorClass = (color?: string) => {
  switch (color) {
    case "yellow":
      return "bg-subject-yellow border-yellow-300";
    case "blue":
      return "bg-subject-blue border-blue-300";
    case "green":
      return "bg-subject-green border-green-300";
    case "pink":
      return "bg-subject-pink border-pink-300";
    case "purple":
      return "bg-subject-purple border-purple-300";
    case "orange":
      return "bg-subject-orange border-orange-300";
    default:
      return "bg-white border-border";
  }
};

export default function Timetable() {
  return (
    <div className="min-h-screen bg-gradient-primary py-8 px-4 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <Calendar className="w-8 h-8 text-primary animate-bounce" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              Thời Khóa Biểu
            </h1>
            <Calendar className="w-8 h-8 text-primary animate-bounce" />
          </div>
          <p className="text-muted-foreground text-lg">Lịch học của bạn trong tuần 💖</p>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <Card className="overflow-hidden shadow-cute border-2 border-primary/20 rounded-3xl">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-hero">
                    <th className="px-4 py-4 text-left text-white font-semibold min-w-[120px] rounded-tl-2xl">
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5" />
                        Thời gian
                      </div>
                    </th>
                    {days.map((day, index) => (
                      <th
                        key={day.key}
                        className={`px-4 py-4 text-center text-white font-semibold min-w-[140px] ${
                          index === days.length - 1 ? 'rounded-tr-2xl' : ''
                        }`}
                      >
                        {day.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {timetableData.map((slot, index) => (
                    <tr
                      key={index}
                      className="border-t border-border hover:bg-accent/30 transition-smooth"
                    >
                      <td className="px-4 py-3 font-medium text-sm text-foreground border-r border-border bg-secondary/50">
                        {slot.time}
                      </td>
                      {days.map((day) => {
                        const content = slot[day.key as keyof TimeSlot] as string;
                        return (
                          <td
                            key={day.key}
                            className={`px-3 py-3 text-sm text-center border-r border-border last:border-r-0 ${getColorClass(
                              slot.color
                            )}`}
                          >
                            {content && (
                              <div className="font-medium leading-relaxed">
                                {content.split(" - ").map((line, i) => (
                                  <div key={i} className={i > 0 ? "text-xs text-muted-foreground mt-1" : ""}>
                                    {line}
                                  </div>
                                ))}
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

        {/* Mobile View - Day Cards */}
        <div className="lg:hidden space-y-6">
          {days.map((day) => {
            const daySchedule = timetableData.filter(
              (slot) => slot[day.key as keyof TimeSlot]
            );

            if (daySchedule.length === 0) return null;

            return (
              <Card
                key={day.key}
                className="overflow-hidden shadow-cute border-2 border-primary/20 rounded-3xl"
              >
                <div className="bg-gradient-hero px-6 py-4">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {day.label}
                  </h2>
                </div>
                <div className="p-4 space-y-3">
                  {daySchedule.map((slot, index) => {
                    const content = slot[day.key as keyof TimeSlot] as string;
                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-2xl border-2 ${getColorClass(
                          slot.color
                        )} transition-smooth hover:scale-[1.02] hover:shadow-card`}
                      >
                        <div className="flex items-start gap-3">
                          <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <div className="font-bold text-sm text-foreground mb-1">
                              {slot.time}
                            </div>
                            <div className="text-sm font-medium leading-relaxed">
                              {content.split(" - ").map((line, i) => (
                                <div key={i} className={i > 0 ? "text-xs text-muted-foreground mt-1" : ""}>
                                  {line}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          {[
            { color: "yellow", label: "Môn chính" },
            { color: "blue", label: "Kỹ năng" },
            { color: "green", label: "Tự học" },
          ].map((item) => (
            <div
              key={item.color}
              className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-card border-2 border-primary/10"
            >
              <div className={`w-4 h-4 rounded-full ${getColorClass(item.color)}`} />
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
