import { Link } from '@tanstack/react-router';
import ButtonMain from '../ui/ButtonMain';
import BottonNavBar from '../ui/BottomNavBar';
import { IconChevronLeft } from '@tabler/icons-react';

export default function SettingsPage() {
  return (
    <section className="min-h-screen font-comfortaa pb-20" >
      <div className="min-h-screen bg-white flex flex-col pt-5">
        <div className="flex justify-between pt-6 pr-10 pb-3 items-center ">
          <Link to="/profile"><IconChevronLeft className='ml-5 h-10 w-10 text-black' /></Link>
          <h1 className="font-comfortaa text-2xl text-black">Configuración</h1>
        </div>
        <section className="flex flex-col space-y-6 px-6 mt-4">
          {/* Ajustes */}
          <div className="pb-10 text-xs">
            <h2 className="text-xs text-black font-bold mb-2">Ajustes</h2>
            <ButtonMain style="w-full bg-grey-light py-3 pl-13 rounded-xl text-left" text='Notificaciones'></ButtonMain>
          </div>

          {/* Aplicación */}
          <div className="pb-10">
            <h2 className="text-xs text-black font-bold mb-2">Aplicación</h2>
            <div className="space-y-5 text-xs">
              <ButtonMain style="w-full bg-grey-light py-3 pl-13 rounded-xl text-left" text='Ayuda'></ButtonMain>
              <ButtonMain style="w-full bg-grey-light py-3 pl-13 rounded-xl text-left" text='Reportar un problema'></ButtonMain>
              <ButtonMain style="w-full bg-grey-light py-3 pl-13 rounded-xl text-left" text='Políticas y condiciones'></ButtonMain>
            </div>
          </div>

          {/* Cuenta */}
          <div>
            <h2 className="text-xs text-black font-bold mb-2">Cuenta</h2>
            <div className="space-y-5 text-xs">
              <ButtonMain style="w-full bg-grey-light py-3 pl-13 rounded-xl text-left" text='Información Personal'></ButtonMain>
              <ButtonMain style="w-full bg-grey-light py-3 pl-13 rounded-xl text-left" text='Recuperar Contraseña'></ButtonMain>
              <ButtonMain style="w-full bg-grey-light py-3 pl-13 rounded-xl text-left" text='Eliminar Cuenta'></ButtonMain>
              <ButtonMain style="w-full bg-grey-light py-3 px-4 rounded-xl text-center text-orange-main" text='Cerrar Sesión'></ButtonMain>
            </div>
          </div>
        </section>
      </div>
      <BottonNavBar/>
    </section>
  );
}
