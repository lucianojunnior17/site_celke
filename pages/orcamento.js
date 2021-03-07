import React from 'react'

import Head from 'next/head';
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

import { Jumbotron, Container, Button, Form, FormGroup, Label, Input} from 'reactstrap';

function Orcamento() {
  return (
    <div>
        <Head>
          <title>Orçamento</title>
          <meta> name="description" content="Site do Curso Celke Feito Por Luciano Lima Jr." </meta>
        </Head>

      <Menu /><hr />

      <Jumbotron fluid className="desc-top">
        <style>
          {`.descr-top{
                  background-color:#050c3d;
                  color:#00a1fc;
                  padding-top: 40px;
                  padding-botton: 40px
                  margin-bottom: 0rem !important;
              }`}
        </style>

        <Container className="text-center">
          <h1 className="display-4" >Orçamento</h1>
        </Container>

      </Jumbotron>

      <Jumbotron fluid className="fron-orcamento">
        <style>
          {`.fron-orcamento{
            padding-top: 80px;
            padding-botton: 80px;
            background-color: #fff;
            margin-botton: 0rem !important;
          }`}
        </style>
        <Container>
          <Form>
            <FormGroup>
            <Label for="name">Nome</Label>
            <Input type="text" name="name" id="name" placeholder="Digite seu nome" />
            </FormGroup>

            <FormGroup>
            <Label for="email">E-Mail</Label>
            <Input type="email" name="email" id="email" placeholder="Digite seu E-mail" />
            </FormGroup>

            <FormGroup>
            <Label for="phone">Telefone Residencial</Label>
            <Input type="text" name="phone" id="phone" placeholder="(XX) XXXX-XXXX" />
            </FormGroup>

            <FormGroup>
            <Label for="whatsapp">WhatsApp</Label>
            <Input type="text" name="whatsapp" id="whatsapp" placeholder="(XX) XXXX-XXXX" />
            </FormGroup>

            <FormGroup>
            <Label for="projeto">Projeto</Label>
            <Input type="textarea" name="projeto" id="projeto" placeholder="Fale um pouco do seu projeto" />
            </FormGroup>
            
            <Button type="submit" outline color="primary">Enviar</Button>

          </Form>
        </Container>

      </Jumbotron>

      <Rodape />

    </div>
  )
}

export default Orcamento;