import React from 'react'

export const User = () => {
  return (
    <div className='container'>

        <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <div className="card-header">Lista de Usuários</div>
        <div className="card-title">Usuários</div>
        <div className="card-body">
            <div className='mb-3 d-flex jus'><button type="button" className='btn btn-primary'><i class="bi bi-person-plus-fill"></i> Novo Usuário </button></div>
            <table class="table table-striped table-hover table-bordered border-primary">
                <thead className='table-dark'>
                    <tr>
                    <th scope="col">Código</th>
                    <th scope="col">Name</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>    
                    <div className='d-flex justify-content-center gap-2'>
                        <div>
                        <button className='btn btn-warning'><i class="bi bi-pencil-square"></i></button></div>
                        <div>
                        <button className='btn btn-danger'><i class="bi bi-trash3-fill"></i></button></div>
                    </div>
                    </td>
                    </tr>                    
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}
