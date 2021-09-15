import {Button, Col, Form, Row, Select, message, Modal, Image, Spin} from "antd";
import React, { useState, useRef} from "react";
import axios from "axios";
import ApiFacial from "../apiFacil/index";
const {Option} = Select;

const APIForm  = (props) => {
    const [form] = Form.useForm();
    const [imageFront, setImageFront] = useState("");
    const [imageBack, setImageBack] = useState(''); 
    const [imageLiveness, setImageLiveness] = useState('');
    const [information, setInformation] = useState({});
    const [visible, setVisible] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('');
    const [dtype, setdtype] = useState(""); 
    const [tokenFront, setTokenFront] = useState("")
    const [tokenBack, setTokenBack] = useState("")
    const [tokenliveness, setTokenLiveness] = useState("")
    const [hidden, setHidden] = useState(false)
    const [viewDiv, setViewDiv] = useState(true)
    const [viewDiv1, setViewDiv1] = useState(true)
    const [viewDiv2, setViewDiv2] = useState(true)
    const [div, setDiv] = useState(false)
    const [spinner, setSpinner] = useState(true)

    const ref = useRef(null)
    
    const onChange = (value) =>{
        const a = value
        setdtype(a)
        setHidden(true)
        console.log(dtype)
    }

    const divAutocaptureBack = async (values) =>{
        setViewDiv1(false)//estado para mostrar u ocultar sdk
        const sessionId = await getSessionId();//almacenamos el session id en una constante
        console.log('Session id', sessionId)
        const autocapture = window.TOCautocapture;//accedemos a la cdn que anexamos en el index.html
        const TOCautocapture = autocapture;//almacenamos el objeto de la libreria en una variable

        TOCautocapture('container', { //accedemos a ella con los parametrros indicados con el id container
            locale: "es",//idioma 
            session_id: sessionId,//la session generada previamente
            document_type: dtype, //el tipo de coumento
            document_side: "back",//parte trasera o frontal del documentp
            callback: function(captured_token, image){ //si es success realizamos el callback donde obtendremos el token y la imagen en base64 
            message.success('Captura Realizada', 3)//mensaje a mostrar al usuario con la libreria antd
            const token = captured_token//almacenamos el token
            const image64 = image//almacenamos la imagen
            console.log(captured_token)   
            setTokenBack(token)//seteamos el token a utilizar en los servicios que lo requieran
            setImageBack(image64)//seteamos la imagen a utilizar en los servicios que lo requieran
            setViewDiv1(true)//estado para mostrar u ocultar sdk
            divLiveness()//se ejecuta el siguiente sdk en este caso es liveness

        },
           failure: function(error){ 
            const e = error
            if (e === 405){
                e = "prueba de error"
            }else{
                e = "prueba de error 2"
            }
            message.error (e)
            },//en caso de error mostramos el mensaje con el error a mostrar, los errores se anexan en la documentación
           http: true, //dejar seteado si es un ambiente de desarrollo
       }) 
    } 

    const divAutocaptureFront = async (values) =>{
        setViewDiv(false)//estado para mostrar u ocultar sdk
        const sessionId = await getSessionId();//almacenamos el session id en una constante, de igual manera pueden setearlo en un estado para no llamar constantemente la función
        console.log('Session id', sessionId)
        const autocapture = window.TOCautocapture;//accedemos a la cdn que anexamos en el index.html
        const TOCautocapture = autocapture;//almacenamos el objeto de la libreria en una variable

        TOCautocapture('containerfront', {//accedemos a ella con los parametrros indicados
            locale: "es",//
            session_id: sessionId,//la session generada previamente
            document_type: dtype, //el tipo de coumento
            document_side: "front",
            callback: function(captured_token, image){ 
            message.success('Captura Realizada', 3);
            console.log(image)  
            const imgFront = image 
            const tokenF = captured_token
            setTokenFront(tokenF)
            setImageFront(imgFront)
            setViewDiv(true)
            divAutocaptureBack()
        },
        failure: function(error){ 
            console.log(error)
            let e = error
            if (e === "405"){
                e = "prueba de error"
            }else{
                e = "prueba de error 2"
            }
        message.error(e)
        
        } , 
        http: true,
    }) 
    } 

    const divLiveness = async () =>{

        setViewDiv2(false)//estado para mostrar u ocultar sdk
        const sessionId = await getSessionId();//almacenamos el session id en una constante, de igual manera pueden setearlo en un estado para no llamar constantemente la función
        console.log('Session id', sessionId)
        const autocapture = window.TOCliveness;//accedemos a la cdn que anexamos en el index.html
        const TOCliveness  = autocapture;//almacenamos el objeto de la libreria en una variable
        TOCliveness ('liveness', {//accedemos a ella con los parametrros indicados con el id=liveness
        locale: "es",//idioma
        http: true,
        session_id: sessionId,
/*         alt_server: "https://prod-liveness.tocws.com",
        url_lbliv: "https://prod-api.7oc.cl/liveness/image-saver/v1",    */
        callback: function(liveness_token, image){ //si es success realizamos el callback donde obtendremos el token
        message.success('Captura Realizada', 3)//mensaje a mostrar al usuario con la libreria antd
        const tl= liveness_token //almacenamos el token en una constanye
        const imageLiveness = image
        setTokenLiveness(tl)//seteamos el liveness a utilizar en otros llamados
        setImageLiveness(imageLiveness)
        setViewDiv2(true)//estado para mostrar u ocultar sdk
        },
        retry_on_timeout: true,
        failure: function(error){ message.error('Se ha generado el error: ' + error)
        console.log("el error es: " + error)
    },

        //en caso de error mostramos el mensaje con el error a mostrar, los errores se anexan en la documentación
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

    const getSessionId = async () => {
        try{
            const response = await axios.get('https://node-js-session.herokuapp.com/session')//generamos el session_id desde un backend
            console.log('Session id response', response)
            return response.data.session_id;
        }catch(err){
            console.log('Error al obtener sesión', err)
        }
    }

/*     const statusMatch = ()=>{
        if (match === 2) {
            message.success("Resultado positivo con un 99.99% de confianza.")
            if (match === 1) {
                message.warning("[DEPRECADO] Resultado positivo con un 96.5% de confianza.")
            }if (match === 0) {
                message.error("Resultado negativo de la verificación.")
            }if (match === -1) {
                message.error("No se ha podido encontrar una cara en la imagen enviada.")
            }
        }
    } */

    const apiKey = '433a8e1ed0dc4495974a9f95018eed8f' //api key entregada al cliente
    const onFinish = async () => {//func
            setSpinner(false)
            let formData = new FormData();
            formData.append('id_front',tokenFront )
            formData.append('id_back',tokenBack )
            formData.append('selfie', tokenliveness)
            formData.append('apiKey', apiKey) 
            formData.append('documentType', dtype)
        //const response = await axios.post(`https://sandbox-api.7oc.cl/v2/face-and-document`, formData)
            const response = await axios.post(`https://sandbox-api.7oc.cl/v2/face-and-document`, formData)
            setInformation(response.data)
            console.log(information)
            if (information.status == "200"){
                message.success("Validación positiva")
            } else{
                message.error("ha ocurrido el sigiuiente error: " + information.status)
            }
            setVisible(true)
            setSpinner(true)

    }

        let navegador = navigator.userAgent
        console.log ("el navegador es: " + navegador)


    return (
        <div>
             
        <Form
            form={form}
            onFinish={onFinish}
        >   
            <div hidden={div}>
                <ApiFacial/>                   
            </div>
            <label style={{color:"blue"}}>tu navegador es: {navegador}</label> 
           <div hidden={div} className="">
                <div style={{textAlign:"center"}} className="text-center">
                        <div className="text-center text-white border" style={{padding:10,  backgroundColor:'#03324B'}}>
                        <div style={{padding:10} } className="text-center">
                        <p className="text-white text-center">
                        Para verificar su identidad se necesitan fotos de su cédula de identidad y rostro, siguiendo los pasos que te mostraremos a continuación.
                        <br/>Evite usar accesorios como lentes o sombreros
                        <br/>Seleccione el tipo de documento para comenzar con la verificación.
                        </p>
                        </div>
                        </div>
                        <Select style={{paddingTop:10}} hidden={hidden} placeholder="Selecciona el tipo de documento" onChange={onChange}>
                            <Option value="MEX1"><Image preview={false} src="https://demo.toc.ai/static/id_mex1.png"></Image></Option>
                            <Option value="MEX2"><Image preview={false} src="https://demo.toc.ai/static/id_mex2.png">MEX2</Image></Option>
                            <Option value="MEX3"><Image preview={false} src="https://demo.toc.ai/static/id_mex3.png">MEX3</Image></Option>
                        </Select>
                </div>
            </div>
            {/* <Row hidden={div} className="text-center">
                <div style={cols} className="text-center text-white">
                <Button style={{backgroundColor:'#18938B'}} type="primary" onClick={divAutocaptureFront}>Realizar Onboarding
                </Button>
                </div>
            </Row>
            <Row>
                <Col lg={12} xs={24} style={cols}  className="text-center">
                    <div>
                    <label className="text-center text-white font-weight-bold">Captura</label>
                    </div>
                    <Button type="primary" onClick={divAutocaptureBack}>INE Posterior
                    </Button>
                </Col>
            </Row> 

            <Row>
                <Col lg={12} xs={24} style={cols} className="text-center" >
                    <div>
                    <label className="text-center text-white font-weight-bold">Captura</label>
                    </div>
                    <Button type="primary" onClick={divLiveness}>Liveness
                    </Button>
                </Col></Row>*/}
            <Col lg={24} xs={24} className="text-center" style={{ alignItems: "center" }}>
                    <Form.Item style={{ marginTop: 10}}>
                    <Col style={{paddingBottom:20}}>
                    <Button style={{backgroundColor:'#18938B'}} type="primary" onClick={divLiveness}>Realizar Onboarding
                    </Button>
                    </Col>
                    <Button className="btn-sm"
                                htmlType="submit"
                                className="text-light text-center"
                                style={{backgroundColor:'#18938B'}}
                                >
                                Enviar informacion
                    </Button> 
                       
                    </Form.Item>
                    <Col style={{paddingBottom:20, textAlign:"center"}} className="text-center">
                        <Button className="text-white" style={{backgroundColor:'#18938B'}}  onClick={showModal}>
                            informacion escaneada 
                        </Button>
                    </Col>
                </Col>   
            <Row hidden={div}>
            <div className="example" hidden={spinner}>
                <Spin />
            </div>
                             
            </Row> 
            <Modal
                            title="informacion escaneada "
                            visible={visible}
                            onOk={handleOk}
                            confirmLoading={confirmLoading}
                            onCancel={handleCancel}
                        >   <p>Resultado Biometrico: {information["biometric result"]}</p>
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
                            <div className="text-center">
                                <Image src={imageBack} width={50} height={50}></Image>
                                <Image src={imageFront} width={50} height={50}></Image>
                                <Image src={imageLiveness} width={50} height={50}></Image>
                            </div>
            </Modal>
           
        </Form>
            <div className="container container-fluid" hidden={viewDiv} style={{height:"50%", textAlign:"center", marginBottom:"auto", marginTop:"auto"}}>
                <div  id="containerfront">

                </div>
            </div>
            <div  className="container container-fluid"  hidden={viewDiv1} style={{height:"50%"}}>
                <div  id="container">

                </div>
            </div>
            <div  className="container container-fluid"  hidden={viewDiv2} style={{height:"50%"}} >
                <div id="liveness">

                </div>
            </div>
        </div>
    );
}



export default APIForm;
