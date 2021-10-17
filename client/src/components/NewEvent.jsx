import React,{useState} from 'react'
import Client from '../services'



const NewEvent = (post) => {
    const [NewEvent, SetNewEvent] = useState({
        title: '',
        description: '',
        image: '',
        location: ''
    })


    const OnSubmit = async () => {
        const res = await Client.post('/newevent', NewEvent)
    }
}

const handleChange = (e) => {
    SetNewEvent({...NewEvent, [e.target.name]: e.target.value})
}










return







export default NewEvent