import { UserPreview } from '../cmps/UserPreview.jsx'
import { AnimalsList } from '../cmps/Animals.jsx'

export function Home() {
    const animalInfos = [
        { type: 'Malayan Tiger', count: 787 },
        { type: 'Mountain Gorilla', count: 212 },
        { type: 'Fin Whale', count: 28 },
    ]

    return (
        <section>
            <h2>Home Sweet Home</h2>
            <UserPreview />
            <AnimalsList animalInfos={animalInfos}/>
            
        </section>
    )
}
