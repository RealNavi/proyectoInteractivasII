import {IconChevronLeft} from "@tabler/icons-react";
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

import BackgroundLogin from "./BackgroundLogin";
import ButtonMain from "./ButtonMain";

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


export default function NewPassword(props: PasswordProps) {
    return (
      <div>
            <section className="w-full h-screen flex">
                <div className="relative flex">
                    <div className="max-w-full h-full justify-center">
                        <BackgroundLogin {...props.background} />
            
                        <section className="absolute inset-0 flex-col justify-center items-center" > 
                                    
                            <section className="w-3 h-5 mt-10 ml-8">
                                <Linck to='/login'>
                                    <IconChevronLeft/>
                                </Linck>
                            </section>
            
                            <section className="flex-col justify-center items-center bg-white mt-40">                                                         
            
                                <section className="h-screen flex-coljustify-center items-center bg-cian-background rounded-t-4xl">
                                        
                                    <div className="flex flex-col items-center justify-center">
                                        <h1 className="font-confortaa text-2xl text-center mt-8">{props.title}</h1>
                                    </div>
    
                                    <div className="flex items-center justify-center mt-10 space-x-10">
                                        <ButtonMain
                                            style="font-confortaa bg-orange-main text-xs rounded-4xl py-3 px-13 hover:bg-orange-light"
                                            text={props.button1}
                                        />
                                        <AlertDialog>
                                            <AlertDialogTrigger asChild>
                                                <ButtonMain 
                                                    variant="outline"
                                                    style="font-confortaa bg-orange-main text-xs rounded-4xl py-3 px-13 hover:bg-orange-light"
                                                    text={props.button1}
                                                />
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogTitle>Fuera de servicio</AlertDialogTitle>
                                                <AlertDialogDescription>
                                                    Por estos momentos no se le puede brindar el servicio de cambiar su contraseña. 
                                                    Esta funcionalidad se encuentra en pausa.
                                                </AlertDialogDescription>
                                                <AlertDialogCancel>Leido</AlertDialogCancel>
                                            </AlertDialogContent>
                                        </AlertDialog>

                                        <ButtonMain
                                            style="font-confortaa bg-orange-main text-xs rounded-4xl py-3 px-13 hover:bg-orange-light"
                                            text={props.button2}
                                        />
                                       
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