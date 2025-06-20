import { createFileRoute } from '@tanstack/react-router'
import imgLogin from "../assets/Login.png";
import PasswordPage from '@/components/pages/PasswordPage';

export const Route = createFileRoute('/password')({
  component: RouteComponent,
})

const backgroundLoginProps = {
    image: imgLogin,
    style: "bg-white"
}

const password = {
    title: "¿Olvido su contraseña?",
    button1: "Enviar",
    button2: "Eliminar"
}

function RouteComponent() {
  return <PasswordPage background={backgroundLoginProps} {...password} />
}
