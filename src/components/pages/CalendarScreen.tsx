import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Calendar } from "@/components/ui/calendar";
import BottonNavBar from "../ui/BottomNavBar";
import Notification from "@/components/ui/Notification";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

interface Reminder {
  icon: string;
  title: string;
  location: string;
  description: string;
  time: string;
}

export default function CalendarScreen() {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const formatDate = (date: Date) => date.toISOString().split("T")[0];

  const { data: reminders, isLoading, isError, error } = useQuery({
    queryKey: ["reminders", date],
    queryFn: async () => {
      if (!date) return [];
      const formattedDate = formatDate(date);
      const res = await fetch(`http://medical.test/api/reminder/index?date=${formattedDate}`);
      if (!res.ok) throw new Error("Error al cargar los recordatorios");
      return res.json();
    },
    enabled: !!date,
  });

  return (
    <section className="bg-cian-main min-h-screen font-comfortaa pb-10">
      <div className="pt-10 px-5 flex justify-between items-center pb-5">
        <Link to="/profile">
          <IconChevronLeft className="h-10 w-10 text-white" />
        </Link>
        <h1 className="font-comfortaa text-2xl text-white">Notificaciones</h1>
      </div>

      <div className="min-h-screen flex flex-col bg-white rounded-t-[2.5rem] pt-10 space-y-10">
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="block w-full max-w-md px-5 mb-10"
            captionLayout="dropdown"
          />
        </div>

        <div className="px-5 pb-20 pt-10 mt-5">
          <h2 className="font-bold text-lg mb-4">
            {date &&
              date.toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              }).charAt(0).toUpperCase() +
              date.toLocaleDateString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric",
              }).slice(1)}
          </h2>

          {isLoading && <p className="text-gray-500">Cargando recordatorios...</p>}
          {isError && <p className="text-red-500">{(error as Error).message}</p>}

          <div className="space-y-4">
            {reminders?.map((reminder: Reminder, index: number) => (
              <Notification
                key={index}
                icon={reminder.icon}
                title={reminder.title}
                location={reminder.location}
                description={reminder.description}
                time={reminder.time}
              />
            ))}
          </div>
        </div>
      </div>

      <BottonNavBar />
    </section>
  );
}
