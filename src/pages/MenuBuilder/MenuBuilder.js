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

    addItem = (newItem) => {
        this.setState(prevState => ({
            categories: prevState.categories.map(
                category => {
                    if (category.title === this.state.activeCategory) {
                        category.items.concat(newItem)
                    }
                    return category
                }
            )
        }))
    }

    render() {

        return (
            <div id="menubuild">
                <Panel title="Menu"
                    btnText="Add New Menu"
                />

                <Panel title="category"
                    btnText="Add New Categories"
                    options={this.state.categories}
                    selectedCategory={this.setActiveCategory}
                    isFormOpen={this.state.isFormOpen}
                    openForm={this.openForm}
                    onFormSubmit={this.createCategory} />

                <Panel title="item"
                    btnText="Add New Menu Item"
                    openForm={this.openForm}
                    onFormSubmit={this.addItem}
                    options={
                        this.state.activeCategory && this.state.categories.find(item => item.title === this.state.activeCategory
                        ).items
                    }
                />
            </div>
        )
    }
}
export default MenuBuilder;