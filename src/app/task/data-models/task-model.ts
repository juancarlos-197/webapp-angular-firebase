export class TaskModel {
    id: string;
  title: string;
  completed: boolean;
  
}
export interface UserResponseTaskModel {
    page: number;
  per_page: number;
  total: number;
    data: UserTaskModel[];

}
export interface UserTaskModel {
    id: string;
  email: string;
  first_name: string;
  
}
export interface PostsTaskModel {
    userid: number;
  id: number;
  title: string;
    body: string;
  message: string;

}
