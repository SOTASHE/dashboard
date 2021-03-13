import React, { useState } from 'react';
import Modal from 'react-modal';
import { v4 as uuidv4 } from "uuid";
import './Form.css';


function Form(props) {
    const showModal = props.isOpen
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

                    {
                        props.title === "item" && (
                            <div>
                                <h3>Pricing</h3>
                                <label>Item Price</label>
                                <input type="number"></input>
                            </div>
                        )
                    }

                </form>
                <button onClick={(e) => handleSubmit(e)}>Save</button>
                <button>close</button>
            </Modal>
        </div>
    );
}
export default Form;