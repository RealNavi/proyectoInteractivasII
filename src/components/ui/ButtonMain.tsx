interface ButtonProps {
    text: string;
    style: string;
    icon?: string;
    iconClassName?: string;
    type?:"button" |"submit";
<<<<<<< HEAD

    variant?: "outline" | "default";
=======
    onClick?: () => void
>>>>>>> 68b806de0d2a81ec7a6052a9f4d26078edc59c4b
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