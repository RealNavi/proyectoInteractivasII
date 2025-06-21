import { Link } from '@tanstack/react-router';
import { IconChevronLeft } from '@tabler/icons-react';

export default function ConfigNotificationsPage() {

    return (
        <section>
            <div className="text-center font-comfortaa pt-10 space-y-5 px-5">
                <div className='flex justify-between items-center pb-10'>
                    <Link to="/settings"><IconChevronLeft className='h-5 w-5 text-black' /></Link>
                    <h1 className="text-xl">Configurar notificaciones</h1>
                </div>
                <div className='text-sm space-y-5'>
                <p className="">Esta página permitirá realizar cambios, ajustar y personalizar las notificaciones</p>
                <p>Para efectos del proyecto no se implementará esta página puesto que las configuraciones correspondientes
                    no tendrán funcionalidad.</p>
                </div>
            </div>
        </section>
    );
}