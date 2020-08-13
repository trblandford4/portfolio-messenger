import React from "react";
import { Form, Input, Button } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faUser,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

import "./ContactForm.styles.scss";

const ContactForm = ({ onFinish, onFinishFailed }) => {
  return (
    <Form
      name="basic"
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input prefix={<FontAwesomeIcon icon={faUser} />} />
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
        <Input prefix={<FontAwesomeIcon icon={faEnvelope} />} />
      </Form.Item>

      <Form.Item
        label="Message"
        name="message"
        rules={[{ required: true, message: "Please input your message!" }]}
      >
        <Input.TextArea autoSize={{ minRows: 3, maxRows: 5 }} allowClear />
      </Form.Item>

      <div className="send-button">
        <Form.Item>
          <Button
            type="primary"
            size="large"
            shape="circle"
            htmlType="submit"
            icon={<FontAwesomeIcon icon={faPaperPlane} />}
            style={{ padding: "2.4px" }}
          />
        </Form.Item>
      </div>
    </Form>
  );
};

export default ContactForm;
