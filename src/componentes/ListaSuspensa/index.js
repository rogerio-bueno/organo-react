import './ListaSuspensa.css'

const ListaSuspensa = (Props) => {
    return (
        <div className="listaSuspensa">
            <label>{Props.label}</label>
            <select>
                {Props.itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default ListaSuspensa;