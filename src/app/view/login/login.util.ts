export function isAuth(value:any):boolean{
  return value['status'] !== '401' && value['status'] !== 401;
}
