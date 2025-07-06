import { IconBell, IconDots, IconHourglassHigh, IconNote, IconPillFilled, IconStethoscope, IconTreadmill, IconToolsKitchen2 } from "@tabler/icons-react";
import { type JSX } from "react";

interface NotificationProps {
    icon: string;
    title: string;
    description: string;
    time: string;
    location?: string;
}

export default function Notification(props: NotificationProps) {


    const selectedIcon = (selected: string): JSX.Element => {
    const style = "absolute h-6 w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white";

    switch (selected) {
        case "medicamento":
            return <IconPillFilled className={style} />;
        case "ejercicio":
            return <IconTreadmill className={style} />;
        case "aviso":
            return <IconBell className={style} />;
        case "recordatorio":
            return <IconHourglassHigh className={style} />;
        case "nota":
            return <IconNote className={style} />;
        case "doctor":
            return <IconStethoscope className={style} />;
        case "comida":
            return <IconToolsKitchen2 className={style} />;
        case "otro":
            return <IconDots className={style} />;
        default:
            return <IconPillFilled className={style} />;
    }
    }

    return (
        <div className="grid grid-cols-[15%_60%_25%] gap-3 items-center pt-3">
            <div className="bg-orange-main rounded-full h-9 w-9 p-1.5 relative">
                {selectedIcon(props.icon)}
            </div>
            <div>
                <h3 className="text-sm">{props.title}</h3>
                <p className="text-xs">{props.description} - {props.location}</p>
            </div>
            <div>
                <p className="text-xs">{props.time}</p>
            </div>
        </div>
    );
}