// =================== ENUMS ===============================

export enum USER_ROLES {
    ADMIN = "admin",
    NORMAL = "normal"
}

export enum COLORS {
    VIOLETA = "violeta",
    ANIL = "anil",
    AZUL = "azul",
    VERDE = "verde",
    AMARELO = "amarelo",
    LARANJA = "laranja",
    VERMELHO = "vermelho"
}


// ===================== TYPES =====================================

// ======================== PRATICA GUIADA ======================
type TPerson = {
    id: string,
    name: string,
    email: string,
    password: string,
}

type TAdminAccount = {
    account: string,
    permission: USER_ROLES.ADMIN
}

type TNormalAccount = {
    account: string,
    permission: USER_ROLES.NORMAL //dessa forma selamos a informação, poderia ser boolean porém ele aceitaria true ou false
}

export type TPersonAdmin = TPerson & TAdminAccount
export type TPersonNormal = TPerson & TNormalAccount

//==================== EXERCICIO 01 ====================
export type TPerson01 = {
    name: string
    age: number
    favoriteColor: COLORS
}

// =================== EXERCICIO 02 ====================
export type TPost = {
    author: string;
    text: string;
  };