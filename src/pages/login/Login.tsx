import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {WrapLogin} from "./styles";
import Input from "../../components/Input/Input"
import Button from "../../components/Button/Button";
import Checkbox from "../../components/Checkbox/Checkbox";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import {SubmitHandler, useForm} from "react-hook-form";

type Data = {
  login: string;
  password: string;
  rememberPass: boolean;
}

const Login = (): JSX.Element => {
  const { register, handleSubmit, formState: {errors} } = useForm<Data>();
  const [errorAuth, setErrorAuth] = useState<{message: string; status: boolean}>({message: '', status: false})
  const [load, setLoad] = useState<boolean>(false)
  const navigate = useNavigate()

  const checkAuth = (login: string, password: string, rememberPass: boolean) => {
    if (login === 'steve.jobs@example.com') {
      if (password === 'password') {
        if (rememberPass) {
          localStorage.setItem('remember', 'true')
        } else {
          localStorage.setItem('remember', 'false')
        }
        localStorage.setItem('auth', 'true')
        localStorage.setItem('login', login)
        setErrorAuth({message: '', status: false})
        navigate('/profile')
      } else {
        setErrorAuth({message: 'Неверный пароль', status: true})
      }
    } else {
      setErrorAuth({message: `Пользователя ${login} не существует`, status: true})
    }
    setLoad(false)
  }


  const onSubmit: SubmitHandler<Data> = ({login, password, rememberPass}) => {
    setLoad(true)
    setTimeout(() => checkAuth(login, password, rememberPass), 1000)
  }

  return (
    <WrapLogin>
      {
        errorAuth.status && <ErrorMessage message={errorAuth.message} style={{marginBottom: "30px"}}/>
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин"
          {...register("login", {required: true})}
          errorRequired={errors.login?.type === 'required'}
        />
        <Input
          type="password"
          placeholder="Пароль"
          {...register("password", {required: true})}
          errorRequired={errors.password?.type === 'required'}
        />
        <Checkbox
          text="Запомнить пароль"
          {...register("rememberPass")}
          style={{marginBottom: "40px"}}
        />
        <Button text="Войти" disabled={load}/>
      </form>
    </WrapLogin>
  );
};

export default Login;