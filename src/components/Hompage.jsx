import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

function Hompage() {
    return (
        <div>
            <Jumbotron style={{backgroundImage: 'url(https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGluZG9uZXNpYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)', backgroundSize: 'cover'}}>
                <h1 className="display-3">ADIWIYATA</h1>
                <p className="lead">Adiwiyata adalah upaya membangun program atau wadah yang baik dan ideal untuk mendapatkan
                        ilmu pengetahuan dan berbagai norma serta etika yang dapat menjadi dasar manusia menuju
                        terciptanya kesejahteraan hidup untuk Cita-cita pembangunan berkelanjutan.</p>
                <p>Adiwiyata merupakan nama program pendidikan lingkungan hidup.</p>
                <p className="lead">
                    <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
        </div>
    );
}

export default Hompage
