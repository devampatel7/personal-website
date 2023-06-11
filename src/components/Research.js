import React from 'react';
import ReactDOM from 'react-dom/client';
import poster from '../assets/img/aresty_ss.png';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";

import { Document, Page } from 'react-pdf';



export const Research = () => {



    return (
        <section className="skill" id="research">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Research</h2>
                            <p>In addition to projects (found in the gitHub link), I also had the chance to conduct research in my university:<br></br></p>
                            <img src={poster} alt='Image'/>
                            <a href="https://rutgers.primo.exlibrisgroup.com/discovery/delivery/01RUT_INST:01RUT/12663718460004646">More info found here: https://rutgers.primo.exlibrisgroup.com/discovery/delivery/01RUT_INST:01RUT/12663718460004646</a>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
      )





}