'use client'
import React from 'react'


const LoginForm = () => {


    return (
        <form>
            <div>
                <label>E-mail:</label>
                <input type="email" id='login-email' placeholder='yourmail@mail.com'/>
            </div>
            <div>
                <label>Password:</label>
                <input type="password" id='login-password' placeholder='********'/>
            </div>
            <button type='submit'>Sign in</button>
        </form>
    )
}

export default LoginForm;