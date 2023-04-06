import React from "react";
import { Accordion } from '@mantine/core';
import { Button } from 'reactstrap'
import { Link } from "react-router-dom";

const VariableEditor = () => {

    return (
        <div className="editor-container">
            <Accordion defaultValue="customization">
                <Accordion.Item value="customization">
                    <Accordion.Control className="rdw-faq-title">¿Cómo creo una cuenta?</Accordion.Control>
                    <Accordion.Panel className="rdw-faq-content">
                        Para crear una cuenta, ve a la página de registro y sigue los pasos que se indican. Deberás proporcionar tu dirección de correo electrónico y crear una contraseña segura.
                        <br/>
                        <br/>
                        <Link to={'/Perfil'}>
                            <Button className="btn btn-primary btn-block" color="success">
                                success
                            </Button>
                        </Link>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="flexibility">
                    <Accordion.Control className="rdw-faq-title">¿Cómo puedo cambiar mi contraseña?</Accordion.Control>
                    <Accordion.Panel className="rdw-faq-content">
                        Para cambiar tu contraseña, ve a la sección de Olvidaste tu contraseña, indica el correo electronico y le indicara en su correo electronico los pasos para cambiar su contraseña.
                        <br/>
                        <br/>
                        <Link to={'/Perfil'}>
                            <Button className="btn btn-primary btn-block" color="success">
                                success
                            </Button>
                        </Link>
                    </Accordion.Panel>
                </Accordion.Item>

                <Accordion.Item value="focus-ring">
                    <Accordion.Control className="rdw-faq-title">¿Cómo puedo contactar al equipo de soporte?</Accordion.Control>
                    <Accordion.Panel className="rdw-faq-content">
                        Puedes enviar un correo electrónico al equipo de soporte a infotpm3@gmail.com.
                        <br/>
                        <br/>
                        <Link to={'/Perfil'}>
                            <Button className="btn btn-primary btn-block" color="success">
                                success
                            </Button>
                        </Link>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export { VariableEditor };