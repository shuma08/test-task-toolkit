import Button from "antd/es/button";

export const userColumns = (post: (record: { id: number }) => void, album: (record: { id: number }) => void) => {

    return [
        {
            title: 'User name',
            dataIndex: 'username',
            key: "username"
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: "name"

        },
        {
            title: 'Phone Number',
            dataIndex: 'phone',
            key: "phone"

        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: "email"
        },
        {
            title: 'operation',
            dataIndex: 'operation',
            render: (_: any, record: any) => (
                <div>
                    <Button type="link" onClick={() => post(record.id)}>Posts</Button>
                    <Button type="dashed" onClick={()=> album(record.id)}>Albums</Button>
                </div>

            )
        },

    ]

}