import { useState } from 'react';
import Modal_69 from '../components/Modal_69'
import Backdrop_69 from '../components/Backdrop_69'

function Todo_69(props) {
    const [showModal, setShowModal] = useState();

    function showModalHandler() {
        setShowModal(true)
    }
    function closeModalHandler() {
        setShowModal(false)
    }
    return (
        <div >
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler}>Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_69 onClose={closeModalHandler} />}
            {showModal && <Modal_69 text='Are you sure?' onClose={closeModalHandler} />}
        </div>
    );
}

export default Todo_69;