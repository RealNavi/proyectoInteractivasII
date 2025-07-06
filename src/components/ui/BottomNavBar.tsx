import { IconHome, IconSearch, IconSquarePlus, IconNotification } from '@tabler/icons-react';
import ProfileAvatar from './ProfileAvatar';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import NewReminder from './NewReminder';


export default function BottonNavBar() {
    const [showReminder, setShowReminder] = useState(false);
    useEffect(() => {
        if (showReminder) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [showReminder]);
    return (
        <>
            {showReminder && <NewReminder onClose={() => setShowReminder(false)} />}
            <section className="fixed bottom-0 w-full">
                <div className="bg-cian-main flex justify-between py-5 px-10 items-center">
                    <Link to='/'><IconHome className='size-7 text-white' /> </Link>
                    <Link to='/search'><IconSearch className='size-7 text-white' /> </Link>
                    <button onClick={() => setShowReminder(true)}><IconSquarePlus className='size-8 text-white' /> </button>
                    <Link to='/notifications'><IconNotification className='size-8 text-white' /> </Link>
                    <Link to='/profile' className='flex items-center'><ProfileAvatar type='xSmall' imageUrl='./src/assets/fotoPerfil.png' altText='ProfilePage Button' /></Link>
                </div>
            </section>
        </>
    );
}