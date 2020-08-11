import React from "react";
import { Form, Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const ContactForm = ({ onFinish, onFinishFailed }) => {
  return (
    <Form
      name="basic"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input
          placeholder="Who am I speaking with?"
          prefix={<FontAwesomeIcon icon={faUser} />}
        />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        type="email"
        rules={[
          {
            type: "email",
            message: "Please input a valid email!",
          },
          { required: true, message: "Please input your email!" },
        ]}
      >
        <Input
          placeholder="Best email to get back to you at?"
          prefix={<FontAwesomeIcon icon={faEnvelope} />}
        />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please input your message!" }]}
      >
        <Input.TextArea
          placeholder="How can I help you?"
          autoSize={{ minRows: 3, maxRows: 6 }}
          allowClear
        />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          shape="circle"
          htmlType="submit"
          icon={<FontAwesomeIcon icon={faPaperPlane} />}
          style={{ padding: "2.4px" }}
        />
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
