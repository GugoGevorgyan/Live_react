import React, { Component } from "react";
import PropTypes from "prop-types";
// import { withRouter } from "react-router";
import MaterialTable from "material-table";
import {allProd as api} from "../../Path";
import axiosConfig from '../axiosConfig';
import Container from "@material-ui/core/Container";


class DashboardNewsList extends Component {

    state = {
        columns: [
            { title: "id", field: "id" },
            { title: "Name", field: "name" },
            { title: "Des", field: "description" },
        ],
        data: [],
    };

    componentDidMount() {
        this.getProductList();
    }


    // deleteNews(data) {
    //     console.log('delete ',data);
    // }


    deleteNews(data) {
        console.log('delete ',data);
    }
    // axios.get(URL, { params:{}, headers: { 'Authorization': AuthStr } })
    getProductList = () => {
        const  token = 'Bearer '+ localStorage.getItem('token');
        axiosConfig.get(api,{headers:{ 'Authorization': token }})
            .then(res => res)
            .then(
                res => {
                    console.log(res + "axios")
                    this.setState({ data: res.data });
                }
            )

    };

    render() {
        const onGoModify = (id) => {
            console.log('ghvhv');
        };

        return (
            <div >
                <MaterialTable
                    title="Product"
                    columns={this.state.columns}
                    data={this.state.data}
                    actions={[
                        {
                            icon: "edit",
                            tooltip: "Edit Article",
                            onClick: (_, rowData) => {
                                onGoModify(rowData.id);
                            },
                        },
                    ]}
                    editable={{
                        onRowDelete: (oldData) =>
                            new Promise((resolve) => {
                                this.deleteNews(oldData);

                                setTimeout(() => {
                                    resolve();
                                    this.setState((prevState) => {
                                        const data = [...prevState.data];
                                        data.splice(data.indexOf(oldData), 1);
                                        return { ...prevState, data };
                                    });
                                }, 600);
                            }),
                    }}
                    options={{
                        actionsColumnIndex: -1,
                    }}
                />
            </div>
        );
    }
}

// DashboardNewsList.propTypes = {
//     history: PropTypes.object,
//     api_url: PropTypes.string.isRequired,
// };

export default DashboardNewsList;
