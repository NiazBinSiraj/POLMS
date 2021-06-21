export class AppState{
    public static instance = new AppState;

    user_id:number = 0;
    user_name:string = "";
    user_type:string = "";
    isLoggedIn:boolean = false;
}