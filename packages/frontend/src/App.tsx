import React from 'react';
import { Content, Detail, Section } from './App.styled';
import { TodoList } from './components/TodoList';

function App() {
  return (
    <Content>      
      <h1>Todo list test</h1>
      <Section>
        <TodoList />
        <Detail>
          <span>Place to display the detail of a todo</span>
        </Detail>
      </Section>
    </Content>
  );
}

export default App;
