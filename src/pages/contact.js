import { Button, Form, Input, Select } from 'antd';
const { TextArea } = Input;

function AppContact() {
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{ width: 80 }}
        defaultValue="977"
        options={[
       
          { label: '+977', value: '977' },
        ]}
      />
    </Form.Item>
  );

  return (
    <div className='block'>
      <div className='container'>
        <h2>Contact</h2>

        <Form
          name='basic'
          layout='vertical'
          size='large'
          initialValues={{ remember: true }}
        >
          {/* Full Name */}
          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[{ required: true, message: 'Please input your Full Name!' }]}
          >
            <Input />
          </Form.Item>

          {/* Email */}
          <Form.Item
            label="Email"
            name="email"
            rules={[{ 
              required: true,
              type: 'email', 
              message: 'Please input a valid Email!' 
            }]}
          >
            <Input />
          </Form.Item>

          {/* Phone Number */}
          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <Input addonBefore={prefixSelector} />
          </Form.Item>
             <Form.Item
            label="Message"
            name="message"
            rules={[{ required: true, message: 'Please input message!' }]}
          >
              <TextArea rows={4}  />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
}

export default AppContact;

