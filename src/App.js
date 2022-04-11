import {React, useState} from 'react';
import Container from './components/UI/Container';
import AddUser from './components/User/AddUser';
import Users from './components/User/Users';
import Alert from './components/Alert/Alert'
function App() {

  //User
  const users = [
  ]

  //create NewUser
  let name = '';
  let age = '';

  
  const [newusers, setNewUsers] = useState(users)

  const [input, setInput] = useState('')


  //Name Input Data
  const setNameHandlerApp = (event) => {
    name = event.target.value
    setInput()
  }

  
  //show Alert
  let showAlert = true;
  let messageAlert = '';
  
  const [alert, setAlert] = useState(showAlert)
  const [messageAlertChange, setMessageAlert] = useState(messageAlert)
  
  //show User Container
  let showUsers = false;
  
const [showUserCont, setShowUsersCont] = useState(showUsers)

  //Age Input Data
  const setAgeHandlerApp = (event) => {
    age = event.target.value
  }

  //Save User
  const saveUserHandlerApp = (event) => {
    event.preventDefault()
    if (name === '' || age === '') {
      setAlert(false)
      setMessageAlert('Please enter a valide name and age (non-empty value)')
    } else if (age < 0) {
      setAlert(false)
      setMessageAlert('Please enter a valide age (> 0)')
    } else {
      let newUser = {
        id: Math.random().toString(),
        name,
        age,
      }
        setNewUsers([newUser, ...newusers])
        setInput('')
        setShowUsersCont(true)

      }
    }

  const hideAlertApp = () => {
    setAlert(true)
  }



  return (
    <div>
        <Container>
            <AddUser setNameHandler={setNameHandlerApp} setAgeHandler={setAgeHandlerApp} saveUserHandler={saveUserHandlerApp} inputStateApp={input} />
            <Users userArray={newusers} showUsersApp={showUserCont}/>
        </Container>
        <Alert showAlertApp={alert} hideAlert={hideAlertApp}>{messageAlertChange}</Alert>
    </div>
  );
}

export default App;
