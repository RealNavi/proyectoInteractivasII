interface ButtonProps {
    text: string;
    style: string;
    icon?: string;
    iconClassName?: string;
    type?:"button" |"submit";
    onClick?: () => void
}

export default function ButtonMain(props: ButtonProps) {
    if (props.icon != null) {
        return (
            <button onClick={props.onClick} type={props.type} className={`${props.style}`}><img className={props.iconClassName} src={props.icon} alt={props.text} /></button>
        );
    } else {
        return (
            <button onClick={props.onClick} type={props.type} className={`${props.style}`}>{props.text}</button>
        );
    }
}