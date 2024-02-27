// App.tsx
import React from 'react';
import Filter from './components/filter/filter';

const App = () => {
  const tasks = [
    { 
      id: 1, 
      date: '2024-02-27', 
      tag: 'Work', 
      member: 'John', 
      priority: '' 
    },
    { 
      id: 2, 
      date: '2024-02-28', 
      tag: 'Study', 
      member: 'Alice', 
      priority: 'Medium' 
    },
    { 
      id: 3, 
      date: '', // No date
      tag: 'Project', 
      member: 'Bob', 
      priority: '' 
    },
    { 
      id: 4, 
      date: '2024-03-01', 
      tag: 'Work', 
      member: '', 
      priority: 'High' 
    },
    { 
      id: 5, 
      date: '', // No date
      tag: 'Study', 
      member: 'John', 
      priority: 'Medium' 
    },
    { 
      id: 6, 
      date: '2024-03-02', 
      tag: 'Project', 
      member: 'Bob', 
      priority: '' 
    },
    // Add more tasks as needed
  ];
  
  return (
    <div>
      <Filter tasks={tasks} />
    </div>
  );
};

export default App;
