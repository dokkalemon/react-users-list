import {React, useState} from 'react';
import Container from './components/UI/Container';
import AddUser from './components/User/AddUser';
import Users from './components/User/Users';
import Alert from './components/Alert/Alert'


function App() {
  //User
  const users = [
  ]

  //State
  const [newusers, setNewUsers] = useState(users)
  const [nameChange, setName] = useState('');
  const [ageChange, setAge] = useState('')
  const [showAlert,setShowAlert] = useState(false)
  const [alertMessage, setAlertMessage] = useState('')

  
  
  //Name Input Data
  const setNameHandlerApp = (event) => {
    setName(event.target.value);
  }
  //Age Input Data
  const setAgeHandlerApp = (event) => {
    setAge(event.target.value);
  }

  //Save User
  const saveUserHandlerApp = (event) => {
    event.preventDefault()
    if (nameChange === '' || ageChange === '') {
      setAlertMessage('I due campi sono obbligatori')
      setShowAlert(true)
    } else if (ageChange < 0) {
      setAlertMessage('La data impostata non è valida')
      setShowAlert(true)
    } else {
      let newUser = {
        id: Math.random().toString(),
        name: nameChange,
        age: ageChange,
      }
        setNewUsers([newUser, ...newusers])
        setName('');
        setAge('')
    }
  }

  return (
    <div>
        <Container>
            <AddUser setNameHandler={setNameHandlerApp} setAgeHandler={setAgeHandlerApp} saveUserHandler={saveUserHandlerApp} nameValue={nameChange} ageValue={ageChange} />
            {newusers.length > 0 && <Users userArray={newusers} />}
        </Container>
            <Alert constAlert={showAlert} hideAlert={() => {setShowAlert(false)}}>{alertMessage}</Alert>
    </div>
  );
}

export default App;
