import {Button, Col, Form, Input, Row, Select, Switch, message, Modal, Image} from "antd";
import React, {useEffect, useState, useRef} from "react";
import {ReactDOM, useHistory} from 'react-router-dom';
import axios from "axios";
import styles from '../App.css';
import SelectD from '../components/doom';
const {Option} = Select;

const APIForm  = (props) => {
    const [form] = Form.useForm();
    const [image_category, setImage_category] = useState("");
    const [image_category2, setImage_category2] = useState('');
    const [image_category3, setImage_category3] = useState('');
    const [information, setInformation] = useState({});
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('');
    const [dtype, setdtype] = useState(""); 
    const [tokenFront, setTokenFront] = useState("")
    const [tokenBack, setTokenBack] = useState("")
    const [tokenliveness, setTokenLiveness] = useState("")
    const [hidden, setHidden] = useState(false)
    const history = useHistory()

    const onChange = (value) =>{
        const a = value
        setdtype(a)
        setHidden(true)
        console.log(dtype)
    }


    const divAutocaptureBack = async (values) =>{
        const sessionId = await getSessionId();
        console.log('Session id', sessionId)

       const autocapture = window.TOCautocapture;
        const TOCautocapture = autocapture;

        TOCautocapture('container', {
                locale: "es",
                session_id: sessionId,
               document_type: dtype,
               document_side: "back",
               http: true,
           callback: function(captured_token, image){ 
            const token_imag = captured_token
            const image64 = image
            console.log(captured_token)   
            setTokenBack(token_imag)
            setImage_category(image64)
        },
           failure: function(error){ alert(error); }    
       }) 
    } 

    const divAutocaptureFront = async (values) =>{
        console.log(dtype)
        const sessionId = await getSessionId();
        console.log('Session id', sessionId)

       const autocapture = window.TOCautocapture;
        const TOCautocapture = autocapture;

        TOCautocapture('containerfront', {
                locale: "es",
                session_id: sessionId,
               document_type: dtype,
               document_side: "front",
               http: true,
           callback: function(captured_token, image){ 
            console.log(image)  
            const imgFront = image 
            const tokenF = captured_token
            setTokenFront(tokenF)
            setImage_category2(imgFront)
        },
           failure: function(error){ alert(error); }    
       }) 
    } 

    const divLiveness = async (values) =>{
        const sessionId = await getSessionId();
        console.log('Session id', sessionId)

       const autocapture = window.TOCliveness ;
        const TOCliveness  = autocapture;

        TOCliveness ('liveness', {
        locale: "es",
        session_id: sessionId,
        http: true,
        callback: function(token){ 
        const tl= token  
        setTokenLiveness(tl)},
        failure: function(error){ alert(error); }       
       }) 
    } 

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



    const updateImage = (e) => {
        setImage_category({object: e.target.files[0], url: URL.createObjectURL(e.target.files[0])})
    };
    const updateImage2 = (e) => {
        setImage_category2({object: e.target.files[0], url: URL.createObjectURL(e.target.files[0])})
    };
    const updateImage3 = (e) => {
        setImage_category3({object: e.target.files[0], url: URL.createObjectURL(e.target.files[0])})
    };

    const getSessionId = async () => {
        try{
            const response = await axios.get('http://localhost:3001/users')
            console.log('Session id response', response)
            return response.data.session_id;
        }catch(err){
            console.log('Error al obtener sesión', err)
        }
    }

    const apiKey = '433a8e1ed0dc4495974a9f95018eed8f' 
    const onFinish = async (values) => {

        let formData = new FormData();
        formData.append('id_front',tokenFront )
        formData.append('id_back',tokenBack )
        formData.append('selfie', tokenliveness)
        formData.append('apiKey', apiKey) 
        formData.append('documentType', "MEX2")
        //const response = await axios.post(`https://sandbox-api.7oc.cl/v2/face-and-document`, formData)
        const response = await axios.post(`https://sandbox-api.7oc.cl/v2/face-and-document`, formData)
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
                <Col lg={12} xs={24} style={cols} hidden={hidden} className="text-center">
                        <Select  placeholder="Selecciona el tipo de documento" onChange={onChange}>
                            <Option value="MEX1">MEX1</Option>
                            <Option value="MEX2">MEX2</Option>
                            <Option value="MEX3">MEX3</Option>

                        </Select>
                </Col>
            </Row>
            <Row>
                <Col lg={12} xs={24} style={cols}  className="text-center">
                <div>
                    <label className="text-center text-primary font-weight-bold">Captura</label>
                </div>
                <Button type="primary" onClick={divAutocaptureFront}>INE Frontal
                </Button>
                </Col>
            </Row>
            <Row>
                <Col lg={12} xs={24} style={cols}  className="text-center">
                    <div>
                    <label className="text-center text-primary font-weight-bold">Captura</label>
                    </div>
                    <Button type="primary" onClick={divAutocaptureBack}>INE Posterior
                    </Button>
                </Col></Row>

            <Row>
                <Col lg={12} xs={24} style={cols} className="text-center" >
                    <div>
                    <label className="text-center text-primary font-weight-bold">Captura</label>
                    </div>
                    <Button type="primary" onClick={divLiveness}>Liveness
                    </Button>
                </Col></Row>
            <Row>
                <Col lg={24} xs={24} className="text-center" style={{ alignItems: "center" }}>
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
                            <Image style={{width:20}} source={{uri:image_category2}}/>
                        </Modal>
                    </Form.Item>
                </Col>
                    {dtype}
                
            </Row>
            <div className="container-lg" id="containerfront">
            </div>
            <div id="container">
            </div>
            <div id="liveness">
            </div>
                               
        </Form>

        
    );
}



export default APIForm;
