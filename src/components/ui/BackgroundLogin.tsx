interface BackgroundLoginProps {
    image: string;
    style: string;
}

export default function BackgroundLogin(props: BackgroundLoginProps) {
    return (
        <div className={props.style}>
            <img src={props.image} alt="imagen" />
        </div>
    );
}