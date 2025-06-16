interface SearchRecentItemProps {
    description: string;
    button?: boolean;
    onDelete?: () => void;
}

export default function SearchRecentItem(props: SearchRecentItemProps) {
    if (props.button && props.button == true) {
        return (
            <div className="flex justify-between">
                <a className="text-xs">{props.description}</a>
                <button onClick={props.onDelete} className="text-sm text-black/50">x</button>
            </div>
        );
    } else {
        return (
            <div className="flex justify-between">
                <a className="text-xs">{props.description}</a>
            </div>
        );
    }

}