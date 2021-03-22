import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
});

export const ShowMovieOfCinema = (props) => {
  const columns = [
		{ id: "tenPhim", label: "Tên phim", minWidth: 170 },
		{ id: "maPhim", label: "Mã phim", minWidth: 170 },
		{ id: "maRap", label: "Mã rạp", minWidth: 170 },
    { id: "hinhAnhh", label: "Hình ảnh", minWidth: 100 },
    { id: "maLichChieu", label: "Mã lịch chiếu", minWidth: 100 },
  ];
  const rows = props.children;
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
										<TableCell>{row.tenPhim}</TableCell>
                    <TableCell>{row.maPhim}</TableCell>
                    <TableCell>{row.maRap}</TableCell>
                    <TableCell>
                      <img
                        style={{
                          width: "150px",
                          height: "100px",
                          borderRadius: "5px",
                        }}
                        src={row.hinhAnh}
                        alt="hinhAnh"
                      />
                    </TableCell>
                    <TableCell>{row.maLichChieu}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
