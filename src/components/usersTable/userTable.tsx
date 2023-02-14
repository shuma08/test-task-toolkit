import { useEffect, useState } from 'react'
import { Modal, Table } from 'antd'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { userColumns } from './userColumns';
import "./styles.scss"
import { fetchAlbumById, fetchPostById, fetchUsers } from '../../store/reducers/ActionCreators';
import { useNavigate } from 'react-router-dom';

const UsersTable = () => {
    const { users, isLoading, error } = useAppSelector(state => state.userReducer);
    const { albums } = useAppSelector((state: any) => state.albumReducer);
    const [modal, setModal] = useState(false);
    const [userName, setUserName] = useState("")
    const dispatch = useAppDispatch();
    const nav = useNavigate();
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const handleUserPost = async (record: any) => {
        await dispatch(fetchPostById(record))
        nav("/post")
    }
    const handleUserAlbum = async (record: any) => {
        await dispatch(fetchAlbumById(record.id))
        setUserName(record.name)
        setModal(true)
    }
    return (
        <div className="users-table-container">
            <Modal
                title={`Album Title of ${userName}`}
                centered
                open={modal}
                onOk={() => setModal(prev => !prev)}
                onCancel={() => setModal(prev => !prev)}
            >
                <p>{albums.title}</p>
            </Modal>
            <Table
                loading={isLoading}
                columns={userColumns(handleUserPost, handleUserAlbum)}
                dataSource={users}
                pagination={
                    {
                        pageSize: 5,
                        showSizeChanger: false,
                        showLessItems: true,
                        hideOnSinglePage: true,
                        size: "small",
                    }
                }
            />
        </div>
    )
}

export default UsersTable