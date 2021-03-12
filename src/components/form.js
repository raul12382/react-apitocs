import {Button, Col, Form, Input, Row, Select, Switch, message, Modal} from "antd";
import React, {useEffect, useState} from "react";
import axios from "axios";

const {Option} = Select;

const APIForm  = (props) => {
    const [form] = Form.useForm();
    const [image_category, setImage_category] = useState('');
    const [image_category2, setImage_category2] = useState('');
    const [image_category3, setImage_category3] = useState('');
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

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
    
        return isJpgOrPng;
    }

    useEffect(() => {
      
    }, []);

    const updateImage = (e) => {
        setImage_category({object: e.target.files[0], url: URL.createObjectURL(e.target.files[0])})
    };
    const updateImage2 = (e) => {
        setImage_category2({object: e.target.files[0], url: URL.createObjectURL(e.target.files[0])})
    };
    const updateImage3 = (e) => {
        setImage_category3({object: e.target.files[0], url: URL.createObjectURL(e.target.files[0])})
    };

    const apiKey = '433a8e1ed0dc4495974a9f95018eed8f'

    const onFinish = async (values) => {

        var formData = new FormData();
        if (image_category.object) {
            formData.append('id_front', image_category.object)
        }
        if (image_category2.object) {
            formData.append('id_back', image_category2.object)
        }
        if (image_category3.object) {
            formData.append('selfie', image_category3.object)
        }
        formData.append('apiKey', apiKey) 
        formData.append('documentType', values.documentType)

        //const response = await axios.post(`https://sandbox-api.7oc.cl/v2/face-and-document`, formData)
        const response = await axios.post(`https://sandbox-api.7oc.cl/v2/face-and-document`, formData)
            setVisible(true)
            setInformation(response.data["information from document"].mrz.data)
        return response
    }

    return (

        <Form
            layout={'horizontal'}
            form={form}
            onFinish={onFinish}
        >
            <Row>
                <Col lg={12} xs={24} style={cols}>
                <   Form.Item name="id_front" label="INE Frontal" 
                    rules={[{required: true, message: 'Campo requerido'}]}
                >
                        <Input type="file" beforeUpload={beforeUpload}  onChange={updateImage}></Input>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col lg={12} xs={24} style={cols}>
                    <Form.Item name="id_back" label="INE Trasero"
                        rules={[{required: true, message: 'Campo requerido'}]}
                    >
                                <Input type="file" beforeUpload={beforeUpload}  onChange={updateImage2}></Input>
                    </Form.Item>
                </Col></Row>

            <Row>
                <Col lg={12} xs={24} style={cols}>
                    <Form.Item name="selfie" label="Selfie" 
                        rules={[{required: true, message: 'Campo requerido'}]}
                    >
                        <Input type="file" beforeUpload={beforeUpload} onChange={updateImage3}></Input>
                    </Form.Item>
                </Col></Row>
            <Row>
            <Row>
                <Col lg={12} xs={24} style={cols}>
                    <Form.Item name="documentType" label="Tipo Documento" 
                            rules={[{required: true, message: 'Campo requerido'}]}>
                        <Select placeholder="Selecciona el tipo de documento">
                            <Option value="MEX1">MEX1</Option>
                            <Option value="MEX2">MEX2</Option>
                            <Option value="MEX3">MEX3</Option>  
                        </Select>
                    </Form.Item>
                </Col>
            </Row>
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
                            <p>Apellidos Paternos: {information["family name"] ? information["family name"] : "Documento sin escanear"}</p>
                            <br/>
                            <p>Nombre Completo: {information.name ?  information.name : "Documento sin escanear"}</p>
                            <br/>
                            <p>Nacionalidad: {information.nationality ? information.nationality : "Documento sin escanear"}</p>
                            <br/>
                            <p>Genero: {information.gender ? information.gender : "Documento sin escanear"}</p>
                            <br/>
                            <p>Fecha Expiración: {information["expiration date"] ? information["expiration date"] : "Documento sin escanear"}</p>
                            <br/>
                            <p>Numero de documento: {information["document number"] ? information["document number"] : "Documento sin escanear"}</p>
                            <br/>
                            <p>Fecha Nacimiento: {information["date of birth"] ? information["date of birth"] : "Documento sin escanear"}</p>

                        </Modal>
                    </Form.Item>
                    
                </Col>
                    
            </Row>
        </Form>
    );
}


export default APIForm;
