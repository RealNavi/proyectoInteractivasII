import { createFileRoute } from '@tanstack/react-router'
import NewPasswordPage from '@/components/pages/NewPasswordPage'
import imgLogin from "./assets/Login.png";

export const Route = createFileRoute('/newpassword')({
  component: RouteComponent,
})

const backgroundLoginProps = {
    image: imgLogin,
    style: "bg-white"
}

const newPassword = {
    title: "Nueva contraseña",
    button1: "Ingesar",
    button2: "Eliminar"
}

function RouteComponent() {
  return <NewPasswordPage background={backgroundLoginProps} {...newPassword} />
}
