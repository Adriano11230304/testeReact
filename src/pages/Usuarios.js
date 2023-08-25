import Header from '../components/Header';
import Nav from '../components/Nav';
import api from '../services/api';
import { useState, useLayoutEffect } from 'react';
import Loader from '../components/Loader';


function Usuarios() {
    const [peoples, setPeoples] = useState([]);
    const [loading, setLoading] = useState(true);

    useLayoutEffect(() => {
        async function getUsers() {
            setLoading(true);
            await api.get('people')
            .then(res => {
                setPeoples(res.data.results);
            })
            .finally(function () {
                setLoading(false);
            });
        }

        getUsers();
    }, []);

    return (
        <div className='container-fluid'>
            <Header />
            <div className='row'>
                <Nav />
                <div className="col-md-10">
                    <div className='container my-4'>
                        <h4>Users</h4>
                    </div>
                    
                    <div className="container-fluid">
                        <div className="m-3">
                            {loading ? <Loader /> :
                            <table className="table table-borderless table-hover mt-3">
                                <thead className="thead-dark text-md-center">
                                    <tr>
                                    <th>Nome</th>
                                    <th>Altura</th>
                                    <th>Peso</th>
                                    <th>Cor dos olhos</th>
                                    </tr>
                                </thead>
                                <tbody className="text-md-center">
                                    { peoples.map( people => (
                                        <tr>
                                            <td>{people.name}</td>
                                            <td>{people.height}</td>
                                            <td>{people.mass}</td>
                                            <td>{people.eye_color}</td>
                                        </tr>
                                    ))

                                    }
                                </tbody>
                            </table>
                        }
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default Usuarios;