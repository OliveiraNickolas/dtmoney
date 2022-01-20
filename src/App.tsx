import { useState } from "react";
import Modal from 'react-modal';
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from './TransactionsContext'

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root')

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false);
  }
  // Essas funções estão aqui e não dentro do próprio componente do modal, pelo fato de que o botão, que está dentro do Header,
  // precisa acessar essas informações para executar a sua função de abrir o modal. Então estando tudo aqui, o pai App() passa tudo para
  // o filho Header que por sua vez consegue passar tudo pro seu filho Button

  return (
    <TransactionsProvider>
      <Header  onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      {/* Essas propriedades estão aqui pois o Button dentro do Header precisa receber as funções para abrir o modal */}

      <Dashboard />

      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      // essas são propriedades são da própria configuração do modal pra entender quando abre e quando fecha
      />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
