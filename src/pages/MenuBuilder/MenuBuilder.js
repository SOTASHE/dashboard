import React from 'react';
import Form from './Form';
import Panel from '../../components/Panel';

class MenuBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{
                id: 1,
                title: "Drinks",
                items: ["Coke", "something"]
            }
            ],
            isFormOpen: false
        }
    }

    openForm = () => {
        this.setState(prevState => ({
            isFormOpen: !prevState.isFormOpen
        }))
    }

    createCategory = (newCategory) => {
        this.setState({
            categories: this.state.categories.concat(newCategory),
            isFormOpen: false,
        })

    }
    render() {
        console.log(this.state.isFormOpen)
        return (
            <div id="menubuild">
                <Panel title="Menu"
                    btnText="Add New Menu"
                />

                <Panel title="categories"
                    btnText="Add New Categories"
                    options={this.state.categories}
                    isFormOpen={this.state.isFormOpen}
                    openForm={this.openForm}
                    onFormSubmit={this.createCategory} />

                <Panel title="Menu Items"
                    btnText="Add New Menu Item" />
            </div>
        )
    }
}
export default MenuBuilder;