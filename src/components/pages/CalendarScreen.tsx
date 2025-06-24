import React from "react";
import { Calendar } from "@/components/ui/calendar";
import BottonNavBar from "../ui/BottomNavBar";
import Notification from "@/components/ui/Notification";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";

export default function CalendarScreen() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  return (
    <section>
      {/* Header */}
      <div className="bg-white flex flex-col pt-5 ">
        <div className="flex justify-between pt-6 pr-10 pb-3 items-center ">
          <Link to="/profile">
            <IconChevronLeft className="ml-5 h-10 w-10 text-black" />
          </Link>
          <h1 className="font-comfortaa text-2xl text-black">Medicamentos</h1>
        </div>

        {/* Calendario */}
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="display-block w-full max-w-md z-1 pt-10"
          captionLayout="dropdown"
        />
      </div>

      {/* Notificaciones */}
      <div className="w-full px-4 pt-40 pb-30 overflow-hidden">
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
      <BottonNavBar />
    </section>
  );
}
