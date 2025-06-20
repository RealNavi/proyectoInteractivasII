import { Link } from '@tanstack/react-router';
import BackgroundLogin from '../ui/BackgroundLogin';
import ButtonMain from '../ui/ButtonMain';
import { IconChevronLeft } from '@tabler/icons-react';
interface BackgroundLoginProps {
    image: string;
    style: string;
}
interface NewPasswordProps {
    background: BackgroundLoginProps;
    title: string;
    button1: string;
    button2: string;
}

export default function NewPasswordPage(props: NewPasswordProps) {
    return (

        <div>
            <section className="w-full h-screen flex font-comfortaa">
                <div className="relative flex">
                    <div className="max-w-full h-full justify-center">
                        <BackgroundLogin {...props.background} />

                        <section className="absolute inset-0 flex-col justify-center items-center" >

                            <section className="w-3 h-5 mt-10 ml-8">
                                <Link to="/login"><IconChevronLeft className='h-10'/></Link>
                            </section>

                            <section className="flex-col justify-center items-center bg-white mt-40">

                                <section className="h-screen flex-coljustify-center items-center bg-grey-light rounded-t-4xl">

                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="font-comfortaa text-2xl text-center mt-8">{props.title}</h1>
                                    </div>

                                    <div className="flex items-center justify-center mt-10 space-x-10">
                                        <ButtonMain style="font-comfortaa bg-orange-main text-xs rounded-4xl py-3 px-13 hover:bg-orange-light" text={props.button1} />
                                        <ButtonMain style="font-comfortaa bg-orange-main text-xs rounded-4xl py-3 px-13 hover:bg-orange-light" text={props.button2} />
                                </div>
                            </section>
                        </section>
                    </section>
                </div>
        </div>
            </section >
        </div >
    );
}