import React, { useState } from 'react';
import CategoryForm from '../pages/MenuBuilder/CategoryForm';
import './Panel.css'

function Panel(props) {


    if (props.isFormOpen) {
        return <CategoryForm
            isOpen={props.isFormOpen}
            onSubmit={props.onFormSubmit}

        />
    }
    else {
        return (<div className="panel">
            <div className="header">
                <h3>{props.title}</h3>
            </div>

            {props.options && <div className="Container">
                <form>
                    TODO: capture defualt slected option
                    <select id="category" name="category"
                        onChange={(e) => { props.selectedCategory(e.target.value) }}>
                        {props.options.map(item => <option key={item.id}>{item.title}</option>)}
                    </select>
                </form>
            </div>}

            <button className="add-button"
                onClick={props.openForm}>{props.btnText}</button>
            <div className="Container">
            </div>
        </div >

        )
    }
}

export default Panel;