import React, {Component} from "react";
import TargetMaterialCategoryColumn from "./TargetMaterialCategoryColumn/TargetMaterialCategoryColumn";
import TargetMaterialColumn from "./TargetMaterialColumn/TargetMaterialColumn";
import TargetColumn from "./TargetColumn/TargetColumn";

class Target extends Component {

    state = {
        catalogData: [
            {
                name: 'Recyclable Plastic',
                img: '',
                qty: 0,
                id: 1,
                targetItems: [
                    {
                        name: 'Monitor',
                        img: '',
                        qty: 1,
                        id: 2,
                        stateWiseTargetItemList: [{
                            name: 'Maharashtra',
                            stateId: 3,
                            districtWiseTargetItemList: [
                                {
                                    name: 'Pune',
                                    qty: 0,
                                    districtId: 4
                                }
                            ]
                        }]
                    },
                    {
                        name: 'Printer',
                        img: '',
                        qty: 2,
                        id: 3,
                    }
                ]
            },
            /*{
                name: 'Non-Recyclable Plastic',
                img: '',
                qty: 3,
                id: 4,
                targetItems: [
                    {
                        name: 'N Monitor',
                        img: '',
                        qty: null,
                        id: 5
                    },
                    {
                        name: 'N Printer',
                        img: '',
                        qty: null,
                        id: 6
                    }
                ]
            },
            {
                name: 'E-Waste',
                img: '',
                qty: 4,
                id: 7,
                targetItems: [
                    {
                        name: 'E Monitor',
                        img: '',
                        qty: null,
                        id: 8
                    },
                    {
                        name: 'E Printer',
                        img: '',
                        qty: null,
                        id: 9
                    }
                ]
            }*/
        ],
        columns: {
            showCategoryColumn: true,
            selectedCategory: null,
            selectedItem: null,
            selectedState: null,
            selectedCity: null,
            selectedDistrict: null,
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
                this.state.columns.selectedCategory ? (
                    <TargetMaterialColumn key={'material-column'}
                                          heading={'Material'}
                                          items={this.state.catalogData.find((cat) => {
                                              return cat.id === this.state.columns.selectedCategory
                                          }).targetItems}
                                          itemClicked={this.itemClicked}>
                    </TargetMaterialColumn>
                ) : (null)
            }
            {
                this.state.columns.showQtyEdit ? (
                    <TargetColumn heading={'Target'} defaultQty={this.state.columns.showQtyEdit.defaultQty} validationQty={this.state.columns.showQtyEdit.validationQty} updateQty={this.updateQty}></TargetColumn>) : (null)
            }

        </div>
    }

    categoryClicked = (id) => {
        const columnsToShow = {
            ...this.state.columns
        };
        columnsToShow.selectedCategory = id;
        columnsToShow.selectedItem = null;
        columnsToShow.selectedState = null;
        columnsToShow.selectedCity = null;
        columnsToShow.selectedDistrict = null;
        columnsToShow.showQtyEdit = false;

        this.setState({
            columns: columnsToShow
        });
        console.log(this.state);
    };

    itemClicked = (id, qty) => {
        const columnsToShow = {
            ...this.state.columns
        };
        columnsToShow.selectedItem = id;
        columnsToShow.selectedState = null;
        columnsToShow.selectedCity = null;
        columnsToShow.selectedDistrict = null;
        columnsToShow.showQtyEdit = {
            defaultQty: qty,
            validationQty: qty
        };
        this.setState({
            columns: columnsToShow
        });
    };

    updateQty = (qty) => {
        if(this.state.columns.selectedCategory) {
            const catalogCopy = [...this.state.catalogData];
            catalogCopy.forEach((cat, catIndex) => {
                if(cat.id === this.state.columns.selectedCategory) {
                    cat.targetItems.forEach((item, itemIndex) => {
                        if(item.id === this.state.columns.selectedItem) {
                            catalogCopy[catIndex].targetItems[itemIndex].qty = Number(qty);
                        }
                        catalogCopy[catIndex].qty = catalogCopy[catIndex].qty + catalogCopy[catIndex].targetItems[itemIndex].qty;
                    });
                }
            });
            this.setState({
                catalogData: catalogCopy
            });
            console.log(catalogCopy);
        }
    };

    getSelectedItemQty = () => {
        if(this.state.columns.selectedCategory && this.state.columns.selectedItem) {
            return this.state.catalogData.find((cat) => {
                return cat.id === this.state.columns.selectedCategory
            }).targetItems.map((item) => {
                return item.id === this.state.columns.selectedItem;
            }).qty;
        } else {
            return 0;
        }
    }



}

export default Target;