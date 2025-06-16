import ProfileAvatar from '../ui/ProfileAvatar';
import LargeWidget from '../ui/LargeWidget';
import MediumWidget from '../ui/MediumWidget';
import Button from '../ui/Button';
import BottonNavBar from '../ui/BottomNavBar';

interface ProfilePageProps {
    name:string;
    id:string;
}

export default function ProfilePage(props: ProfilePageProps) {
    return (
        <section className="bg-cian-main min-h-screen font-comfortaa pb-20" >
            <div className="pt-16 px-10">
                <h1 className="font-comfortaa text-2xl text-white pb-3">Perfil</h1>
            </div>
            <div className="bg-white rounded-t-[2.5rem]">
                <Button text="hola" style='bg-cian-secondary rounded-full h-9 w-9 absolute right-3 top-32' iconClassName='h-auto w-auto p-1.5' icon='./src/assets/configuration.svg' />
                <div className="py-5">
                    <div className="flex gap-3 justify-center items-end pb-3">
                        <ProfileAvatar imageUrl="./src/assets/fotoPerfil2.png" altText="Linked Profile" type='linked'/>
                        <ProfileAvatar imageUrl="./src/assets/fotoPerfil.png" altText="Main Profile" type='main' />
                        <button className="bg-grey-light rounded-full  h-20 w-20">
                            <img className="p-3 rounded-full" src="./src/assets/add.svg" alt="" />
                        </button>
                    </div>
                    <div className="flex flex-col text-center gap-2">
                        <h2 className="font-bold text-lg">{props.name}</h2>
                        <p className="text-xs">{props.id}</p>
                    </div>
                </div>

                <div className="px-10 py-5">
                    <LargeWidget title='Calendario' icon='./src/assets/calendar-cian.svg' />
                </div>


                <div className="grid grid-cols-2 gap-4 px-10 py-5">
                    <MediumWidget title="Medicamentos" icon="./src/assets/medicines-orange.svg" />
                    
                    <MediumWidget title="Registro Médico" icon="./src/assets/medical-record-orange.svg" />
                </div>

                <div className="grid gap-4 px-10 py-5">
                    <Button style='bg-cian-secondary p-3 rounded-lg text-xs' text='Información Personal'/>
                    <Button style='bg-cian-secondary p-3 rounded-lg text-xs' text='Guardado'/>
                    <Button style='bg-cian-secondary p-3 rounded-lg text-xs' text='Notificaciones'/>
                </div>

                <div className="grid gap-4 px-10 py-5">
                    <Button style='bg-cian-secondary p-3 rounded-lg text-xs' text='Ayuda'/>
                    <Button style='bg-cian-secondary p-3 rounded-lg text-xs' text='Sobre Nosotros'/>
                </div>
            </div>
            <BottonNavBar />
        </section>
    );
}

