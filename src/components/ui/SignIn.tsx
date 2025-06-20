import {IconBrandFacebook, IconBrandAppleFilled, IconChevronLeft} from "@tabler/icons-react";

import BackgroundLogin from "./BackgroundLogin";
import ButtonMain from "./ButtonMain";

interface BackgroundLoginProps {
    image: string;
    style: string;
}

interface SignInProps {
    background: BackgroundLoginProps;
    title: string;
    email: string;
    password: string;
    button: string;
    signUp: string;
}

export default function SignIn(props: SignInProps) {
    return (
        <div>
            <section className="w-full h-screen flex">
                <div className="flex">
                    <div className="relative flex">
                        <div className="max-w-full h-full justify-center">
                            <BackgroundLogin {...props.background} />
                        
                            <div className="absolute inset-0 flex-col justify-center items-center" > 
                            
                                <section className="w-3 h-5 mt-10 ml-8">
                                    <Link to='/login'>
                                        <IconChevronLeft/>
                                    </Link>
                                </section>

                                <section className="flex-col justify-center items-center bg-white mt-40">                                                         

                                    <section className="h-screen flex-coljustify-center items-center bg-cian-background rounded-t-4xl">
                                    
                                        <div className="flex flex-col items-center justify-center">

                                            <h1 className="font-confortaa text-black text-2xl text-center justify-center mt-8">{props.title}</h1>

                                            <input id= "email" className="font-confortaa bg-cian-secondary text-lg text-center rounded-4xl py-2 px-4 mt-5 hover:bg-cian-tertiary" placeholder="Ingrese su correo" type={props.email}/>

                                            <input id="password" className="font-confortaa bg-cian-secondary text-lg text-center rounded-4xl py-2 px-4 mt-3 hover:bg-cian-tertiary" placeholder='Ingrese su contraseña' type={props.password}/>
                                        </div>

                                        <h2 className="font-confortaa text-black text-md text-center mt-10">¿Olvido su contraseña?</h2>
                                        
                                        <div className='flex items-center justify-center mt-10'>
                                            <ButtonMain 
                                                style="font-confortaa bg-orange-main text-xs rounded-4xl py-2 px-1 mt-10 ml-08 mr-08 hover:bg-cian-tertiary" 
                                                text={props.button}
                                            />
                                        </div>
                                        
                                        <p className="font-confortaa text-black text-md text-center mt-5">Otras formas de ingresar</p>
                                            
                                        <div className="flex space-x-10 items-center justify-center mt-5">
                                            <a className="w-12 h-10" href="https://www.facebook.com/">
                                                <IconBrandFacebook className="text-cian-tertiary size-13"/>
                                            </a>
                                            
                                            <a className="w-10 h-10" href="https://account.apple.com/es">
                                                <IconBrandAppleFilled className="text-cian-tertiary size-13"/>
                                            </a>
                                        </div>

                                        <p className="font-confortaa text-black text-md text-center mt-5"> No tiene una cuenta.
                                            <a 
                                                className="font-confortaa text-cian-secondary underline font-extrabold" 
                                                href="http://localhost:5173/SignUp.tsx"
                                            >
                                                {props.signUp}
                                            </a>
                                        </p>
                                    </section>  
                                </section>    
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}