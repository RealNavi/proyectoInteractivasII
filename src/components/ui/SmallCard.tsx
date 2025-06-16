import Button from "./Button";
import RatingStars from "./RatingStars";

interface SmallCardProps{
    picture:string;
    doctor:string;
    area:string;
    starLevel:number;
}

export default function SmallCard(props: SmallCardProps){

    return(
        <div className="bg-grey-light flex w-full h-18 rounded-2xl">
                        <div className="flex w-full gap-2 px-3 py-3">
                            <div className="flex items-center justify-center w-[15%] h-full ">
                                <img className="w-full h-full object-cover object-center rounded-xl" src={props.picture} alt="Doctor1" />
                            </div>
                            <div className="w-[50%] flex flex-col justify-center ">
                                <h3 className="text-xs">{props.doctor}</h3>
                                <p className="text-xs">{props.area}</p>
                                <RatingStars value={props.starLevel}/>
                            </div>
                            <div className="flex items-center justify-center w-[35%]">
                                <Button style="text-xs rounded-xl p-1 bg-orange-light text-white w-[90%] h-[65%] " text="Agendar Cita" />
                            </div>
                        </div>
                    </div>
    );

}