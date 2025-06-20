import { Link } from '@tanstack/react-router';
import ProfileAvatar from '../ui/ProfileAvatar';
import LargeWidget from '../ui/LargeWidget';
import MediumWidget from '../ui/MediumWidget';
import ButtonMain from '../ui/ButtonMain';
import BottonNavBar from '../ui/BottomNavBar';
import { IconSettings } from '@tabler/icons-react';

interface ProfilePageProps {
    name: string;
    id: string;
}

export default function ProfilePage(props: ProfilePageProps) {
    return (
        <section className="bg-cian-main min-h-screen font-comfortaa pb-20" >
            <div className="pt-16 px-10">
                <h1 className="font-comfortaa text-2xl text-white pb-3">Perfil</h1>
            </div>
            <div className="bg-white rounded-t-[2.5rem]">
                <Link to="/settings"><ButtonMain text="" style='' /><IconSettings className='bg-cian-secondary rounded-full h-9 w-9 absolute right-3 top-32 text-white p-1' /></Link>

                <div className="py-5">
                    <div className="flex gap-3 justify-center items-end pb-3">
                        <ProfileAvatar imageUrl="./src/assets/fotoPerfil2.png" altText="Linked Profile" type='linked' />
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
                    <Link to="/medicines"><MediumWidget title="Medicamentos" icon="./src/assets/medicines-orange.svg" /></Link>
                    <Link to="/medicalregister"><MediumWidget title="Registro Médico" icon="./src/assets/medical-record-orange.svg" /></Link>
                </div>

                <div className="grid gap-4 px-10 py-5">
                    <ButtonMain style='bg-cian-secondary p-3 rounded-lg text-xs' text='Información Personal' />
                    <ButtonMain style='bg-cian-secondary p-3 rounded-lg text-xs' text='Guardado' />
                    <ButtonMain style='bg-cian-secondary p-3 rounded-lg text-xs' text='Notificaciones' />
                </div>

                <div className="grid gap-4 px-10 py-5">
                    <ButtonMain style='bg-cian-secondary p-3 rounded-lg text-xs' text='Ayuda' />
                    <ButtonMain style='bg-cian-secondary p-3 rounded-lg text-xs' text='Sobre Nosotros' />
                </div>
            </div>
            <BottonNavBar />
        </section>
    );
}

