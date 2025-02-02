import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Switch } from 'react-native-paper'; 
const Task = ({ task, onToggleStatus, onDeleteTask }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.taskTitle}>{task.title}</Text>
      <View style={styles.statusContainer}>
      <Text style={styles.taskStatus}>{task.status === 'due' ? 'Due' : 'Done'}</Text>
      <Switch
        value={task.status === 'done'}
        onValueChange={() => onToggleStatus(task.id)}
      />
      </View>
      <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 10,
    elevation: 5,
    shadowColor: '#000', 
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statusContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom:10,
  },
  taskStatus: {
    fontSize: 16,
    marginBottom: 10,
  },
  deleteButton: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default Task;
