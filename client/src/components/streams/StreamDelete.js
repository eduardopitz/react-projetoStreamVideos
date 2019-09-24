import React from 'react';
import Modal from '../base/Modal';

const StreamDelete = () => {
    const actions = (
        <div>
            <button className="ui cancel button">Cancelar</button>
            <button className="ui approve button">Confirmar</button>
        </div>
    );

    return (
        <div>
            <Modal
                title="Remover Stream"
                content="Você tem certeza que deseja remover o stream?"
                actions={actions}
            />
        </div>
    );
    
};

export default StreamDelete;