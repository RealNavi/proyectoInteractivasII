import ProfileAvatar from "../ui/ProfileAvatar";
import Button from "../ui/ButtonMain";
import ReminderCard from "../ui/ReminderCard";
import SmallCard from "../ui/SmallCard";
import BottonNavBar from "../ui/BottomNavBar";
import CardSlider from "../ui/CardSlider";
import { Link } from "@tanstack/react-router";

export default function HomePage() {

    return (
        <section className="font-comfortaa pb-20">
            <div className="pt-10 px-5">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="font-extrabold text-xl">¡Hola Ana!</h1>
                        <p className="text-xs">¿Cómo te has sentido hoy?</p>
                    </div>
                    <div>
                        <Link to="/profile"> <ProfileAvatar altText="Ana's Profile" imageUrl="./src/assets/fotoPerfil.png" type="small" /></Link>

                    </div>
                </div>
                <div className="pt-5">
                    <div className="bg-white border-cian-secondary border-5 items-center content-center gap-1 rounded-xl flex px-1 ">
                        <input className="w-[88%] h-full" type="text" />
                        <Button style="bg-cian-tertiary h-9 w-9 rounded-md flex items-center justify-center relative p-1.5 my-1" text="" icon="./src/assets/search.svg" iconClassName="w-8" />
                    </div>
                </div>
            </div>

            <div className="px-5 pt-10">
                <h2 className="text-sm">Próximos recordatorios</h2>
                <div className="flex justify-between pt-3">
                    <ReminderCard icon="./src/assets/pill.svg" />
                    <ReminderCard icon="./src/assets/exercise.svg" />
                    <ReminderCard icon="./src/assets/note.svg" />
                </div>
            </div>

            <div className="px-5 pt-10">
                <h2 className="text-sm">Categorías</h2>
                <div className="flex gap-2 py-3">
                    <Button style="h-14 w-14 bg-cian-tertiary rounded-2xl p-3 flex items-center justify-center" text="" icon="./src/assets/health.svg" />
                    <Button style="h-14 w-14 bg-cian-tertiary rounded-2xl p-3 flex items-center justify-center" text="" icon="./src/assets/health.svg" />
                    <Button style="h-14 w-14 bg-cian-tertiary rounded-2xl p-3 flex items-center justify-center" text="" icon="./src/assets/health.svg" />
                    <Button style="h-14 w-14 bg-cian-tertiary rounded-2xl p-3 flex items-center justify-center" text="" icon="./src/assets/health.svg" />
                    <Button style="h-14 w-14 bg-cian-tertiary rounded-2xl p-3 flex items-center justify-center" text="" icon="./src/assets/health.svg" />
                    <Button style="h-14 w-14 bg-cian-tertiary rounded-2xl p-3 flex items-center justify-center" text="" icon="./src/assets/health.svg" />
                </div>
                <Button style="bg-cian-secondary text-white text-xs p-2 rounded-xl w-full font-bold" text="Ver más" />
            </div>

            <div className="pt-10">
                <div className="flex justify-between items-center px-5">
                    <h2 className="text-sm">Clínicas populares</h2>
                    <button className="text-cian-main text-xs">Mostrar todas</button>
                </div>

                <div className="flex pt-3">
                    <CardSlider />
                </div>
            </div>

            <div className="px-5 pt-10">
                <div className="flex justify-between items-center ">
                    <h2 className="text-sm">Doctores populares</h2>
                    <button className="text-cian-main text-xs">Mostrar todos</button>
                </div>
                <div className="flex flex-col gap-3 pt-3">
                    <SmallCard area="Médico General" doctor="Mariana Durán Fuentes" picture="./src/assets/doctor1.jpeg" starLevel={5} />
                    <SmallCard area="Médico General" doctor="Juana Mora Valverde" picture="./src/assets/doctor2.jpg" starLevel={4.5} />
                    <SmallCard area="Médico General" doctor="Fabián Castro López" picture="./src/assets/doctor3.jpg" starLevel={3} />
                    <SmallCard area="Médico General" doctor="Karen Alvarado Vargas" picture="./src/assets/doctor4.jpeg" starLevel={1.5} />
                </div>
            </div>
            <BottonNavBar />
        </section>
    );
}