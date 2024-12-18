import React from 'react'
import { Link } from 'react-router-dom'
export const AddUser = () => {
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
          <form action="">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" name='name' id="name" placeholder="Nome" required/>
              <label htmlFor="name">Nome</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" name='email' id="email" placeholder="name@example.com" required />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="address" placeholder="Endereço" required/>
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

