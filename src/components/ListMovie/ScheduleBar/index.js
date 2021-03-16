import React from 'react'

export default function index(props) {
    return (
        <div className="schedule_bar">
            <div className="drop_btn btn_movie dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Phim
      <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Tiệc Trăng Máu - Blood Moon Party</a>
                    <a className="dropdown-item" href="#">Quill, Chú Chó Dẫn Đường - Quill: The Life of a Guide Dog (P)</a>
                    <a className="dropdown-item" href="#">Trại Xác Sống - The Clearing (C18)</a>
                </div>
            </div>
            <div className="drop_btn btn_small dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Rạp
                <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                </div>
            </div>
            <div className="drop_btn btn_small dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Ngày xem
                <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                </div>
            </div>
            <div className="drop_btn btn_small dropdown">
                <button className="edit_btn btn btn-secondary" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Suất chiếu
                <img src={props.DropdownIcon} alt='IconDropdown' />
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Vui lòng chọn phim, rạp và ngày xem</a>
                </div>
            </div>
            <button className="btn_small btn_confirm">MUA VÉ NGAY</button>
        </div>
    )
}
