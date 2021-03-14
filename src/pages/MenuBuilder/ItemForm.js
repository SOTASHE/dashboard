import React, { useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from "uuid";



function ItemForm(props) {
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

    const handleSubmit = (e) => {
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
                isOpen={showModal}
            >

                <h2> New {props.title} </h2>
                <form>
                    <label for="title">{props.title} Name</label>
                    <input name="title"
                        onChange={handleInput}></input>

                    <label for="description">description</label>
                    <textarea name="description" rows="4" cols="50"
                        onChange={handleInput}>

                    </textarea>
                    <div>
                        <h3>Pricing</h3>
                        <label>Item Price</label>
                        <input type="number"></input>
                    </div>

                </form>
                <button onClick={(e) => handleSubmit(e)}>Save</button>

            </Modal>
        </div>
    );
}
export default ItemForm;