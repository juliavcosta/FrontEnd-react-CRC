import axios from 'axios'
import React, { useState } from 'react'
import {Form, Button} from 'react-bootstrap'

export const Cadastrar = () => {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
          const response = await axios.post("http://localhost:8080/criarProfessor", {nome, email, senha})
          console.log(response.data)
    }catch(err){
      console.log(err)
    }
  }


  return (
    <div className='d-flex align-items-center justify-content-center' style={{height:"100vh"}}>
      <div className='border rounded p-5' style={{backgroundColor: '#008080', borderRadius: "25px"}}>
        <Form style={{color: '#ffffff', margin: "5px"}} onSubmit={handleSubmit}>
          <h1>Cadastrar</h1>
          <Form.Group controlId="formBasicText">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Digite seu nome" value={nome} onChange={(event) => setNome(event.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="Digite seu e-mail" value={email} onChange={(event) => setEmail(event.target.value)}></Form.Control>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" value={senha} onChange={(event) => setSenha(event.target.value)}></Form.Control>
          </Form.Group>
          <Button type="submit" style={{backgroundColor: "#5F9EA0", borderColor: "#5F9EA0", marginTop: "10px"}}>
                  Cadastrar
          </Button>
        </Form>
      </div>
    </div>
  )
}
