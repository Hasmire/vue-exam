<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { ref, onMounted, type Ref } from 'vue'
import type { Task } from '../types/task'
import { fetchTasks, deleteTask, updateTaskStatus } from '../services/task'
import { useToast } from './ui/toast/use-toast'

const tasks: Ref<Task[]> = ref([])
const { toast } = useToast()

onMounted(async () => {
  try {
    tasks.value = await fetchTasks()
  } catch (error) {
    console.error('An error occurred while fetching the tasks:', error)
    toast({
      title: 'Error Fetching Tasks',
      description: 'An error occurred while fetching the tasks.',
      variant: 'destructive'
    })
  }
})

const handleDeleteTask = async (id: number) => {
  try {
    await deleteTask(id)
    tasks.value = await fetchTasks()
    toast({
      title: 'Successfully Deleted Task',
      description: 'You have successfully deleted the task.'
    })
  } catch (error) {
    console.error('An error occurred while deleting the task:', error)
    toast({
      title: 'Error Deleting Task',
      description: 'An error occurred while deleting the task.',
      variant: 'destructive'
    })
  }
}

const handleUpdateTaskStatus = async (id: number) => {
  try {
    await updateTaskStatus(id)
    tasks.value = await fetchTasks()
    toast({
      title: 'Successfully Updated Task',
      description: 'You have successfully updated the status of the task.'
    })
  } catch (error) {
    console.error('An error occurred while updating the task status:', error)
    toast({
      title: 'Error Updating Task Status',
      description: 'An error occurred while updating the task status.',
      variant: 'destructive'
    })
  }
}
</script>

<template>
  <div class="mt-4 text-xl font-semibold">List of Tasks</div>
  <div class="flex flex-wrap justify-center gap-4 mt-4 w-9/12">
    <div v-if="tasks.length === 0" class="text-lg font-semibold">No tasks found.</div>
    <div v-for="task in tasks" :key="task.id">
      <Card class="w-[450px]">
        <CardHeader>
          <CardTitle>{{ task.title }}</CardTitle>
          <CardDescription>ID #{{ task.id }}</CardDescription>
        </CardHeader>
        <CardContent>
          <div>Status: {{ task.status }}</div>
        </CardContent>
        <CardFooter class="flex justify-end gap-6 px-6 pb-6">
          <Button variant="destructive" @click="handleDeleteTask(task.id)">Delete</Button>
          <Button @click="handleUpdateTaskStatus(task.id)">Update Status</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
