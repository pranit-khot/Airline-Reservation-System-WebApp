export class User{
//userId:number;
firstName :string;
lastName :string;
email :string;
password:string;
addresses: {
    address_id: number,
    street: string,
    user: number,
    state: {
        state_id: number,
        stateName: string,
        country: string
    }
}
//phone:string;
//passportNumber :string;
}