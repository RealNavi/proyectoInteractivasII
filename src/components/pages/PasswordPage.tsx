import {IconChevronLeft} from "@tabler/icons-react";
import { Link } from '@tanstack/react-router';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger} from "@/components/ui/alert-dialog"

import BackgroundLogin from "../ui/BackgroundLogin";
interface BackgroundLoginProps {
    image: string;
    style: string;
}
interface PasswordProps {
    background: BackgroundLoginProps;
    title: string;
    button1: string;
    button2: string;
}

export default function PasswordPage(props: PasswordProps) {
    return (
        <div>
            <section className="w-full h-screen flex">
                <div className="relative flex">
                    <div className="max-w-full h-full justify-center">
                        <BackgroundLogin {...props.background} />
            
                        <section className="absolute inset-0 flex-col justify-center items-center" > 
                                    
                            <section className="w-3 h-5 mt-10 ml-8">
                                <Link to='/login'>
                                    <IconChevronLeft/>
                                </Link>
                            </section>
            
                            <section className="flex-col justify-center items-center bg-white mt-40">                                                         
            
                                <section className="h-screen flex-coljustify-center items-center bg-cian-background rounded-t-4xl">
                                        
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="font-confortaa text-2xl text-center mt-8">{props.title}</h1>
                                    </div>
    
                                    <div className="flex items-center justify-center mt-10 space-x-10">
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                    <button className="font-confortaa bg-orange-main text-xs rounded-4xl py-3 px-13 hover:bg-orange-light">
                                                        {props.button1}
                                                    </button>
                                            </AlertDialogTrigger>
                                    
                                            <AlertDialogContent className="bg-cian-secondary flex flex-col border-0 p-8">
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle className="font-confortaa text-2xl text-center text-black">Fuera de servicio</AlertDialogTitle>
                                                    <AlertDialogDescription className="font-confortaa text-xs text-center text-black">
                                                        Por estos momentos no se le puede brindar el servicio de cambiar su contraseña. 
                                                        Esta funcionalidad se encuentra en pausa.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>    
                                                    <AlertDialogCancel className="font-confortaa bg-orange-main text-xs rounded-4xl py-3 px-13 border-0 hover:bg-orange-light">Cancel</AlertDialogCancel>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                            
                                        <Link to='/login'>                                
                                            <button className="font-confortaa bg-orange-main text-xs rounded-4xl py-3 px-13 hover:bg-orange-light">
                                                    {props.button2}
                                                </button>
                                        </Link>
                                    </div>
                                             
                                </section>
                            </section>  
                        </section> 
                    </div>  
                </div>
            </section>
        </div>
    );
}
