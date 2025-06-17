import BottonNavBar from "../ui/BottomNavBar";
import SearchRecentItem from "../ui/SearchRecentItem";
import { useState } from "react";

interface searchRecentItem {
    description: string;
    button?: boolean;
}

export default function SearchPage() {
    const [searchList, setSearchList] = useState<searchRecentItem[]>([]);

    const [inputValue, setInputValue] = useState("");

    function setSearchRecent(item: searchRecentItem) {
        setSearchList((prev) => [...prev, item]);
        console.log("Se han registrado las siguientes busquedas:", item.description);
    }

    return (
        <section className="bg-cian-main h-screen font-comfortaa pb-20">
            <div className="pt-16 px-10">
                <h1 className="font-comfortaa text-2xl text-white pb-3">Buscar</h1>
            </div>
            <div className="bg-white rounded-t-[2.5rem] h-screen">
                <div className="pt-8 flex flex-row text-center items-center gap-1 px-9">
                    <div className="bg-cian-secondary items-center py-1.5 pl-2 rounded-lg flex w-[80%] gap-2">
                        <img src="./src/assets/search.svg" alt="search icon" className="w-6 h-6" />
                        <input value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="w-[85%]" type="text" />
                    </div>
                    <div className="w-[20%]">
                        <button onClick={() => {

                            if (inputValue.trim() !== "") {
                                setSearchRecent({
                                    description: inputValue, button: true
                                });
                                setInputValue("");
                            }
                        }}
                            className="text-sm text-orange-main">Buscar</button>
                    </div>
                </div>
                <div className="px-10 pt-8 gap-3 flex flex-col">
                    <h2 className="font-bold">Reciente</h2>
                    {searchList.map((item, index) => (
                        <SearchRecentItem key={index}
                            description={item.description}
                            button={item.button}
                            onDelete={() => {
                                const updateList = [...searchList];
                                updateList.splice(index, 1);
                                setSearchList(updateList);
                            }} />
                    ))}

                </div>
                <div className="px-10 pt-8 ">
                    <h2 className="font-bold">Podría interesarte</h2>
                    <div className="pt-3 gap-5 flex flex-col">
                        <SearchRecentItem description="Clínica MedVet, Escazú"></SearchRecentItem>
                        <SearchRecentItem description="Dr. Mariano Durán Flores- Medicina General"></SearchRecentItem>
                        <SearchRecentItem description="Dr. Juan Mora Valverde - Medicina General"></SearchRecentItem>
                        <SearchRecentItem description="Clínica Momentum, Curridabat"></SearchRecentItem>
                    </div>
                </div>
            </div>
            <BottonNavBar />
        </section>
    );
}