import './CampoTexto.css'

const CampoTexto = (props) => {
    return (
        <div className='campo-texto'>
            <label>{props.label}</label>
            <input required={props.obrigatorio} type="text" placeholder={props.placeholder}></input>
        </div>
    )
}

export default CampoTexto;