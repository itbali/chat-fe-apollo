import {useState} from "react";
import {Button, Flex, Input, Typography} from "antd";
import {NavLink} from "react-router-dom";
import {useCreateUser} from "../../hooks/useCreateUser";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUser] = useCreateUser();
    const handleRegister = () => {
        createUser({
            variables: {
                createUserInput: {
                    email,
                    password
                }
            }
        }).then((d) => {
            console.log(d);
        }).catch(e => {
            console.error(e.message);
        })
    }
    return (
        <Flex vertical align={"stretch"} style={{width: '350px'}}>
            <Typography.Title level={1}>Register</Typography.Title>
            <Input placeholder="Логин" value={email} onChange={e => setEmail(e.target.value)}/>
            <Input placeholder="Пароль" type="password" value={password} onChange={e => setPassword(e.target.value)}/>
            <Typography.Text>
                <NavLink to={'/login'}>Войти</NavLink>
            </Typography.Text>
            <Button type="primary" onClick={handleRegister}>Регистрация</Button>
        </Flex>
    );
};

export default Register;