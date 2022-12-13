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
                    <th>Student ID</th>
                    <th>Student Name</th>
                    <th>Batch No</th>
                    <th>Action</th>
                </tr>
            </thead>
                
            <tbody>
                {student && student.map((item,index)=>(
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>{item.student_id}</td>
                        <td>{item.name}</td>
                        <td>{item.batch_number}</td>
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