interface BackgroundLoginProps {
    image: string;
    style: string;
}

export default function BackgroundLogin(props: BackgroundLoginProps) {
<<<<<<< HEAD

    return (
        <div className={props.style}>
            <img src={props.image} alt="image" />
=======
    return (
        <div className={props.style}>
            <img src={props.image} alt="imagen" />
>>>>>>> 68b806de0d2a81ec7a6052a9f4d26078edc59c4b
        </div>
    );
}