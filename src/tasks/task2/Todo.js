import { Button, TextField, Typography } from '@mui/material'
import './todo.css'
import { useState } from 'react'

export default function Todo() {

    const [cur, setCur] = useState('')
    const [arr, setArr] = useState([])
    const [removed, setRemov] = useState([])


    function handleUploadTodo() {
        setArr(arr => [...arr, cur]);
    }

    function returnDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const currentDate = month + "/" + date + "/" + year;

        return currentDate;
    }

    function getNumberOfDays(start, end) {
        const date1 = new Date(start);
        const date2 = new Date(end);

        const oneDay = 1000 * 60 * 60 * 24;
        const diffInDays = Math.round((date2.getTime() - date1.getTime()) / oneDay);

        return diffInDays;
    }

    // function diff_minutes(dt2, dt1) {

    //     var diff = (dt2.getTime() - dt1.getTime()) / 1000;
    //     diff /= 60;
    //     return Math.abs(Math.round(diff));

    // }


    return (
        <div>
            <center><Typography variant='h4'>ToDo List</Typography></center>
            <center>
                <TextField onChange={(e) => { setCur(e.target.value) }} label='Add Activity' style={{ 'margin': '20px', 'width': '80%' }}
                    InputProps={{
                        endAdornment: <Button variant='contained' onClick={handleUploadTodo}>Upload</Button>
                    }}
                />
            </center>
            <br />
            <div >
                <center>
                    <table className='disp-todo not-done'>

                        <thead>
                            <tr>
                                <th>Sl no.</th>
                                <th>Date Added</th>
                                <th>To-Do</th>
                                <th>Days passed</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {arr.map((element, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{returnDate()}</td>
                                    <td>{element}</td>
                                    {/* Days passed is an idea that can be implemented in frontend to remind users the number of days since he/she
                                    added into to-do list here I'm passing dummy dates */}
                                    <td>{getNumberOfDays(returnDate(), "11/19/2023")}</td>
                                    <td>
                                        <Button className='done-submit' onClick={() => {
                                            console.log(i);
                                            setRemov(removed => [...removed, arr[i]]);
                                            setArr([
                                                ...arr.slice(0, i),
                                                ...arr.slice(i + 1, arr.length)
                                            ]);

                                        }

                                        } >Done</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </center>
            </div>
            <br /><br />
            <div>
                <center>
                    <table className='disp-todo done'>

                        <thead>
                            <tr>
                                <th>Sl no.</th>
                                <th>Finished</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {removed.map((element, i) => (
                                <tr key={i}>
                                    <td>{i + 1}</td>
                                    <td>{element}</td>
                                    <td>
                                        <Button className='done-submit' onClick={() => {
                                            console.log(i);
                                            setArr(arr => [...arr, removed[i]]);
                                            setRemov([
                                                ...removed.slice(0, i),
                                                ...removed.slice(i + 1, removed.length)
                                            ]);

                                        }

                                        } >AddBack</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>

                    </table>
                </center>
            </div>
        </div >
    )
}

