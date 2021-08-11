import {useRouter} from 'next/router';
import {useEffect} from 'react';
export default function PostDetailPage() {
    const router = useRouter();
    console.log(router);
    const {id} = router.query;
    console.log(id,"id");
    useEffect(() => {
        
        if(id === '2'){
            router.push('/')
        }
    })

    return (
        <div>
            <p>Hola este es mi id {id}</p>
            <button
            onClick={
                () => router.push('/hola')
            }
            >
                Ir a Hola
            </button>
        </div>
    )
}
