interface ProfileAvatarProps {
    imageUrl: string;
    altText: string;
    type: 'main' | 'linked' | 'small' | 'xSmall';
}

export default function ProfileAvatar(props: ProfileAvatarProps) {

    if (props.type === 'main') {
        return (
            <div className="flex">
                <img className="rounded-full h-30 w-30 " src={props.imageUrl} alt={props.altText} />
                <button className="absolute right-37 transform translate-y-23 bg-orange-light rounded-full h-8 w-8 "><img className="p-2" src="./src/assets/cross.svg" alt="Change Profile Picture" /></button>
            </div>
        );
    } else if (props.type === 'linked') {
        return (
            <div>
                <button className=" rounded-full h-20 w-20"> <img className=" rounded-full" src={props.imageUrl} alt={props.altText} /></button>
            </div>
        );
        
    } else if (props.type === 'small') {
        return (
            <button className="h-auto w-15"><img className="rounded-full" src={props.imageUrl}
                            alt={props.altText}/></button>
        );
    } else if (props.type === 'xSmall') {
        return (
            <button className="w-8"><img className="rounded-full" src={props.imageUrl}
                            alt={props.altText}/></button>
        );
    }
}