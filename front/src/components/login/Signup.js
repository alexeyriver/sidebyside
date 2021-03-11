import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button} from 'react-bootstrap'
import { signUpFetchAC } from '../../redux/Thunk/authFetchesAC'

function Signup(props) {
  const [error, setError] = useState('');
  const [countUseEffect, setCountUseEffect] = useState(0)
  const dispatch = useDispatch();
  const handlerSign = (event) => {
    const {
      name: { value: name },
      email: { value: email },
      password: { value: password },
    } = event.target;
    event.preventDefault();
    dispatch(signUpFetchAC({ name, email, password }))
  };
  let erro = useSelector(state => state.auth)
  useEffect(() => {
    if (countUseEffect > 0 && erro?.authError) {
      setError(erro.authError)
    }
    setCountUseEffect(countUseEffect => countUseEffect = countUseEffect + 1)
  }, [erro])

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="containerCenter">
        {/* <div className="description"> */}
          <form onSubmit={handlerSign} className="formWrapper__wrapper">
                <label>Email:
              <input type="email" name="email" placeholder="Введите email" required />
                </label>
                <label>Пароль:
              <input type="password" name="password" placeholder="Введите пароль" required />
                </label>

                <label>Ваше имя:
            <input type="text" name="name" placeholder="Введите имя" required />
                </label>
            <button variant='secondary' type="submit" >Зарегистрироваться</button>

          </form >

        {/* </div> */}
      </div>

      <div className="error">{error}</div>
    </div >
  );
}

export default Signup;
