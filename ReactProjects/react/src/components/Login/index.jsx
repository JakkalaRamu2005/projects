import { useState } from 'react'
import { useNavigate } from 'react-router'
import Cookies from 'js-cookie'
import "./index.css"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    const navigate = useNavigate()

    const onChangePassword = event => setPassword(event.target.value);
    const onChangeUsername = event => setUsername(event.target.value);

    const onSubmitSuccess = jwtToken => { 
        Cookies.set('jwt_token', jwtToken, {expires: 30})
        navigate('/',{replace: true})
    }

    const onSubmitFailure = message =>{
         setErrorMsg(message);
    }

    const submit = async(event)=>{
        event.preventDefault()
        const userDetails = {username, password}
        const url = "https://fakestoreapi.com/auth/login"
        const options = {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userDetails),
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data);

        if(response.ok){
            onSubmitSuccess(data.token)
        }else{
            onSubmitFailure(data.error || "Login failed")
        }
    }


    return (
        <div className='container-login'>
            <form onSubmit={submit}>
                <div>
                    <label htmlFor="username">UserName:</label>
                    <input type="text" placeholder='UserName' id="username" value={username} onChange={onChangeUsername} />
                </div>
                <div>
                    <label htmlFor='password'>Password:</label>
                    <input type="password" placeholder='Password' id="password" value={password} onChange={onChangePassword}/>
                </div>
                <button type='submit'>login</button>
                {errorMsg && <p className='error-msg'>{errorMsg}</p>}
            </form>
        </div>
    )
}

export default LoginForm
