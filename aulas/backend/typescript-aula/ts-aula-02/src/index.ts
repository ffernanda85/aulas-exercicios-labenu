//Relembrando Tipagens
/* type TUser = {
  name: string;
  age: number;
};

const users: TUser[] = [
  {
    name: "Yuri",
    age: 20,
  },
  {
    name: "Marcos",
    age: 23,
  }
];

const users1: Array<{ name: string; age: number }> = [
  {
    name: "Yuri",
    age: 20,
  },
];

const users2: { name: string; age: number }[] = [
  {
    name: "Yuri",
    age: 20,
  },
];

const users3: Array<object> = [
  {
    name: "Yuri",
    age: 20,
  },
]; */

import { USER_ROLES, TPersonAdmin, TPersonNormal } from './types'

const personAdmin01: TPersonAdmin = {
    id: "001",
    name: "Flávia F.",
    email: "flavia1@email",
    password: "1234",
    account: "userAdmin",
    permission: USER_ROLES.ADMIN
}

const personAdmin02: TPersonAdmin = {
  id: "002",
  name: "Flávia F.2",
  email: "flavia2@email",
  password: "12343",
  account: "userAdmin",
  permission: USER_ROLES.ADMIN
}

const personAdmin03: TPersonAdmin = {
  id: "003",
  name: "Flávia F.3",
  email: "flavia3@email",
  password: "12343",
  account: "userAdmin",
  permission: USER_ROLES.ADMIN
}

const personNormal01: TPersonNormal = {
    id: "001",
    name: "Flávia F. S.",
    email: "flavia3@email",
    password: "12345",
    account: "userNormal",
    permission: USER_ROLES.NORMAL
}

const personNormal02: TPersonNormal = {
  id: "002",
  name: "Flávia F. S.",
  email: "flavia3@email",
  password: "12345",
  account: "userNormal",
  permission: USER_ROLES.NORMAL
}

const personNormal03: TPersonNormal = {
  id: "003",
  name: "Flávia F. S.",
  email: "flavia3@email",
  password: "12345",
  account: "userNormal",
  permission: USER_ROLES.NORMAL
}

const usersPersonRole: Array<TPersonAdmin | TPersonNormal> = [personAdmin01, personNormal01]
const usersPersonRole2: (TPersonAdmin | TPersonNormal)[] = [personAdmin01, personNormal01]

const usersAdmin: TPersonAdmin[] = []
usersAdmin.push(personAdmin01)
usersAdmin.push(personAdmin02)
usersAdmin.push(personAdmin03)

const usersNormal: TPersonNormal[] = []
usersNormal.push(personNormal01)
usersNormal.push(personNormal02)
usersNormal.push(personNormal03)

console.table(usersAdmin)
console.table(usersNormal)
