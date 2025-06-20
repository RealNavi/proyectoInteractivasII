import BackgroundLogin from "../ui/BackgroundLogin";
import ButtonMain from "../ui/ButtonMain";
import { Link } from "@tanstack/react-router";

interface BackgroundLoginProps {
    image: string;
    style: string
}
interface LoginProps {
    background: BackgroundLoginProps;
    icon: string;
    button: string;
    signUp: string;
    heplp: string;
    
}

export default function LoginPage (props:LoginProps) {

    return ( 
        <div>
            <section className="w-full h-screen flex">
                <div className="flex">
                    <div className="relative flex">
                        <div className="max-w-full h-full justify-center">
                            <BackgroundLogin {...props.background} />
                        </div>
                        
                        <div className="absolute inset-0 flex flex-col items-center">
                            <div className="flex flex-col items-center justify-center">
                                <Link to="/"> <ButtonMain style="h-15 w-15 mt-60" icon={props.icon} text="id"/></Link>
                                
                                
                                <h1 className="font-comfortaa text-black text-2xl mt-5">Ingresar con Touch ID</h1>
                                
                                <h2 className="font-comfortaa text-black text-sm mt-5 text-center justify-center"> Usar el Touch ID para accesar <br /> más fácil a tu cuenta</h2>
                            </div>
                            <Link to="/signin"><ButtonMain style="font-comfortaa bg-cian-main text-white rounded-4xl py-3 px-4 mt-10 ml-10 mr-10 hover:bg-cian-tertiary" text={props.button}/></Link>
                            
                            <div className="flex items-center justify-center pt-10">
                                <p className="font-comfortaa text-black text-md">¿Nuevo usuario?</p>
                                <Link to="/signup"><ButtonMain style="font-comfortaa text-cian-secondary underline font-extrabold" text={props.signUp}/></Link>
                            </div>
                                <p className="font-comfortaa text-cian-secondary underline mt-5">{props.heplp}</p>

                        </div>

                    </div>

                </div>

            </section>
        </div>
    );
}
