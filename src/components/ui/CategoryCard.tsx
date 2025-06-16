interface CategoryCardProps {
    icon: string;
}

export default function CategoryCard(props:CategoryCardProps) {

    return (
        <div>
            <button className="size-28 rounded-3xl bg-orange-light border-8 border-orange-main p-5 flex items-center justify-center">
                <img src={props.icon} alt="Category" /></button>
        </div>
    );
}