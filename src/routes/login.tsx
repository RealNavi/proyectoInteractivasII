import LoginPage from '@/components/pages/LoginPage'
import { createFileRoute } from '@tanstack/react-router'

import imgLogin from "../assets/Login.png";
import imgId from "../assets/id.png";


export const Route = createFileRoute('/login')({
  component: RouteComponent,
})

const backgroundLoginProps = {
    image: imgLogin,
    style: "bg-white"
}

const loginStar = {
    icon: imgId,
    button: "Ingresar con Email",
    signUp: "Crear cuenta",
    heplp: "¿Ayuda?"

}

function RouteComponent() {
  return <LoginPage background={backgroundLoginProps} {...loginStar}/>
}
