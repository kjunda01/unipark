import React, { useState } from "react";
import Modal from "../components/Modal";

const PaginaNovoVeiculo = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <h1>Clique abaixo para adicionar um veículo</h1>
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                }}
            >
                Abrir
            </button>

            {isOpen && <Modal setIsOpen={setIsOpen} />}
        </>
    );
};

export default PaginaNovoVeiculo;
