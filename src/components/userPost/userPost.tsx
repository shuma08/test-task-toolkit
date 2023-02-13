import { LeftOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Button from 'antd/es/button'
import { useNavigate } from 'react-router-dom'
import "./styles.scss"

interface UserPostProp {
  title: string,
  body: string
}

const UserPost = ({ title, body }: UserPostProp) => {
const nav = useNavigate()
  return (
    <div>
      <div className='back-btn'>
        <Button
          type="ghost"
          icon={<LeftOutlined />}
          onClick={()=> nav("/")}
        >
          Back
        </Button>
      </div>
      <Card title={title} bordered={false} style={{ width: 300 }}>
        <p>{body}</p>
      </Card>

    </div>
  )
}

export default UserPost