import {useState} from "react";
import {Button, Flex, Input, Typography} from "antd";
import {NavLink} from "react-router-dom";
import {useCreateUser} from "../../hooks/useCreateUser";
import {extractGrapQLErrorMessage} from "../../lib/extractGrapQLErrorMessage";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
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
            setError('');
        }).catch(e => {
            const errorMessage = extractGrapQLErrorMessage(e);
            if(errorMessage) {
                console.warn(errorMessage);
                setError(errorMessage);
            } else {
                console.error(e);
                setError('Ошибка сервера');
            }
        })
    }
    return (
        <Flex vertical align={"stretch"} style={{width: '350px'}}>
            <Typography.Title level={1}>Register</Typography.Title>
            <Input placeholder="Логин" value={email} onChange={e => setEmail(e.target.value)}/>
            <Input.Password placeholder="Пароль" value={password} onChange={e => setPassword(e.target.value)}/>
            <Typography.Text type={"danger"} color={'red'}>
                {error}
            </Typography.Text>
            <Typography.Text>
                <NavLink to={'/login'}>Войти</NavLink>
            </Typography.Text>
            <Button type="primary" onClick={handleRegister}>Регистрация</Button>
        </Flex>
    );
};

export default Register;