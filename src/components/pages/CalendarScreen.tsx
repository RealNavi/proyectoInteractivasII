import React from "react";
import { Calendar } from "@/components/ui/calendar";
import BottonNavBar from "../ui/BottomNavBar";
import Notification from "@/components/ui/Notification";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function CalendarScreen() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <section className="bg-cian-main min-h-screen font-comfortaa pb-10">
      <div className="pt-10 px-5 flex justify-between items-center pb-5">
        <Link to="/profile"><IconChevronLeft className='h-10 w-10 text-white' /></Link>
        <h1 className="font-comfortaa text-2xl text-white">Notificaciones</h1>
      </div>
      <div className="min-h-screen flex flex-col bg-white rounded-t-[2.5rem] pt-10 space-y-10">
        <div>
          {/* Calendario */}
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="block w-full max-w-md px-5 mb-10"
            captionLayout="dropdown"
          />
        </div>
        {/* Notificaciones */}
        <div className="px-5 pb-20 pt-10 mt-5 outline">
          <h2 className="font-bold text-lg mb-4">
            {/* Estructurar la fecha */}
            {date &&
              date
                //Esto solo muestra la primera letra en mayúscula
                .toLocaleDateString("es-ES", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
                .charAt(0)
                .toUpperCase()
              //Esto muestra el resto de la fecha en minúscula y elimina la primera letra
              +
              date
                .toLocaleDateString("es-ES", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })
                .slice(1)}
          </h2>
          <div className="space-y-4">
            <Notification
              icon="medicina"
              title="Tomar pastilla de la mañana"
              description="1 Trayenta - 1/2 Venlafaxina - 1 Xarelto"
              time="8:00 a. m."
              color="orange-main"
            />
            <Notification
              icon="doctor"
              title="Cita Dr. Fernández"
              description="Cita en la clínica Momentum, Escazú."
              time="12:00 m. d."
              color="cian-main"
            />
            <Notification
              icon="ejercicio"
              title="Hacer ejercicios rodilla"
              description="Hacer 3 series de cada ejercicio."
              time="6:00 p. m."
              color="cian-secondary"
            />
            <Notification
              icon="medicina"
              title="Tomar pastilla de la noche"
              description="1 Trayenta - 1/2 Venlafaxina - 1 Xarelto"
              time="8:00 p. m."
              color="orange-main"
            />
          </div>
        </div>
      </div>
      <BottonNavBar />
    </section>
  );
}
