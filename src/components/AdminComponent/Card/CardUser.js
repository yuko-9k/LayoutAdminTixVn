import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 50,
    display: "flex",
    width: "80%",
    justifyContent: "space-between",
    margin: " 0 auto",
    backgroundColor: "#2D2D2D",
    color: "#fff",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  img: {
    width: 100,
    borderRadius: "50%",
    height: 100,
    marginRight: 20,
    marginTop: 20,
  },
}));

export const CardUser = (data) => {
  const user = data.children;
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h3" variant="h3">
            Tên tài khoản:
            {user?.taiKhoan}
          </Typography>
          <Typography variant="subtitle1">
            Họ tên:
            {user?.hoTen}
          </Typography>
          <Typography variant="subtitle1">
            Số điện thoại:
            {user?.soDT}
          </Typography>
          <Typography variant="subtitle1">
            Địa chỉ email:
            {user?.email}
          </Typography>
          <Typography variant="subtitle1">
            Mã nhóm:
            {user?.maNhom}
          </Typography>
          <Typography variant="subtitle1">
            Mã loại:
            {user?.maLoaiNguoiDung}
          </Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.img}
        image="https://picsum.photos/200/300"
        title="Live from space album cover"
      />
    </Card>
  );
};
