import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"

export default function HelpPage() {

    return (
        <section>
            <div className="text-center font-comfortaa pt-10 space-y-5 px-5">
                <div className='flex justify-between items-center pb-10'>
                    <Link to="/settings"><IconChevronLeft className='h-10 text-black' /></Link>
                    <h1 className="text-xl font-bold">Ayuda</h1>
                </div>
                <div className="flex flex-col space-y-5">
                    <Collapsible className="bg-grey-light rounded-2xl px-5 py-5">
                        <CollapsibleTrigger className="text-base font-bold">1. ¿Qué es esta aplicación?</CollapsibleTrigger>
                        <CollapsibleContent className="text-sm space-y-5 pt-5" >
                            <p>
                                En la actualidad se muestran diversos problemas con el factor tiempo dentro de todos los hogares;
                                existe una tendencia a dejar de lado las necesidades relacionadas al campo de la salud. Por ende,
                                se propone un espacio de recordatorios para el usuario presente en la aplicación que se encarga de
                                manejar sus citas, horas de medicamentos, chequeos entre otras actividades relacionadas.
                                Esta opción ofrece tanto para uso personal como para llevar el registro de alguien más.
                            </p>
                            <p>
                                Por otra parte, tenemos que los consultorios médicos (independientemente de su especialidad)
                                mantienen problemas al generar un calendario para sus citas; la idea es colaborarles en la organización
                                de su tiempo dentro del espacio laboral y dar un aporte de recordatorio a sus usuarios (los clientes).
                                Además de presentarlos en un futuro a la población que usa el espacio se “recordatorio médico” si se acoplan
                                sus necesidades al servicio brindado.
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible className="bg-grey-light rounded-2xl py-5 px-5">
                        <CollapsibleTrigger className="text-base font-bold">2. ¿De cuantas personas puedo llevar el control?</CollapsibleTrigger>
                        <CollapsibleContent className="text-sm space-y-5 pt-5" >
                            <p>
                                Actualmente en Medical se puede llevar el control de máximo 3 personas. 
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible className="bg-grey-light rounded-2xl py-5 px-5">
                        <CollapsibleTrigger className="text-base font-bold">3. ¿Qué puedo hacer si olvidé mi contraseña?</CollapsibleTrigger>
                        <CollapsibleContent className="text-sm space-y-5 pt-5" >
                            <p>
                                La versión actual de la aplicación no permite cambiar la contraseña del usuario. En futuras
                                versiones, al momento de iniciar sesión se encuentra un enlace para restablecerla, esté tendrá funcionalidad.  
                            </p>
                        </CollapsibleContent>
                    </Collapsible>
                    <Collapsible className="bg-grey-light rounded-2xl py-5 px-5">
                        <CollapsibleTrigger className="text-base font-bold">4. ¿Cómo contacto al soporte?</CollapsibleTrigger>
                        <CollapsibleContent className="text-sm space-y-5 pt-5" >
                            <p>
                                Si necesitas ayuda o tienes alguna sugerencia, puedes comunicarte al siguiente correo:
                            </p>
                                <a href="mailto:correo_ejemplo@example.com" className="text-blue-500 "> correo_ejemplo@example.com</a> 
                        </CollapsibleContent>
                    </Collapsible>
                </div>
            </div>
        </section>
    );
}