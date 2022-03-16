import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import './App.css';

//eslint-disable-next-line no-unused-vars

import button from 'react-bootstrap/button';
import {Stack} from "react-bootstrap";
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";


function Chat() {
    return (
        <div className="Chat">
            <div className="box">
                <div className="message">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="msg-info">Jane Doe | 19:42</div>
                </div>
                <div className="message">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="msg-info">Jane Doe | 17:15</div>
                </div>
                <div className="message">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="msg-info">Jane Doe | 15:00</div>
                </div>
                <div className="message">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="msg-info">Jane Doe | 11:53</div>
                </div>

                <Stack direction="horizontal" gap={4}>
                    <Form.Control className="me-auto" placeholder="Lorem Ipsum..." />
                    <Button variant="outline-light">Send</Button>
                    <div className="vr" />
                </Stack>
            </div>

        </div>

    );
}
export default Chat;