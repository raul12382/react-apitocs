import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link

} from "react-router-dom";

function Index() {


    return (
        <div className="card pl-6" >
            <img className="card-img-top text-align:center" style={{marginTop:20}} width={20} height={45} src="https://dev-web-plugins.s3.amazonaws.com/demo-toc-ci/static/logo_toc.svg" alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text font-weight-bold text-center">¡Te damos la bienvenida a la Demo de TOC Biometrics!</p>
            </div >
            <Link to="/Form">
            <div className="text-center ">
                <button className="card-btn border border border-primary rounded cardtext-align:center" style={{marginBottom: 20}}>
                        <img src="https://dev-web-plugins.s3.amazonaws.com/demo-toc-ci/static/onboarding.svg"/>
                </button>
            </div>
            <p className="card-text font-weight-bold text-center">Onboarding</p>
            </Link>
        </div>
    )
}

export default Index
