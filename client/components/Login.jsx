import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

export default function Login() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    console.log('new login:', login);
  }, [login]);

  return (
    <div className="nav-item">
      <div>
        <a className="google-button" href="/auth/google">
          Google+
        </a>
      </div>
      <div>
        <form onSubmit={handleSubmit((val) => setLogin({ ...val }))}>
          <input type="email" name="email" placeholder="email" ref={register} />
          <input
            type="password"
            name="password"
            placeholder="password"
            ref={register}
          />
          <input type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
}
