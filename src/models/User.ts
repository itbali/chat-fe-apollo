import {AbstractModel} from "./AbstractModel";

export interface User extends AbstractModel{
  email: string
}

export interface CreateUserInput {
    createUserInput: {
      email: string
      password: string
  }
}

export interface LoginRequest {
  email: string
  password: string
}