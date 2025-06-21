import { Link } from "@tanstack/react-router"
import { IconChevronLeft } from "@tabler/icons-react"
import  ButtonMain  from "../ui/ButtonMain";
export default function ReportProblemPage() {
    return (
        <section>
            <div className="text-center font-comfortaa pt-10 space-y-5 px-5">
                <div className='flex justify-between items-center pb-10'>
                    <Link to="/settings"><IconChevronLeft className='h-10 text-black' /></Link>
                    <h1 className="text-xl font-bold">Reportar un problema</h1>
                </div>
                <div>
                    <p className="text-sm">Para reportar un problema, por favor completa el siguiente formulario:</p>
                    <form action="" className="space-y-5 flex flex-col text-left">
                        <div className="flex flex-col space-y-2 pt-5">
                        <label className="font-xs font-semibold" htmlFor=""> Motivo</label>
                            <input className="bg-grey-light h-10 rounded-lg text-sm text-black/50 px-4" type="text"/>
                        </div>
                        <div className="flex flex-col space-y-2 pt-5">
                        <label className="font-xs font-semibold" htmlFor=""> Descripción del problema</label>
                            <textarea name="" className="bg-grey-light h-20 rounded-lg text-sm text-black/50 px-4" id=""></textarea>
                        </div>
                    </form>
                    <ButtonMain text="Enviar" style="w-full bg-orange-main text-white p-3 rounded-lg mt-10"/>
                    <p className="text-sm pt-10">Gracias por tu colaboración.</p>
                </div>
            </div>
        </section>
    );
}