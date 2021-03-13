import React from 'react';
import Panel from '../../components/Panel';

class MenuBuilder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [{
                id: 1,
                title: "Drinks",
                items: [{ title: "coke" }, "something"]
            }
            ],
            isFormOpen: false,
            activeCategory: null
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

    setActiveCategory = (name) => {
        // Returns name of selected category 
        this.setState({
            activeCategory: name
        })
    }

    render() {

        return (
            <div id="menubuild">
                <Panel title="Menu"
                    btnText="Add New Menu"
                />

                <Panel title="categories"
                    btnText="Add New Categories"
                    options={this.state.categories}
                    selectedCategory={this.setActiveCategory}
                    isFormOpen={this.state.isFormOpen}
                    openForm={this.openForm}
                    onFormSubmit={this.createCategory} />

                <Panel title="Menu Items"
                    btnText="Add New Menu Item"
                    options={
                        this.state.activeCategory && this.state.categories.find(item => item.title === this.state.activeCategory
                        ).items
                    } />
            </div>
        )
    }
}
export default MenuBuilder;