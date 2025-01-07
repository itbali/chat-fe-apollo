import {gql, useMutation} from "@apollo/client";
import {CreateUserInput, User} from "../models/User";

const CREATE_USER = gql`
    mutation CreateUser($createUserInput: CreateUserInput!) {
        createUser(createUserInput: $createUserInput) {
            _id
            email
        }
    }
`;

export const useCreateUser = () => {
    return useMutation<User, CreateUserInput>(CREATE_USER);
}