import './Formulario.css'
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import Botao from '../Botao';

const Times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
]

const aoSalvar = (evento) => {
    evento.preventDefault()
    console.log('Formulário foi submetido')
}

const Formulario = () => {
    return (
        <section onSubmit={aoSalvar} className="formulario">
            <form>
                <legend className="formulario__titulo">Preencha os dados para criar o card do colaborador.</legend>
                <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite o seu nome" />
                <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
                <ListaSuspensa obrigatorio={true} label="Time" itens={Times} />
                <Botao >
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;