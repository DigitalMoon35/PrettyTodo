import React, {useState} from 'react';
import EditModal from './EditModal';

function EditButton({description, id}) {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
        <button 
            className="edit btn"
            onClick={() => setOpenModal(!openModal)}>
            Edit
        </button>
        { openModal &&
        <EditModal 
            description={description} 
            id={id}/>
        }
        </>
    );
}

export default EditButton;