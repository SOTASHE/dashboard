import React from 'react';
import Panel from '../components/Panel'
import { Card, Button, Image } from 'semantic-ui-react';
function MenuBuilder() {

    return (
        <div>
            <Panel title="Menu"
                btnText="Add New Menu" />

            <Panel title="categories"
                btnText="Add New Categories" />

            <Panel title="Menu Items"
                btnText="Add New Menu Item" />
        </div>
    )
}

export default MenuBuilder;