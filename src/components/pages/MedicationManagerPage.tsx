import React, { useState } from "react";
import ButtonMain from '../ui/ButtonMain';
import BottonNavBar from "../ui/BottomNavBar";
import { IconChevronLeft } from "@tabler/icons-react";
import { Link } from "@tanstack/react-router";


interface Medication {
  nombre: string;
  presentacion: string;
  laboratorio: string;
}

export default function MedicationManagerPage() {
  const [medicamentos, setMedicamentos] = useState<Medication[]>([]);
  const [formVisible, setFormVisible] = useState(false);
  const [form, setForm] = useState<Medication>({
    nombre: "",
    presentacion: "",
    laboratorio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.nombre && form.presentacion && form.laboratorio) {
      setMedicamentos([...medicamentos, form]);
      setForm({ nombre: "", presentacion: "", laboratorio: "" });
      setFormVisible(false);
    }
  };

  const handleDelete = (indexToRemove: number) => {
    setMedicamentos(medicamentos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <section className="min-h-screen font-comfortaa pb-20" >
      <div className="min-h-screen bg-white flex flex-col pt-5">
        <div className="flex justify-between pt-6 pr-10 pb-3 items-center ">
          <Link to="/profile"><IconChevronLeft className='ml-5 h-10 w-10 text-black' /></Link>
          <h1 className="font-comfortaa text-2xl text-black">Medicamentos</h1>
        </div>
        <main className="min-h-screen bg-white flex flex-col items-center pt-5 space-y-6 px-10 pb-36">
          {/* Lista de medicamentos */}
          <div className="w-full space-y-3">
            {medicamentos.map((med, index) => (
              <div
                key={index}
                className="w-full bg-grey-light py-3 px-4 rounded-lg flex justify-between items-center text-xs"
              >
                <span>
                  {med.nombre} {med.presentacion} / {med.laboratorio}
                </span>
                <button
                  onClick={() => handleDelete(index)}
                  className="text-black/50 font-bold ml-4"
                >x
                </button>
              </div>
            ))}
          </div>

          {/* Botón Agregar (solo si el formulario no está visible) */}
          {!formVisible && (
            <button
              onClick={() => setFormVisible(true)}
              className="bg-orange-main text-xs text-white py-4 px-5 rounded-md mt-2"
            >
              Agregar medicamento
            </button>
          )}

          {/* Formulario (condicional) */}
          {formVisible && (
            <form
              onSubmit={handleSubmit}
              className="fixed bottom-0 left-0 w-full bg-grey-light rounded-t-4xl p-5 space-y-4 pb-20"
            >
              <div className="flex gap-10 text-xs mb-12 mt-3 px-5">
                <button
                  type="button"
                  onClick={() => setFormVisible(false)}
                  className="text-black/50"
                >
                  Cancelar
                </button>
                <span className="text-black/50">Agregar Medicamento</span>
              </div>

              <input
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                className="w-full text-xs bg-cian-secondary py-3.5 px-3 rounded-lg placeholder-black/50"
                placeholder="Nombre"
              />
              <input
                name="presentacion"
                value={form.presentacion}
                onChange={handleChange}
                className="w-full text-xs bg-cian-secondary py-3.5 px-3 rounded-lg placeholder-black/50"
                placeholder="Presentación (mg)"
              />
              <input
                name="laboratorio"
                value={form.laboratorio}
                onChange={handleChange}
                className="w-full text-xs bg-cian-secondary py-3.5 px-3 rounded-lg placeholder-black/50"
                placeholder="Laboratorio"
              />
              <div className="flex justify-center">
              <ButtonMain style="bg-orange-400 text-white py-3.5 text-xs rounded-md px-10 ml-2" text="Guardar nuevo"></ButtonMain>
              </div>
            </form>
          )}
          <BottonNavBar />
        </main>
      </div>
    </section>
  );
}

// Commit Bracnh: Sequeira-UI-Component