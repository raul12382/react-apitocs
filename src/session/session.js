import {Button, Col, Form, Input, Row, Select, Switch, message, Modal} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";

const {Option} = Select;

const Session  = (props) => {
    const [form] = Form.useForm();
    const [information, setInformation] = useState({});
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('');

    const showModal = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setModalText('El modal se cerrara en dos segundos');
        setConfirmLoading(true);
        setTimeout(() => {
          setVisible(false);
          setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
      };

    const cols = {
        padding: 10
    };

    useEffect(() => {
      
    }, []);



    const apiKey = '433a8e1ed0dc4495974a9f95018eed8f'

    const onFinish = async (values) => {

        let config ={
            headers:{'Acces-Control-Allow-Origin': '/',
            'Cache-Control': 'no-cache',
            'Content-Type': 'multipart/form-data'
        }
        }

        let formData = new FormData
        formData.append('apiKey', apiKey) 
        formData.append('autocapture', true)
        //const response = await axios.post(`https://sandbox-api.7oc.cl/v2/face-and-document`, formData)
        const response = await axios.post(`https://session-manager/v1/session-id`, formData, config)
            setVisible(true)
            setInformation(response)
        console.log(response)
    }

    return (

        <Form
            layout={'horizontal'}
            form={form}
            onFinish={onFinish}
        >
                <Col lg={24} xs={24} style={{ alignItems: "center" }}>
                    <Form.Item style={{ marginTop: 10, marginLeft:20 }}>

                        <Button type="primary"
                                htmlType="submit"
                                className="text-light"
                                type="primary">
                                Enviar
                        </Button>
                        <Button style={{marginLeft: 20}} type="primary" onClick={showModal}>
                        informacion escaneada 
                        </Button>
                        <Modal
                            title="informacion escaneada "
                            visible={visible}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >
                            <p>Apellidos Paternos: {information.session_id ? information.session_id : "Documento sin escanear"}</p>

                        </Modal>
                    </Form.Item>
                    
                </Col>
                    
        </Form>
    );
}


export default Session;
