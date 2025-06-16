interface NotificationProps {
    icon: string;
    title: string;
    description: string;
    time: string;
    location?: string;
    color: 'cian-main' | 'orange-light' | 'cian-secondary' | 'orange-main';
}

export default function Notification(props: NotificationProps) {

    let iconStyleClass = 'bg-' + props.color +  ' rounded-full h-9 w-9 p-1.5 relative';

    return (
        <div className="grid grid-cols-[10%_80%_10%] gap-3 items-center pt-3">
            <div className={iconStyleClass}>
                <img className="absolute h-6 w-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src={props.icon} alt="notification icon" />
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