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


/* PRÁTICA GUIADA - Parte 1
Crie um sistema de cadastro de usuários que contenha:
*/
//1.1 Type Alias para uma pessoa (TPerson) com as propriedades id, name, email, password e role;
type TPerson = {
    id: number | string,
    name: string,
    email: string,
    password: string,
    role: string
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

1. Enum com valores ADMIN e NORMAL e atribua ã propriedade role do Tperson;
2. Tipo Intersection unindo: pessoa(Person) + permissão (Role);
3. Um array de usuários que permite guardar apenas usuários do tipo Person + Role;

*/
