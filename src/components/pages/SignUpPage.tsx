import BackgroundLogin from '../ui/BackgroundLogin';
import { IconChevronLeft } from '@tabler/icons-react';
import ButtonMain from '../ui/ButtonMain';
import { Link } from '@tanstack/react-router';

interface BackgroundLoginProps {
    image: string;
    style: string;
}

interface SignUpProps {
    background: BackgroundLoginProps;

    title: string;
    email: string;
    password: string;
    confirmPassword: string;
    phonenumber: string;
    button: string;
    signIn: string;
}

export default function SignUpPage(props: SignUpProps) {
    return (
        <div>
            <section className="w-full h-screen flex">
                <div className="flex">
                    <div className="relative flex">
                        <div className="max-w-full h-full justify-center">
                            <BackgroundLogin {...props.background} />

                            <div className="absolute inset-0 flex-col justify-center items-center" >

                                <section className="w-3 h-5 mt-10 ml-8">
                                    <Link to='/login'><IconChevronLeft /></Link>
                                </section>

                                <section className=" flex-col justify-center items-center bg-white mt-40">

                                    <section className="h-screen flex-coljustify-center items-center bg-grey-light rounded-t-4xl">

                                        <div className="flex flex-col items-center justify-center">

                                            <h1 className="font-confortaa text-black text-2xl text-center justify-center mt-8">{props.title}</h1>

                                            <input
                                                className="font-confortaa bg-cian-secondary text-xs text-center rounded-4xl py-3 px-13 mt-5 hover:bg-cian-tertiary"
                                                placeholder="Ingrese su correo"
                                                type={props.email}
                                            />

                                            <input
                                                className="font-confortaa bg-cian-secondary text-xs text-center rounded-4xl py-3 px-13 mt-5 hover:bg-cian-tertiary"
                                                placeholder='Cree su contraseña'
                                                type={props.password}
                                            />

                                            <input
                                                className="font-confortaa bg-cian-secondary text-xs text-center rounded-4xl py-3 px-13 mt-5 hover:bg-cian-tertiary"
                                                placeholder='Verifique su contraseña'
                                                type={props.confirmPassword}
                                            />
                                            <input
                                                className="font-confortaa bg-cian-secondary text-xs text-center rounded-4xl py-3 px-13 mt-5 hover:bg-cian-tertiary"
                                                placeholder='Ingrese su número celular'
                                                type={props.phonenumber}
                                            />
                                        </div>
                                        <div className='flex items-center justify-center mt-10'>
                                            <ButtonMain style="font-confortaa bg-orange-main text-xs rounded-4xl py-3 px-13 hover:bg-orange-light" text={props.button}/>
                                        </div>
                                        <p className="font-confortaa text-black text-xs text-center mt-5 space-4"> Ya tiene una cuenta.
                                            <Link to="/signin"> <p className="font-confortaa text-cian-secondary underline font-extrabold" > {props.signIn}</p></Link>
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
