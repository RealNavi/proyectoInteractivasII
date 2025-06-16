interface MediumWidgetProps {
    title: string;
    icon: string;
}

export default function MediumWidget(props: MediumWidgetProps) {

    return (
        <div className="h-40 bg-orange-light rounded-3xl">
            <figure className="h-40 overflow-hidden relative">
                <img className="absolute w-40 h-40 top-10 -left-10" src={props.icon} alt={props.title} />
            </figure>
            <p className="text-center text-xs pt-1">{props.title}</p>
        </div>
    );
}