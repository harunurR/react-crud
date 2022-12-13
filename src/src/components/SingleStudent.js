import react, {useState,useEffect} from 'react';
import StudentService from '../services/StudentService';
import {useNavigate, useParams} from 'react-router-dom';


const SingleStudent= props =>{
    const {id}=useParams();

	const navigate = useNavigate();
    const initialStudentState={
        id:null,
        student_id:"",
        name:"",
        batch_number:""
    }

    const [student, setStudent]= useState(initialStudentState);

    useEffect(()=>{
        singleStudent(id);
    },[]);

    const singleStudent=id=>{
        StudentService.getSingle(id).then(res=>{
            setStudent(res.data);
        })
    }

    const handelInputChange = event =>{
        const {name, value} =event.target;
        setStudent({...student,[name]:value});
    }

    const updateStudent= () =>{
        StudentService.update(student).then(response=>{
			navigate('/students');
        }).catch(e=>{
            console.log(e);
        });
    }

    return(
        <div className='form-group'>
            <div>
                <div className='form-group'>
                    <label>Student ID</label>
                    <input type="text" className='form-control'
                        value={student.student_id}
                        onChange={handelInputChange}
                        name="student_id"
                        />
                </div>
                <div className='form-group'>
                    <label>Student Name</label>
                    <input type="text" className='form-control'
                        value={student.name}
                        onChange={handelInputChange}
                        name="name"
                        />
                </div>
                <div className='form-group'>
                    <label>Student Batch Number</label>
                    <input type="text" className='form-control'
                        value={student.batch_number}
                        onChange={handelInputChange}
                        name="batch_number"
                        />
                </div>
                <button onClick={() => updateStudent()} className="btn btn-success mt-2">Update</button>
            </div>
        </div>
    );
};

export default SingleStudent;