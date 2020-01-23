import React, {Component} from "react";
import TargetMaterialCategoryColumn from "./TargetMaterialCategoryColumn/TargetMaterialCategoryColumn";
import TargetMaterialColumn from "./TargetMaterialColumn/TargetMaterialColumn";

class Target extends Component {

    state = {
        catalogData: [
            {
                name: 'Recyclable Plastic',
                img: '',
                qty: null,
                id: 1,
                items: [
                    {
                        name: 'Monitor',
                        img: '',
                        qty: null,
                        id: 2,
                    },
                    {
                        name: 'Printer',
                        img: '',
                        qty: null,
                        id: 3,
                    }
                ]
            },
            {
                name: 'Non-Recyclable Plastic',
                img: '',
                qty: null,
                id: 4,
                items: [
                    {
                        name: 'Monitor',
                        img: '',
                        qty: null,
                        id: 5
                    },
                    {
                        name: 'Printer',
                        img: '',
                        qty: null,
                        id: 6
                    }
                ]
            },
            {
                name: 'E-Waste',
                img: '',
                qty: null,
                id: 7,
                items: [
                    {
                        name: 'Monitor',
                        img: '',
                        qty: null,
                        id: 8
                    },
                    {
                        name: 'Printer',
                        img: '',
                        qty: null,
                        id: 9
                    }
                ]
            }
        ],
        columns: {
            showCategoryColumn: true,
            showItemColumn: null,
            showStateColumn: null,
            showDistrictColumn: null,
            showQtyEdit: null
        }
    };

    render() {
        return <div className='row'>
            {
                this.state.columns.showCategoryColumn ? (
                    <TargetMaterialCategoryColumn key={'material-category-column'}
                                                  heading={'Material Category'}
                                                  items={this.state.catalogData}
                                                  categoryClicked={this.categoryClicked}>
                    </TargetMaterialCategoryColumn>
                ) : (null)
            }
            {

                this.state.columns.showItemColumn ? (
                    <TargetMaterialColumn key={'material-column'}
                                          heading={'Material'}
                                          items={this.state.columns.showItemColumn}
                                          itemClicked={this.itemClicked}>
                    </TargetMaterialColumn>
                ) : (null)
            }

        </div>
    }

    categoryClicked = (childItems) => {
        const columnsToShow = {
            ...this.state.columns
        };
        columnsToShow.showItemColumn = childItems;
        this.setState({
            columns: columnsToShow
        });
        console.log(this.state);
    }

    itemClicked = (childItems) => {
        const columnsToShow = {
            ...this.state.columns
        };
        columnsToShow.showQtyEdit = true;
        this.setState({
            columns: columnsToShow
        });
        console.log(this.state);
    }
}

export default Target;