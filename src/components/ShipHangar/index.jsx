import ShipCard from "../ShipCard";
export default function ShipHangar({shipList}) {
    return (
        <main className='shipHangar'>
            {shipList.map(s => (
                <ShipCard shipName={s.name} key={s.name}/>
            ))}
        </main>
    )
}
