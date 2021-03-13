import React, { useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from "uuid";
import './CategoryForm.css';


function CategoryForm(props) {
    const [showModal, setShowModal] = useState(props.isOpen)
    const [text, setText] = useState({
        title: '',
        description: '',
    })

    const handleInput = (e) => {
        setText(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = () => {
        const uniqueId = uuidv4();
        props.onSubmit({
            id: props.id ? props.id : uniqueId,
            title: text.title,
            description: text.project
        })

    }
    return (
        <div>
            <Modal
                isOpen={props.isOpen}
            >

                <h2>New Category</h2>
                <form>
                    <label for="title">Category Name</label>
                    <input name="title"
                        onChange={handleInput}></input>

                    <label for="description">description</label>
                    <textarea name="description" rows="4" cols="50"
                        onChange={handleInput}>

                    </textarea>

                </form>
                <button onClick={(e) => handleSubmit(e)}>Save</button>
                <button>close</button>
            </Modal>
        </div>
    );
}
export default CategoryForm;