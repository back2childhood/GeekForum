import "./index.scss"
import { Card, Form, Input, Button } from "antd"
import logo from '@/assets/logo.png'

const Login = () => {
    const onFinish = (value) => {
        console.log(value)
    }


    return (
        <div className="login">
            <Card className="login-container">
                <img className="login-logo" src={logo} alt="" />
                <Form onFinish={onFinish} validateTrigger="onBlur">
                    <Form.Item
                        name="mobile"
                        rules={[
                            {
                                required: true,
                                message: 'please input your number!',
                            },
                            {
                                pattern: /^[0-9]*$/,
                                message: 'wrong number pattern!'
                            }
                        ]}>
                        <Input size="large" placeholder="please input your number" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            {
                                required: true,
                                message: 'please input your security code!',
                            },
                        ]}>
                        <Input size="large" placeholder="please input security code" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login