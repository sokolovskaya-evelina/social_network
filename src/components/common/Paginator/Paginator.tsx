import React from 'react';
import {UserType} from "../../../types/types";
import {Pagination} from "antd";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

const Paginator: React.FC<UsersPropsType> = ({totalUsersCount,pageSize,onPageChanged,currentPage}) => {
    return (
        <Pagination
            total={totalUsersCount | 1}
            showSizeChanger={false}
            onChange={onPageChanged}
        />
    )
};

export default Paginator;