import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(diaChi, gioChieu, hinhAnh, maLichChieu, ngayChieu, tenCumRap,tenPhim,tenRap,danhSachGhe) {
  return {
    diaChi,
    gioChieu,
    hinhAnh,
    maLichChieu,
    ngayChieu,
		tenCumRap,
		tenPhim,
		tenRap,
    history: danhSachGhe
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.diaChi}
        </TableCell>
        <TableCell align="left">{row.gioChieu}</TableCell>
        <TableCell align="left"><img src={row.hinhAnh} style={{width:"150px",height:'100px',borderRadius:'5px'}} alt="hinhAnh" /></TableCell>
        <TableCell align="left">{row.maLichChieu}</TableCell>
				<TableCell align="left">{row.ngayChieu}</TableCell>
        <TableCell align="left">{row.tenCumRap}</TableCell>
        <TableCell align="left">{row.tenPhim}</TableCell>
        <TableCell align="left">{row.tenRap}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Danh Sách Ghế
              </Typography>
              <Table  aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Mã ghế</TableCell>
                    <TableCell>Tên ghế</TableCell>
                    <TableCell>Mã rạp</TableCell>
                    <TableCell>Loại ghế</TableCell>
                    <TableCell>Stt</TableCell>
                    <TableCell>Tài khoản người đặt</TableCell>
                    <TableCell>Giá vé</TableCell>
                    <TableCell>Đã đặt</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow,index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">
                        {historyRow.maGhe}
                      </TableCell>
                      <TableCell>{historyRow.tenGhe}</TableCell>
											<TableCell>{historyRow.maRap}</TableCell>
                      <TableCell>{historyRow.loaiGhe}</TableCell>
                      <TableCell>{historyRow.stt}</TableCell>
                      <TableCell>{(historyRow.taiKhoanNguoiDat)?historyRow.taiKhoanNguoiDat:'Chưa có người đặt'}</TableCell>
                      <TableCell>{historyRow.giaVe}</TableCell>
                      <TableCell>{(historyRow.daDat)?'Đang đặt':'Còn trống'}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export const DanhSachPhongVeTable = (props) => {
	let thongTinPhim = props.children.thongTinPhim;
	let danhSachGhe = props.children.danhSachGhe;
  const rows = [
    createData(
      thongTinPhim.diaChi,
      thongTinPhim.gioChieu,
      thongTinPhim.hinhAnh,
      thongTinPhim.maLichChieu,
      thongTinPhim.ngayChieu,
      thongTinPhim.tenCumRap,
      thongTinPhim.tenPhim,
			thongTinPhim.tenRap,
			danhSachGhe,
    ),
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Địa chỉ</TableCell>
            <TableCell>Giờ chiếu</TableCell>
            <TableCell>Hình ảnh</TableCell>
            <TableCell>Mã lịch chiếu</TableCell>
            <TableCell>Ngày chiếu</TableCell>
            <TableCell>Tên cụm rạp</TableCell>
            <TableCell>Tên phim</TableCell>
            <TableCell>Tên rạp</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.maLichChieu} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
