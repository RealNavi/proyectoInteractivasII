interface LargeWidgetProps {
    title: string;
    icon: string;
}

export default function LargeWidget(props: LargeWidgetProps) {

    return (
        <div>
            <figure className="overflow-hidden h-40 bg-cian-secondary rounded-3xl relative">
                <img className="h-40 w-50 absolute top-10 -left-2 z-1" src={props.icon} alt={props.title} />
                <p className="relative text-end pt-30 text-4xl font-extrabold text-white pr-2 pb-2 z-10">{props.title}</p>
            </figure>
        </div>
    );
}