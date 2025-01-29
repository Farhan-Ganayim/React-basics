// import {utilService} from '../services.util.service.js'

export function AnimalsList(props) {
    // export function AnimalsList({animalInfos}) {
    // const { animalInfos } = props
    const animalInfos = props.animalInfos
    return (
        <section className="animals-container">
            <h2>Rare Animals</h2>
            <table className="animals-list">
                <tbody>
                    {animalInfos.map((animal,idx) => (
                        // <tr key={utilService.makeId()}>
                        <tr key={idx}>
                            <td>{animal.type}</td>
                            <td>{animal.count}</td>
                            <td>
                                <a href={`https://www.google.com/search?q=${animal.type}`}>
                                    Search
                                </a>
                            </td>
                        </tr>
                    ))
                    }

                </tbody>

            </table>
        </section>
    )
}