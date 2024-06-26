type UserData = {
    email: string;
    password: string;
    firstname: string;
    surname: string;
    dob: string;
    preference: string;
    enabled: boolean;
    subscribed: boolean
}

export type CartData ={
    items:[];
    totalPrice: number;
    inCart: number;
}

export default UserData;