import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    // Essa aqui é a propriedade que foi nomeada de "OnOpenNewTransactionModal" 
    // recebendo a função que o botão (que está aqui dentro do Header) precisa receber lá do App.tsx 
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
    
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}