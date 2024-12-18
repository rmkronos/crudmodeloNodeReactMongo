import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const AddUser = () => {

  const users = {
    name: "",
    email : "",
    address: ""
  }

  const [user, setUser] = useState(users);

  const inputHandler = (e) => {
     const {name, value} = e.target;
     console.log(name, value);
     
     setUser({...user, [name]: value});

  }

  const submitForm =  async (e) => {
    e.preventDefault();

    await axios.post('http://localhost:8000/api/user-create', user)
    .then((response)=>{
        console.log("Usuario cadastrado com sucesso!");
    })
    .catch((error)=>{
        console.log("Erro: ", error);
        
    });
  }

  return (
    <div>
      <div className='container'>
        <div className='card shadow-lg p-3 mb-5 bg-body-tertiary rounded'>
          <div className='card-header'>Novo Usuário</div>
          <div className="card-title">Cadastrar novo usuário</div>
          <div className='d-flex justify-content-end'>
            <Link to='/' type="button" className='btn btn-primary mt-1'><i class="bi bi-arrow-left-circle-fill"></i> Voltar</Link>
          </div>
          <div className="card-body">
          <form action="" onSubmit={submitForm}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" name='name' id="name" onChange={inputHandler} placeholder="Nome" required/>
              <label htmlFor="name">Nome</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" name='email' id="email" onChange={inputHandler} placeholder="name@example.com" required />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" name='address' id="address" onChange={inputHandler} placeholder="Endereço" required/>
              <label htmlFor="address">Endereço</label>
            </div>

            <div className='d-flex justify-content-center mt-3'>
              <button type="submit" className='btn btn-success'>Salvar</button>
            </div>
          </form>

          </div>
        </div>
      </div>

    </div>
  )
}

