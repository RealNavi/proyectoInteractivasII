import { createFileRoute } from '@tanstack/react-router'
import SignInPage from '@/components/pages/SignInPage'
import imgLogin from "../assets/Login.png"

const backgroundLoginProps = {
    image: imgLogin,
    style: "bg-white"
}


const signIn = {
    title: "Ingresar a la cuenta",
    email: "",
    password: "",
    button: "Ingresar",
    signUp: "Crear cuenta"
}

export const Route = createFileRoute('/signin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <SignInPage background={backgroundLoginProps} {...signIn} />
}
