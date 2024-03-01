import React, {useContext} from 'react'
import { Button, Form, Input } from 'antd';
import data from '../data/data.json'
import { postContext } from '../Page/Newsfeed'

const FormCompornent = () => {
    
    //@ts.ignore
    const {setData, data} = useContext(postContext)
    const [form] = Form.useForm();
    const handleSubmit = (values: any) => {     
          const newData = {
            id: data.posts.length + 1,
            title: form.getFieldValue('title'),
            value: form.getFieldValue('content'),
            author: 'admin'
        };   
        setData([...data.posts, newData])
    }
return (
    <div className="p-4">
        <Form form={form} layout="vertical"
        onFinish={handleSubmit}        >
            <Form.Item label="Title" name="title"
            rules={[{ required: true, message: 'Please input your title!' }]}
            >
            <Input className="w-full" />
        </Form.Item>
            <Form.Item label="Content" name="content"
            rules={[{ required: true, message: 'Please input your content!' }]}
            >
            <Input.TextArea className="w-full" rows={4} />
            </Form.Item>
            <Button htmlType='submit' className='bg-blue-500'>submit</Button>
            <Button htmlType='reset' danger>cancle</Button>
    </Form>
    </div>
);
}

export default FormCompornent