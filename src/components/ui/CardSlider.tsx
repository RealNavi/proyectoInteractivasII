import { Carousel, CarouselContent, CarouselItem, /*CarouselNext, CarouselPrevious,*/ } from "@/components/ui/carousel"
import LargeCard from "./LargeCard";

export default function CardSlider() {
    return (
        <Carousel className="max-w-full">
            <CarouselContent>
                <CarouselItem><LargeCard image="./src/assets/medvet-dallas.jpg" location="Escazú, San José" starLevel={5} title="MedVet"/></CarouselItem>
                <CarouselItem><LargeCard image="./src/assets/clinica-biblica.jpg" location="Santa Ana, Costa Rica" starLevel={5} title="Hospital Clínica Bíblica" /></CarouselItem>
                <CarouselItem><LargeCard image="./src/assets/momentum.jpg" location="Escazú, San José" starLevel={5} title="Momentum" /></CarouselItem>
            </CarouselContent>
            
        </Carousel>
    );
}