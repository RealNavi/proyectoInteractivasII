import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { IconBell, IconDots, IconHourglassHigh, IconNote, IconPillFilled, IconStethoscope, IconTreadmill, IconToolsKitchen2 } from "@tabler/icons-react";

interface ReminderGroupSelector{
    value:string;
    onChange:(value:string)=>void;
}

export default function ReminderGroupSelector(props:ReminderGroupSelector) {

    return (

        <RadioGroup defaultValue={props.value} onValueChange={props.onChange}>
            <div className="flex justify-between items-center py-2">
                <div className={`flex flex-col items-center w-[25%] gap-2 cursor-pointer rounded-md p-2 ${props.value === "medicamento" ? "bg-orange-main text-white" : "text-orange-main"}`}>
                    <RadioGroupItem value="medicamento" id="medicamento" className="sr-only opacity-0" />
                    <label htmlFor="medicamento"><IconPillFilled className="w-7 h-7" /></label>
                    <label htmlFor="medicamento" className="text-xs">Medicamento</label>
                </div>
                <div className={`flex flex-col items-center w-[25%] gap-2 cursor-pointer rounded-md p-2 ${props.value === "ejercicio" ? "bg-orange-main text-white" : "text-orange-main"}`}>
                    <RadioGroupItem value="ejercicio" id="ejercicio" className="sr-only opacity-0" />
                    <label htmlFor="ejercicio"><IconTreadmill className="w-7 h-7" /></label>
                    <label htmlFor="ejercicio" className="text-xs">Ejercicio</label>
                </div>
                <div className={`flex flex-col items-center w-[25%] gap-2 cursor-pointer rounded-md p-2 ${props.value === "aviso" ? "bg-orange-main text-white" : "text-orange-main"}`}>
                    <RadioGroupItem value="aviso" id="aviso" className="sr-only opacity-0" />
                    <label htmlFor="aviso"><IconBell className="w-7 h-7" /></label>
                    <label htmlFor="aviso" className="text-xs">Aviso</label>
                </div>
                <div className={`flex flex-col items-center w-[25%] gap-2 cursor-pointer rounded-md p-2 ${props.value === "recordatorio" ? "bg-orange-main text-white" : "text-orange-main"}`}>
                    <RadioGroupItem value="recordatorio" id="recordatorio" className="sr-only opacity-0" />
                    <label htmlFor="recordatorio"><IconHourglassHigh className="w-7 h-7" /></label>
                    <label htmlFor="recordatorio" className="text-xs">Recordatorio</label>
                </div>
            </div>
            <div className="flex justify-between items-center py-2">
                <div className={`flex flex-col items-center w-[25%] gap-2 cursor-pointer rounded-md p-2 ${props.value === "notas" ? "bg-orange-main text-white" : "text-orange-main"}`}>
                    <RadioGroupItem value="notas" id="notas" className="sr-only opacity-0" />
                    <label htmlFor="notas"><IconNote className="w-7 h-7" /></label>
                    <label htmlFor="notas" className="text-xs">Notas</label>
                </div>
                <div className={`flex flex-col items-center w-[25%] gap-2 cursor-pointer rounded-md p-2 ${props.value === "doctor" ? "bg-orange-main text-white" : "text-orange-main"}`}>
                    <RadioGroupItem value="doctor" id="doctor" className="sr-only opacity-0" />
                    <label htmlFor="doctor"><IconStethoscope className="w-7 h-7" /></label>
                    <label htmlFor="doctor" className="text-xs">Doctor</label>
                </div>
                <div className={`flex flex-col items-center w-[25%] gap-2 cursor-pointer rounded-md p-2 ${props.value === "comida" ? "bg-orange-main text-white" : "text-orange-main"}`}>
                    <RadioGroupItem value="comida" id="comida" className="sr-only opacity-0 " />
                    <label htmlFor="comida"><IconToolsKitchen2 className="w-7 h-7" /></label>
                    <label htmlFor="comida" className="text-xs">Comida</label>
                </div>
                <div className={`flex flex-col items-center w-[25%] gap-2 cursor-pointer rounded-md p-2 ${props.value === "otro" ? "bg-orange-main text-white" : "text-orange-main"}`}>
                    <RadioGroupItem value="otro" id="otro" className="sr-only opacity-0" />
                    <label htmlFor="otro"><IconDots className="w-7 h-7" /></label>
                    <label htmlFor="otro" className="text-xs">Otro</label>
                </div>
            </div>
        </RadioGroup>
    );
}



