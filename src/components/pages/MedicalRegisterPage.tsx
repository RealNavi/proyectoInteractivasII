import React from "react";
import BottonNavBar from "../ui/BottomNavBar";
import ButtonMain from "../ui/ButtonMain";
import { Link } from "@tanstack/react-router";
import { IconChevronLeft } from "@tabler/icons-react";

interface MedicalRegisterFormProps {
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  defaultValues?: Record<string, string>;
}

export default function MedicalRegisterPage({
  onSubmit,
  defaultValues = {},
}: MedicalRegisterFormProps) {
  return (
    <section className="min-h-screen font-comfortaa pb-20 text-xs" >
      <div className="min-h-screen bg-white flex flex-col pt-5">
        <div className="flex justify-between pt-6 pr-10 pb-3 items-center ">
          <Link to="/profile"><IconChevronLeft className='ml-5 h-10 w-10 text-black' /></Link>
          <h1 className="font-comfortaa text-2xl text-black">Configuración</h1>
        </div>
        <form
          onSubmit={onSubmit}
          className="w-full max-w-md space-y-4 p-6 text-left"
        >
          <fieldset className="space-y-4">
            {/* Información General del Paciente */}
            <h2 className="text-sm font-semibold text-gray-800">
              Información General del Paciente:
            </h2>

            {/* Nombre Completo */}
            <div className="flex flex-col">
              <label htmlFor="nombre" className="text-xs font-medium text-gray-700">
                Nombre Completo:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                defaultValue={defaultValues.nombre || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Fecha de Nacimiento */}
            <div className="flex flex-col">
              <label
                htmlFor="fechaNacimiento"
                className="text-xs font-medium text-gray-700"
              >
                Fecha de Nacimiento:
              </label>
              <input
                type="date"
                id="fechaNacimiento"
                name="fechaNacimiento"
                defaultValue={defaultValues.fechaNacimiento || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Sexo */}
            <div className="flex flex-col">
              <label htmlFor="sexo" className="text-xs font-medium text-gray-700">
                Sexo:
              </label>
              <input
                type="text"
                id="sexo"
                name="sexo"
                defaultValue={defaultValues.sexo || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Estado Civil */}
            <div className="flex flex-col">
              <label
                htmlFor="estadoCivil"
                className="text-xs font-medium text-gray-700"
              >
                Estado Civil:
              </label>
              <input
                type="text"
                id="estadoCivil"
                name="estadoCivil"
                defaultValue={defaultValues.estadoCivil || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Dirección */}
            <div className="flex flex-col">
              <label
                htmlFor="direccion"
                className="text-xs font-medium text-gray-700"
              >
                Dirección:
              </label>
              <input
                type="text"
                id="direccion"
                name="direccion"
                defaultValue={defaultValues.direccion || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Teléfono */}
            <div className="flex flex-col">
              <label
                htmlFor="telefono"
                className="text-xs font-medium text-gray-700"
              >
                Teléfono:
              </label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                defaultValue={defaultValues.telefono || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Contacto de Emergencia */}
            <div className="flex flex-col">
              <label
                htmlFor="contactoEmergencia"
                className="text-xs font-medium text-gray-700"
              >
                Contacto de Emergencia:
              </label>
              <input
                type="text"
                id="contactoEmergencia"
                name="contactoEmergencia"
                defaultValue={defaultValues.contactoEmergencia || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xs font-medium text-black">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                defaultValue={defaultValues.email || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Ocupación */}
            <div className="flex flex-col">
              <label
                htmlFor="ocupacion"
                className="text-xs font-medium text-gray-700"
              >
                Ocupación:
              </label>
              <input
                type="text"
                id="ocupacion"
                name="ocupacion"
                defaultValue={defaultValues.ocupacion || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Antecedentes Médicos */}
            <h2 className="pt-3 text-sm font-medium text-black">
              Antecedentes Médicos:
            </h2>

            {/* Padecimientos */}
            <div className="flex flex-col">
              <label
                htmlFor="padecimientos"
                className="text-xs font-medium text-gray-700"
              >
                Padecimientos:
              </label>
              <input
                type="text"
                id="padecimientos"
                name="padecimientos"
                defaultValue={defaultValues.padecimientos || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Vacunas */}
            <div className="flex flex-col">
              <label
                htmlFor="vacunas"
                className="text-xs font-medium text-gray-700"
              >
                Vacunas:
              </label>
              <input
                type="text"
                id="vacunas"
                name="vacunas"
                defaultValue={defaultValues.vacunas || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Padecimientos Familiares */}
            <div className="flex flex-col">
              <label
                htmlFor="padecimientosFamiliares"
                className="text-xs font-medium text-gray-700"
              >
                Padecimientos Familiares:
              </label>
              <input
                type="text"
                id="padecimientosFamiliares"
                name="padecimientosFamiliares"
                defaultValue={defaultValues.padecimientosFamiliares || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Gineco-obstétricos */}
            <div className="flex flex-col">
              <label
                htmlFor="ginecoObstetricos"
                className="text-xs font-medium text-gray-700"
              >
                Gineco-obstétricos (si aplica):
              </label>
              <input
                type="text"
                id="ginecoObstetricos"
                name="ginecoObstetricos"
                defaultValue={defaultValues.ginecoObstetricos || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Alergias */}
            <div className="flex flex-col">
              <label
                htmlFor="alergias"
                className="text-xs font-medium text-gray-700"
              >
                Alergias:
              </label>
              <input
                type="text"
                id="alergias"
                name="alergias"
                defaultValue={defaultValues.alergias || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Diagnósticos Previos */}
            <div className="flex flex-col">
              <label
                htmlFor="diagnosticosPrevios"
                className="text-xs font-medium text-gray-700"
              >
                Diagnósticos Previos:
              </label>
              <input
                type="text"
                id="diagnosticosPrevios"
                name="diagnosticosPrevios"
                defaultValue={defaultValues.diagnosticosPrevios || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Información Adicional */}
            <h2 className="pt-3 text-sm font-medium text-black">
              Información Adicional:
            </h2>

            <div className="flex flex-col">
              <label
                htmlFor="infoAdicional"
                className="text-xs font-medium text-gray-700"
              >
                Información de Importancia (Opcional):
              </label>
              <input
                type="text"
                id="infoAdicional"
                name="infoAdicional"
                defaultValue={defaultValues.infoAdicional || ""}
                className="bg-grey-light p-1 mx-4 rounded-sm"
              />
            </div>

            {/* Botón de enviar */}
          </fieldset>
          <div className="flex justify-center pt-5">
            <ButtonMain style="px-15 text-white py-4 bg-orange-main rounded-lg" text="Guardar" />
          </div>
        </form>
      </div>
      <BottonNavBar/>
    </section>
  );
}
// Commit Bracnh: Sequeira-UI-Component
