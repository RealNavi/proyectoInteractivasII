import { createFileRoute } from '@tanstack/react-router'
import SignUpPage from '@/components/pages/SignUpPage'

import imgLogin from "../assets/Login.png";

export const Route = createFileRoute('/signup')({
  component: RouteComponent,
})

const backgroundLoginProps = {
    image: imgLogin,
    style: "bg-white"
}

const signUp = {
    title: "Crear una cuenta",
    email: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
    button: "Crear cuenta",
    signIn: "Ingresar"
}

function RouteComponent() {
  return <SignUpPage background={backgroundLoginProps} {...signUp} />
}
