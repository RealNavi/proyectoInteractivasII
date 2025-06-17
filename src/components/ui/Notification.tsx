import { IconBell, IconDots, IconHourglassHigh, IconNote, IconPillFilled, IconStethoscope, IconTreadmill, IconToolsKitchen2 } from "@tabler/icons-react";
import { type JSX } from "react";

interface NotificationProps {
    icon: string;
    title: string;
    description: string;
    time: string;
    location?: string;
    color: 'cian-main' | 'orange-light' | 'cian-secondary' | 'orange-main';
}

export default function Notification(props: NotificationProps) {

    let iconStyleClass = 'bg-' + props.color + ' rounded-full h-9 w-9 p-1.5 relative';

    const selectedIcon = (selected: string): JSX.Element => {
    const baseClass = "absolute h-6 w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white";

    switch (selected) {
        case "medicamento":
            return <IconPillFilled className={baseClass} />;
        case "ejercicio":
            return <IconTreadmill className={baseClass} />;
        case "aviso":
            return <IconBell className={baseClass} />;
        case "recordatorio":
            return <IconHourglassHigh className={baseClass} />;
        case "nota":
            return <IconNote className={baseClass} />;
        case "doctor":
            return <IconStethoscope className={baseClass} />;
        case "comida":
            return <IconToolsKitchen2 className={baseClass} />;
        case "otro":
            return <IconDots className={baseClass} />;
        default:
            return <IconPillFilled className={baseClass} />;
    }
    }

    return (
        <div className="grid grid-cols-[10%_80%_10%] gap-3 items-center pt-3">
            <div className={iconStyleClass}>
                {selectedIcon(props.icon)}
            </div>
            <div>
                <h3 className="text-sm">{props.title}</h3>
                <p className="text-xs">{props.description} {props.location}</p>
            </div>
            <div>
                <p className="text-xs">{props.time}</p>
            </div>
        </div>
    );
}