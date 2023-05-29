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

import { type } from "os"


/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:
*/
//1.1 Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
type TPerson = {
    id: string,
    name: string,
    email: string,
    password: string,
    role: RoleUser
}



//1.2 Type Aliases para 2 contas (AdminAccount, NormalAccount) com as propriedades nickname e permission;

type TAdminAccount = {
    nickName: string,
    permission: true
}

type TNormalAccount = {
    nickName: string,
    permission: false //dessa forma selamos a informação, poderia ser boolean porém ele aceitaria true ou false
}

//1.3 Crie exemplos de usuários Admin e Normal;

const userAdmin: TAdminAccount = {
    nickName: "userAdmin",
    permission: true
}

const userNormal: TNormalAccount = {
    nickName: "userNormal",
    permission: false
}

/* PRÁTICA GUIADA - Parte 2
Vamos continuar nosso sistema de cadastro de usuários criando:
*/
//2.1 Enum com valores ADMIN e NORMAL e atribua a propriedade role do Tperson;

enum RoleUser { //valores pré-definidos (não mudam)
    Admin = "Admin",
    Normal = "Normal"
}

const person: TPerson = {
    id: "001",
    name: "Flávia",
    email: "flavia@email",
    password: "123",
    role: RoleUser.Admin
}

//2.2 Tipo Intersection unindo: pessoa(TPerson) + permissão (Role);

type TPersonAdmin = TPerson & TAdminAccount
type TPersonNormal = TPerson & TNormalAccount

const personAdmin: TPersonAdmin = {
    id: "002",
    name: "Flávia F.",
    email: "flavia2@email",
    password: "1234",
    role: RoleUser.Admin,
    nickName: "userAdmin",
    permission: true
}

const personNormal: TPersonNormal = {
    id: "003",
    name: "Flávia F. S.",
    email: "flavia3@email",
    password: "12345",
    role: RoleUser.Normal,
    nickName: "userNormal",
    permission: false
}

//2.3 Um array de usuários que permite guardar apenas usuários do tipo Person + Role;
//formas de tipar arrays com 02 tipos de types diferentes

const usersPersonRole: Array<TPersonAdmin | TPersonNormal> = [personAdmin, personNormal]

const usersPersonRole2: (TPersonAdmin | TPersonNormal)[] = [personAdmin, personNormal]

//console.log(usersPersonRole)
