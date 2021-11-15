export const users: User[] = [{
  name:'Peter',
  username:'peter',
  password:'peter',
  userType:'enterprise'
},{
  name:'Praven',
  username:'praveen',
  password:'praveen',
  userType:'community'
}];

export interface User {
  name?:string,username?:string,password?:string,userType?:string
}
