import react, {useEffect, useState} from 'react';
import StudentService from '../services/StudentService';
import {Link} from 'react-router-dom';

const Student=()=>{
    const [student, setStudent]= useState();
    useEffect(()=>{
        allStudent();
    },[]);
    const allStudent=()=>{
        StudentService.getAll().then(res=>{
            setStudent(res.data);
        })

        
    }
    const removeStudent=id=>{
        StudentService.destroy(id).then(res=>{
            allStudent();
            
        })
    }
    return(
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Trainee Id</th>
                    <th>Name</th>
                    <th>Subject</th>
                    <th>Obtain Marks</th>
                    <th>Action</th>
                </tr>
            </thead>
                
            <tbody>
                {student && student.map((item,index)=>(
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.trainee_id}</td>
                        <td>{item.name}</td>
                        <td>{item.subject}</td>
                        <td>{item.marks}</td>
                        <td>
                            <Link to={`edit/${item.id}`}>
                                <button className="btn btn-info">edit</button>
                            </Link>
                            <button onClick={() => removeStudent(item.id)} className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                ))}</tbody>
            
        </table>
    );
};

export default Student;