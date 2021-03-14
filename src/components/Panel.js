import React from 'react';
import CategoryForm from '../pages/MenuBuilder/CategoryForm';
import ItemForm from '../pages/MenuBuilder/ItemForm';
import './Panel.css'

function Panel(props) {

    console.log(props.title)
    if (props.isFormOpen) {

        return (props.title === "item" ? <ItemForm
            title={props.title}
            isOpen={props.isFormOpen}
            onSubmit={props.onFormSubmit}
            onClose={props.onHandleForm}
        /> : <CategoryForm
            title={props.title}
            isOpen={props.isFormOpen}
            onSubmit={props.onFormSubmit}
            onClose={props.onFormClose}
        />)
    }
    else {
        return (<div className="panel">
            <div className="header">
                <h3>{props.title}</h3>
            </div>

            {props.options && <div className="Container">
                <form>
                    {
                        props.title === "category" ? <select id="items" name="items"
                            onChange={(e) => { props.selectedCategory(e.target.value) }}>
                            {props.options.map(item => <option key={item.id}>{item.title}</option>)}
                        </select> : (
                            <ul>
                                {props.options.map(item => <li key={item.id}>{item.title}
                                    <span>{item.cost}</span></li>)}
                            </ul>
                        )
                    }
                </form>
            </div>}

            <button className="add-button"
                onClick={props.handleForm}>{props.btnText}</button>
            <div className="Container">
            </div>
        </div >

        )
    }
}

export default Panel;