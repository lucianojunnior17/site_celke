import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import Menu from '../components/Menu'

function Home() {
  return (
    <div>

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
                color: #fff
          }`} 
        </style>
        <Container className="text-center">
          <div>
            <h2 className="display-4">Serviços</h2>
            <p className="lead pb-4" > Subtítulos do Serviços</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div clasName="rounded-circle redondo centralizar" >
                A
                  </div>
            </div>
            <div className="col-md-4">
              <div clasName="rounded-circle circulo centralizar" >
                B
                      </div>

            </div><div className="col-md-4">
              <div clasName="rounded-circle circulo centralizar" >
                C
                      </div>

            </div>

          </div>

        </Container>
      </Jumbotron>


    </div>


  );
}




export default Home;