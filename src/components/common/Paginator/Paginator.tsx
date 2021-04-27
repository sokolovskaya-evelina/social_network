import React from 'react';
import {Pagination} from "antd";

type PaginatorPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void

}

const Paginator: React.FC<PaginatorPropsType> = ({totalUsersCount, onPageChanged}) => {
    return (
        <Pagination
            total={totalUsersCount | 1}
            showSizeChanger={false}
            onChange={onPageChanged}
        />
    )
};

export default Paginator;