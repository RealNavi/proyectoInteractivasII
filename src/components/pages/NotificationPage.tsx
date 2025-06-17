import BottonNavBar from "../ui/BottomNavBar";
import Notification from "../ui/Notification";
import React,{useState } from "react";

interface NotificationPageProps {
    icon:string;
    title:string;
    description:string
    time: string;
    color:string;
}

export default function NotificationPage() {
    const [notification,setNotifications] = useState<NotificationPageProps>({
        icon:"",
        title:"",
        description:"",
        time:"",
        color:""
    });




    return (

        <section className="bg-cian-main min-h-screen font-comfortaa pb-20">
            <div className="pt-10 px-10">
                <h1 className="font-comfortaa text-2xl text-white pb-3">Notificaciones</h1>
            </div>
            <div className="bg-white rounded-t-[2.5rem] h-screen px-10">
                <div>
                    <h2 className="font-bold text-lg pt-10 mb-2">Hoy</h2>
                    <div className="py-3">
                        <Notification icon="doctor"
                            title="Cita con el Dr. Jiménez Medraña"
                            description="Se ha agendado la cita."
                            time='1h'
                            color="cian-main" />
                        <Notification icon="medicina"
                            title="Cita con el Dr. Jiménez Medraña"
                            description="Se ha agendado la cita."
                            time='1h'
                            color="orange-light" />
                    </div>
                </div>
                <div>
                    <h2 className="font-bold text-lg pt-10 mb-2">Ayer</h2>
                    <div className="py-3">
                        <Notification icon="ejercicio"
                            title="Cita con el Dr. Jiménez Medraña"
                            description="Se ha agendado la cita."
                            time="1d"
                            color="cian-secondary" />
                    <Notification icon="nota"
                        title="Cita con el Dr. Jiménez Medraña"
                        description="Se ha agendado la cita."
                        time="1d"
                        color="orange-main" />
                    </div>
                </div>
            </div>
            <BottonNavBar />
        </section>
    );
}