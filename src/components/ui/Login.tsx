import {IconFingerprint } from '@tabler/icons-react';
import BackgroundLogin from './BackgroundLogin';
import ButtonMain from './ButtonMain';


interface BackgroundLoginProps {
        image: string;
        style: string;
}

interface LoginProps {
    background: BackgroundLoginProps;
    button: string;
    signUp: string;
    help: string;
}

export default function Login(props: LoginProps) {
    return(
        <div>
            <section className="w-full h-screen flex">
                <div className="flex">
                    <div className="relative flex">
                        <div className="max-w-full h-full justify-center">
                            <BackgroundLogin {...props.background} />
                        </div>
                    </div>

                    <div className="absolute inset-0 flex flex-col">
                            <div className="flex flex-col items-center justify-center">
                                <IconFingerprint className="w-20 h-24 flex mt-50 ml-5" />

                                <h1 className="font-confortaa text-black text-2xl mt-5">Ingresar con Touch ID</h1>
                                
                                <h2 className="font-confortaa text-black text-md mt-5 text-center justify-center"> Usar el Touch ID para accesar <br /> más fácil a tu cuenta</h2>
                            </div>

                            <ButtonMain 
                                style="font-confortaa bg-cian-main text-white rounded-4xl py-2 px-1 mt-10 ml-08 mr-08 hover:bg-cian-tertiary" 
                                text={props.button}
                            />

                            <div className="flex flex-col items-center justify-center">
                                <p className="font-confortaa text-black text-md mt-10 text-center justify-center">¿Nuevo usuario? 
                                    <a href="http://localhost:5173/SignUp.tsx" className="font-confortaa text-cian-secondary underline font-extrabold">
                                        {props.signUp}
                                    </a>
                                </p>

                                <a href="" className="font-confortaa text-cian-secondary underline mt-5">
                                    {props.help}
                                </a>
                            </div>

                        </div>
                </div>
            </section>
        </div>
    );
}