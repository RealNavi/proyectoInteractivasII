import Button from "./Button";
import ReminderGroupSelector from "./ReminderGroupSelector";
interface NewReminderProps {
    onClose: () => void;
}
export default function NewReminder(props: NewReminderProps) {


    return (
        <>
        <div onClick={props.onClose} className="fixed inset-0 bg-black/50 z-10">
            
        </div>
        <section className="fixed mt-50 inset-0 h-screen bg-white z-10 rounded-t-4xl font-comfortaa items-end ">
            <div className=" w-full max-h-[90vh] overflow-y-auto px-5 pb-5">
                <div className="flex justify-between items-center pt-5">
                    <button type="button" onClick={props.onClose} className="text-xs">Cancelar</button>
                    <h1 className="text-sm">Nuevo Recordatorio</h1>
                    <Button type="button" style="bg-cian-secondary w-12 h-12 rounded-full p-2" icon="../src/assets/calendar-cian.svg" text="Calendar"/>
                </div>
                <form className="pt-5 flex flex-col mb-50">
                    <ReminderGroupSelector />
                    <div className="flex flex-col gap-3 pt-7">
                        <input className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" defaultValue="Titulo" type="text" />
                        <input className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" defaultValue="Detalle" type="text" />
                        <input className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" defaultValue="Agregar Ubicación" type="text" />
                    </div>
                    <div className="flex flex-col gap-3 pt-7">
                        <input placeholder="Fecha" className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" type="date" />
                        <input placeholder="Hora" className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" type="time" />
                    </div>
                    <div className="flex flex-col pt-7">
                        <input className="bg-cian-secondary h-10 rounded-lg text-sm text-black/50 px-4" defaultValue="Repetir" type="text" />
                    </div>
                    <div className="flex justify-center">
                        <Button style="bg-orange-main text-white text-xs py-3 mt-10 rounded-lg w-[50%]" text="Crear"/>
                    </div>
                </form>
            </div>
        </section>
        </>
    );
}