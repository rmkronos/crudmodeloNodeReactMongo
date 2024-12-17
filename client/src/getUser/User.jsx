import React, { useEffect, useState } from 'react'
import axios from 'axios';

export const User = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const fechtData =  async ()=>{
            
            try {

                const response = await axios.get("http://localhost:8000/api/user");
                setUsers(response.data);
                
            } catch (error) {
                console.log("Erro ao carregar os dados", error);
                
            }
        };
        fechtData();
    }, []);  

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
                     { users.map((user, index) => {
                        return (

                            <tr key={user.id}>
                            <th scope="row">{index +1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.address}</td>
                            <td>    
                            <div className='d-flex justify-content-center gap-2'>
                                <div>
                                <button className='btn btn-warning'><i class="bi bi-pencil-square"></i></button></div>
                                <div>
                                <button className='btn btn-danger'><i class="bi bi-trash3-fill"></i></button></div>
                            </div>
                            </td>
                            </tr>     

                        )
                    })}
                                  
                </tbody>
            </table>
        </div>
        </div>
    </div>
  )
}
