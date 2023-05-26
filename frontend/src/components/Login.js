import React, {useState} from 'react'
import axios from 'axios'
import {Form, Button } from 'react-bootstrap'
import { TabelaProfessor } from './TelaProfessor/page/TabelaProfessor';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState("")

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/loginProfessor", {email, senha});
      const data = response.data
      if(data.error){
        setError(data.error);
      } else {
        const accessToken = data.accessToken;
        const userId = data.id;
        setLoggedIn(true);
        localStorage.setItem("access-token", accessToken);
        localStorage.setItem("user-id", userId);
      }
    } catch (error) {
      console.error(error);
      setError("Ocorreu um erro durante o login");
    }
  };

  if(loggedIn) {
    return <Navigate to="/professor/:id" />
  }
  return (
    <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
      <div className="border rounded p-5"style={{backgroundColor: "#008080", borderRadius:"13px"}}>
        <Form style={{color: "#ffffff", margin:"5px"}} onSubmit={handleLogin}>
          <h1>Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Digite seu email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="Digite sua senha" value={senha} onChange={(event) => setSenha(event.target.value)}/>
          </Form.Group>
          <Button type="submit" style={{backgroundColor: "#5F9EA0", borderColor: "#5F9EA0", marginTop: "10px"}}>
                  Entrar
          </Button>
          {error && <p>{error}</p>}
        </Form>
        
      </div>
    </div>
  )
}
