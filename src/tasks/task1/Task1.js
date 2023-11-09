
import { useState } from 'react';
import './taskone.css'
import { TextField, Stack, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Nav from './Task1Nav';
import Common from './Common';

export default function Task1() {

    const [select, setSelect] = useState(0)
    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    const handleCoach = () => {
        setSelect(1)
        document.getElementById('user-opt').classList.add('remove-this')
        document.getElementById('opt-hidden').classList.add('show-this')
    }

    const handleUmpire = () => {
        setSelect(2)
        document.getElementById('user-opt').classList.add('remove-this')
        document.getElementById('opt-hidden').classList.add('show-this')
    }

    const handleCredentials = () => {
        // code to handle
    }


    const handleBack = () => {
        setSelect(0)
        document.getElementById('user-opt').classList.remove('remove-this')
        document.getElementById('opt-hidden').classList.remove('show-this')
    }

    return (
        <div>
            <Nav />
            <Common />

            <div className='main-disp'>
                <div className='introduction'>
                    Ball badminton, a fast-paced racquet sport, hails from India. This engaging game, which originated in the 19th
                    century, uses a rubber ball and specialized racquets on a rectangular court divided by a net. Players aim to score
                    points by skillfully placing the ball within the opponent's court. With unique serving techniques, variants for
                    singles and doubles play, and a rich cultural significance, ball badminton offers a dynamic and exciting sporting
                    experience. It promotes physical fitness, mental agility, and values like sportsmanship and respect. Enjoyed both
                    professionally and recreationally, this sport has found its way onto the international stage while remaining deeply
                    rooted in Indian culture.
                </div>

                <div className='user-options' id='user-options'>
                    {
                        select === 0 ?
                            <legend>select role</legend>

                            :

                            <legend className='back-text' onClick={handleBack}>Go Back</legend>
                    }
                    <div className="user-opt" id='user-opt'>
                        <button onClick={handleCoach}>Coach</button>
                        <button onClick={handleUmpire}>Umpire</button>
                        <button onClick={() => navigate('/')}>Fan</button>
                    </div>

                    <div className='opt-hidden' id='opt-hidden'>
                        <Stack direction='column' style={{ 'width': '80%' }} spacing={3}>
                            <TextField label='username' variant='filled' onChange={(e) => setName(e.target.value)} />
                            <TextField label='password' type='password' variant='filled' onChange={(e) => setPass(e.target.value)} />
                            <Button className='edit-js' onClick={handleCredentials}>Submit</Button>
                        </Stack>
                    </div>
                </div>

            </div>
        </div>
    )


}


