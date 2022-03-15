import { Injectable } from '@nestjs/common';

const todoList = [
  {
    id: 1,
    name: 'Analyse document',
    date: new Date(2022, 1, 4),
  },
  {
    id: 2,
    name: 'Develop the story',
    date: new Date(2022, 1, 10),
  },
  {
    id: 3,
    name: 'QA the story',
    date: new Date(2022, 1, 12),
  },
];

@Injectable()
export class AppService {
  getTodoList() {
    return todoList;
  }
}
