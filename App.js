import React, { useState } from 'react';
import { View, TextInput, FlatList, Button, StyleSheet, Text } from 'react-native';
import Task from './components/Task'; 
export default function App() {
  const [tasks, setTasks] = useState([]); 
  const [title, setTitle] = useState(''); 
  const addTask = () => {
    if (title.trim() === '') return; 
    setTasks([...tasks, { id: Date.now(), title, status: 'due' }]);
    setTitle(''); 
  };

  const toggleStatus = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, status: task.status === 'due' ? 'done' : 'due' } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Task Title"
        value={title}
        onChangeText={setTitle}
      />
      
      <Button
        title="Add Task"
        onPress={addTask}
        disabled={title.trim() === ''}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            task={item} 
            onToggleStatus={toggleStatus} 
            onDeleteTask={deleteTask} 
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80, 
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
});