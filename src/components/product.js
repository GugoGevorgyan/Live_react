import React ,{ useState, useEffect } from 'react';

import Axios_conf from "../Axios_conf";
import {allProd as api} from "../Path";


export default class StickyHeadTable() {
    const {  name,description }  = useState();

    state = {
        columns: [
            {title: "id", field: "id"},
            {title: "Title", field: "title"}
        ],
        data: []
    };

    componentDidMount() {
        this.get_clients();
    }

    console.log ('ffff'+name);

    // const classes = useStyles();
    // const [page, setPage] = React.useState(0);
    // const [rowsPerPage, setRowsPerPage] = React.useState(10);
    //
    // const handleChangePage = (event, newPage) => {
    //     setPage(newPage);
    // };
    //
    // const handleChangeRowsPerPage = (event) => {
    //     setRowsPerPage(+event.target.value);
    //     setPage(0);
    // };
    //
    // return (
    //     <Paper className={classes.root}>
    //         <TableContainer className={classes.container}>
    //             <Table stickyHeader aria-label="sticky table">
    //                 <TableHead>
    //                     <TableRow>
    //                         {columns.map((column) => (
    //                             <TableCell
    //                                 key={column.id}
    //                                 align={column.align}
    //                                 style={{ minWidth: column.minWidth }}
    //                             >
    //                                 {column.label}
    //                             </TableCell>
    //                         ))}
    //                     </TableRow>
    //                 </TableHead>
    //                 <TableBody>
    //                     {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
    //                         return (
    //                             <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
    //                                 {columns.map((column) => {
    //                                     const value = row[column.id];
    //                                     return (
    //                                         <TableCell key={column.id} align={column.align}>
    //                                             {column.format && typeof value === 'number' ? column.format(value) : value}
    //                                         </TableCell>
    //                                     );
    //                                 })}
    //                             </TableRow>
    //                         );
    //                     })}
    //                 </TableBody>
    //             </Table>
    //         </TableContainer>
    //         <TablePagination
    //             rowsPerPageOptions={[10, 25, 100]}
    //             component="div"
    //             count={rows.length}
    //             rowsPerPage={rowsPerPage}
    //             page={page}
    //             onChangePage={handleChangePage}
    //             onChangeRowsPerPage={handleChangeRowsPerPage}
    //         />
    //     </Paper>
    // );


//
    const onSubmit =  ff();
    return (
        <form  onSubmit={onSubmit}  >
            <input type="submit"/>
            <p>
                name
            </p>
          </form>
    )
}
function  ff(){
    Axios_conf.get(api)
        .then(res => res)
        .then(
            res => {
                const {  name, description, image } = res.data;
                console.log(name)
            }
        )
}
