import {Button, Flex, Input, Typography} from "antd";
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {useLogin} from "../../hooks/useLogin";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {login, error} = useLogin();
    const handleRegister = () => {
        login({email, password}).then((d) => {
            console.log(d);
        }).catch(e => {
            console.error(e.message);
        })
    }
    return (
        <Flex vertical align={"stretch"} style={{width: '350px'}}>
            <Typography.Title level={1}>Auth</Typography.Title>
            <Input placeholder="Логин" value={email} onChange={e => setEmail(e.target.value)}/>
            <Input placeholder="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <Typography.Text>
                <NavLink to={'/register'}>Регистрация</NavLink>
            </Typography.Text>
            <Button onClick={handleRegister} type="primary">Войти</Button>
        </Flex>
    );
};

export default Auth;