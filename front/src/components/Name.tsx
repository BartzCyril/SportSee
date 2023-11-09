type NameProps = {
    name?: string
}

export function Name({name} : NameProps) {
    return <div className="name">
        <h1>Bonjour <span>{name}</span></h1>
        <p>Félicitations ! Vous avec explosé vos objectifs hier 👏</p>
    </div>
}