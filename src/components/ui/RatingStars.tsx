import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

interface RatingStarsProps {
    value: number;
    editable?: boolean;
    onChange?: (value: number) => void;
}

export default function RatingStars(props: RatingStarsProps) {

    return (
        <Rating
            style={{ maxWidth: 50 }}
            value={props.value}
            readOnly={!props.editable}
            onChange={props.onChange}
        />
    );
}