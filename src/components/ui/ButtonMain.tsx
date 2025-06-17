interface ButtonProps {
    text: string;
    style: string;
    icon?: string;
    iconClassName?: string;
    type?:"button" |"submit";
}

export default function Button(props: ButtonProps) {
    if (props.icon != null) {
        return (
            <button type={props.type} className={`${props.style}`}><img className={props.iconClassName} src={props.icon} alt={props.text} /></button>
        );
    } else {
        return (
            <button type={props.type} className={`${props.style}`}>{props.text}</button>
        );
    }
}