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
import GradeIcon from "@material-ui/icons/Grade";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 450,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function MovieTable({ children, ...props }) {
  const columns = [
    { id: "maPhim", label: "Mã phim", minWidth: 170 },
    { id: "tenPhim", label: "Tên phim", minWidth: 100 },
    {
      id: "biDanh",
      label: "Bí danh",
      minWidth: 170,
    },
    {
      id: "trailer",
      label: "Trailer",
      minWidth: 170,
    },
    {
      id: "hinhAnh",
      label: "Hình ảnh",
      minWidth: 170,
    },
    {
      id: "moTa",
      label: "Mô tả",
      minWidth: 170,
    },
    {
      id: "maNhom",
      label: "Mã nhóm",
      minWidth: 170,
    },
    {
      id: "ngayKhoiChieu",
      label: "Ngày khởi chiếu",
      minWidth: 170,
    },
    {
      id: "danhGia",
      label: "đánh giá",
      minWidth: 170,
    },
  ];
  const rows = children;
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
                    <TableCell>{row.maPhim}</TableCell>
                    <TableCell>{row.tenPhim}</TableCell>
                    <TableCell>{row.biDanh}</TableCell>
                    <TableCell>{row.trailer}</TableCell>
                    <TableCell>
                      <img
                        src={row.hinhAnh}
                        alt="hinh anh"
                        style={{
                          width: "100px",
                          borderRadius: "5px",
                        }}
                      />
                    </TableCell>
                    <TableCell>{row.moTa}</TableCell>
                    <TableCell>{row.maNhom}</TableCell>
                    <TableCell>{row.ngayKhoiChieu}</TableCell>
                    <TableCell>
                      {row.danhGia}
                      <GradeIcon />
                    </TableCell>
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
}
