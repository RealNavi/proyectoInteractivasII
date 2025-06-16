interface SmallWidgetProps {
    title: string;
    icon: string;
}
export default function SmallWidget(props: SmallWidgetProps) {

    return (
        <div className=" size-28 rounded-3xl bg-orange-light border-8 border-orange-main p-5 flex items-center justify-center">
            <img src={props.icon} alt={props.title} />
        </div>
    );
}
