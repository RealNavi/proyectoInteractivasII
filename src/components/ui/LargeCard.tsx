import Button from "./Button";
import RatingStars from "./RatingStars";
interface LargeCardsProps{
    title:string;
    location:string;
    starLevel:number;
    image:string;
}

export default function LargeCard(props:LargeCardsProps) {

    return (
        <div className="flex pt-3">
            <div className="bg-grey-light w-70 h-40 rounded-2xl">
                <div className="grid grid-cols-2 gap-6 px-3 py-4 h-full">
                    <div className="flex">
                        <img className="object-cover object-center rounded-2xl" src={props.image} alt="Clínica" />
                    </div>
                    <div className="flex flex-col justify-between">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-sm">{props.title}</h3>
                            <p className="text-xs">{props.location}</p>
                            <RatingStars value={props.starLevel}/>
                        </div>
                        <div>
                            <Button style="text-xs rounded-md w-full p-1 bg-orange-light text-white" text="Explorar"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}