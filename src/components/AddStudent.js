import react, {useState} from 'react';
import StudentService from '../services/StudentService';
import {useNavigate} from 'react-router-dom';


const AddStudent=()=>{
	const navigate = useNavigate();
    const [student, setStudent]= useState();

    const handelInputChange = event =>{
        const {name, value} =event.target;
        setStudent({...student,[name]:value});
    }
    const saveStudent= () =>{
        StudentService.create(student).then(response=>{
			navigate('/students');
        }).catch(e=>{
            console.log(e);
        });
    }

    return(
        <div className='form-group'>
            <div>
                <div className='form-group'>
                    <label>Trainee ID</label>
                    <input type="text" className='form-control'
                        onChange={handelInputChange}
                        name="trainee_id"
                        />
                </div>
                <div className='form-group'>
                    <label>Name</label>
                    <input type="text" className='form-control'
                        onChange={handelInputChange}
                        name="name"
                        />
                </div>
                <div className='form-group'>
                    <label>Subject</label>
                    <input type="text" className='form-control'
                        onChange={handelInputChange}
                        name="subject"
                        />
                </div>
                <div className='form-group'>
                    <label>Marks</label>
                    <input type="text" className='form-control'
                        onChange={handelInputChange}
                        name="marks"
                        />
                </div>
                <button onClick={() => saveStudent()} className="btn btn-success">Save</button>
            </div>
        </div>
    );
};

export default AddStudent;