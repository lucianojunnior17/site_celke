import React from 'react';

import Head from 'next/head';

import Menu from '../components/Menu'
import Rodape from '../components/Rodape';

import { Jumbotron, Container } from 'reactstrap';

function Home() {
  return (
    <div>
        <Head>
          <title>
            Home
          </title>
        </Head>

      <Menu /><hr />

      <Jumbotron fluid className="descr-top">
        <style>
          {`.descr-top{
                  background-color:#050c3d;
                  color:#00a1fc;
                  margin-bottom: 0rem !important;
              }`}
        </style>
        <Container className="text-center">
          <h1 className="display-4"> Temos a solução que a sua empresa precisa!</h1>
          <p classeName="lead"> This a simple hero unit, a simple Jumbotron</p>
          <p classeName="lead"></p>
          <a href='/orcamento' className="btn btn-outline-primary btn-lg mt-4" >Orçamento</a>

        </Container>
      </Jumbotron>

      <Jumbotron fluid className="servicos">
        <style>
          {`.servicos{
                background-color: #fff;
                margin-botton: 0rem !important; 
          }.redondo{
                width: 140px;
                height: 140px;
                background-color: #0A197D;
                font-size: 52px;
                color: #fff;
                padding-top: 24px;
          }.centralizar{
            margin: 0 auto !important;
            float: none !importante;
          }`} 
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">Serviços</h2>
            <p className="lead pb-4" > Subtítulos do Serviços</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="rounded-circle redondo centralizar" >
                A
                  </div>
                  <h2 className="mt-4 mb-4" >Serviço 1 </h2>
                  <p>paragrafo do serviço 1</p>
            </div>
            <div className="col-md-4">
              <div className="rounded-circle redondo centralizar" >
                B
                      </div>
                      <h2 className="mt-4 mb-4" >Serviço 2 </h2>
                  <p>paragrafo do serviço 2</p>

            </div><div className="col-md-4">
              <div className="rounded-circle redondo centralizar" >
                C
                      </div>
                      <h2 className="mt-4 mb-4" >Serviço 3 </h2>
                  <p>paragrafo do serviço 3</p>

            </div>

          </div>

        </Container>
      </Jumbotron>

      <Rodape />


    </div>


  );
}




export default Home;