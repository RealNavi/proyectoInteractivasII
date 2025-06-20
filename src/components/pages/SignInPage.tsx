import { IconBrandFacebookFilled, IconBrandAppleFilled,IconChevronLeft } from '@tabler/icons-react';
import { Link } from '@tanstack/react-router';
import ButtonMain from '../ui/ButtonMain';
import BackgroundLogin from '../ui/BackgroundLogin';
interface BackgroundLoginProps {
    image: string;
    style: string;
}
interface SingInProps {
    background: BackgroundLoginProps;
    title: string;
    email: string;
    password: string;
    button: string;
    signUp: string;
} 

export default function SingInPage (props:SingInProps) {
    return (
        <div className='font-comfortaa'>
            <section className="w-full h-screen flex">
                <div className="flex">
                    <div className="relative flex">
                        <div className="max-w-full h-full justify-center">
                            <BackgroundLogin {...props.background} />

                            <div className="absolute inset-0 flex-col justify-center items-center" > 
                            
                                <section className="w-3 h-5 mt-10 ml-8">
                                    <Link to="/login"><IconChevronLeft /> </Link>  
                                </section>

                                <section className="flex-col justify-center items-center bg-white mt-40">                                                         

                                    <section className="h-screen flex-col justify-center items-center bg-grey-light rounded-t-4xl">
                                    
                                        <div className="flex flex-col items-center justify-center">

                                            <h1 className="font-confortaa text-black text-2xl text-center justify-center mt-8">{props.title}</h1>

                                            <input id= "email" className="font-confortaa bg-cian-secondary text-xs text-center rounded-4xl py-3 px-13 mt-5 hover:bg-cian-tertiary" placeholder="Ingrese su correo" type={props.email}/>

                                            <input id="password" className="font-confortaa bg-cian-secondary text-xs text-center rounded-4xl py-3 px-13 mt-3 hover:bg-cian-tertiary" placeholder='Ingrese su contraseña' type={props.password}/>
                                        </div>

                                        <Link to='/password'><p className="font-confortaa text-black text-xs text-center mt-4">¿Olvido su contraseña?</p></Link>
                                        
                                        
                                        <div className='flex items-center justify-center mt-10'>

                                            <ButtonMain style="font-confortaa bg-orange-main text-xs rounded-4xl py-3 px-13 hover:bg-orange-light" text={props.button}/>
                                        </div>
                                        
                                        <p className="font-confortaa text-black text-xs text-center mt-5">Otras formas de ingresar</p>
                                            
                                        <div className="flex space-x-10 items-center justify-center mt-5">
                                            <a className="" href="https://www.facebook.com/">
                                                <IconBrandFacebookFilled className='size-13 text-cian-tertiary'/>
                                            </a>
                                            
                                            <a className="" href="https://account.apple.com/es">
                                                <IconBrandAppleFilled className='size-13 text-cian-tertiary'/>
                                            </a>
                                        </div>

                                        <p className="font-confortaa text-black text-xs text-center mt-5"> No tiene una cuenta.
                                            <Link to="/signup"><p className="font-confortaa text-cian-secondary underline font-extrabold"> {props.signUp}</p></Link>
                                            
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
