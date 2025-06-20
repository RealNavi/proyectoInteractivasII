import React, { useState } from "react";
import Button from "./ButtonMain";
import ReminderGroupSelector from "./ReminderGroupSelector";

interface NewReminderProps {
    onClose: () => void;
    onSubmit: (formData: ReminderFormData) => void;
}

interface ReminderFormData {
    icon: "medicamento" | "ejercicio" | "aviso" | "recordatorio" | "notas" | "doctor" | "comida" | "otro";
    title: string;
    description: string;
    location: string;
    date: string;
    hour: string;
    repeat: string;
}

export default function NewReminder(props: NewReminderProps) {
    
    const [formData, setFormData] = useState<ReminderFormData>({
        icon: "medicamento",
        title: "",
        description: "",
        location: "",
        date: "",
        hour: "",
        repeat: ""
    });

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        props.onSubmit(formData);
    }
    return (
        <>
            <div onClick={props.onClose} className="fixed inset-0 bg-black/50 z-10">

            </div>
            <section className="fixed mt-50 inset-0 h-screen bg-white z-10 rounded-t-4xl font-comfortaa items-end ">
                <div className=" w-full max-h-[90vh] overflow-y-auto px-5 pb-5">
                    <div className="flex justify-between items-center pt-5">
                        <button type="button" onClick={props.onClose} className="text-xs">Cancelar</button>
                        <h1 className="text-sm">Nuevo Recordatorio</h1>
                        <Button type="button" style="bg-cian-secondary w-12 h-12 rounded-full p-2" icon="../src/assets/calendar-cian.svg" text="Calendar" />
                    </div>
                    <form onSubmit={handleSubmit} className="pt-5 flex flex-col mb-50">
                        <ReminderGroupSelector value={formData.icon} onChange={(value) => setFormData((prev) => ({
                            ...prev, icon: value as ReminderFormData["icon"],})
                            )} />
                        <div className="flex flex-col gap-3 pt-7">
                            <input className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" placeholder="Titulo" value={formData.title} onChange={(e)=> setFormData({...formData,title:e.target.value})} type="text"  required/>
                            <input className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" placeholder="Descripcion" value={formData.description} onChange={(e)=> setFormData({...formData, description : e.target.value})} type="text" required />
                            <input className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" placeholder="Ubicacion (Opcional)" value={formData.location} onChange={(e)=> setFormData({...formData, location : e.target.value})} type="text" />
                        </div>
                        <div className="flex flex-col gap-3 pt-7">
                            <input placeholder="Fecha" className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" value={formData.date} onChange={(e)=> setFormData({...formData, date : e.target.value})} type="date" required />
                            <input placeholder="Hora" className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4"  value={formData.hour} onChange={(e)=> setFormData({...formData, hour : e.target.value})} type="time" required />
                        </div>
                        <div className="flex flex-col pt-7">
                            <input className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4"  value={formData.repeat} onChange={(e)=> setFormData({...formData, repeat : e.target.value})} type="text" />
                        </div>
                        <div className="flex justify-center">
                            <Button style="bg-orange-main text-white text-xs py-3 mt-10 rounded-lg w-[50%]" text="Crear" />
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}