<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

import { Button } from '@/components/ui/button'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { taskFormSchema } from '@/types/task'
import { useToast } from './ui/toast'
import { createTask, fetchTasks } from '@/services/task'
import { useTaskStore } from '@/stores/storedTask'

const { toast } = useToast()
const taskRef = useTaskStore()
const form = useForm({
  validationSchema: toTypedSchema(taskFormSchema)
})

const onSubmit = form.handleSubmit(async (values) => {
  console.log('Form submitted!', values)
  try {
    await createTask(values)
    taskRef.update(await fetchTasks())
  } catch (error) {
    console.error('An error occurred while creating a new task:', error)
    toast({
      title: 'Error Creating Task',
      description: 'An error occurred while creating a new task',
      variant: 'destructive'
    })
  }
})
</script>

<template>
  <form @submit="onSubmit" id="addTask">
    <Dialog>
      <DialogTrigger as-child>
        <Button class="mt-4">Add Task</Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[450px]">
        <DialogHeader>
          <DialogTitle>Add Task</DialogTitle>
          <DialogDescription> You can add a new task here. </DialogDescription>
        </DialogHeader>
        <div class="grid gap-4 py-4">
          <div class="flex w-full flex-col gap-2">
            <FormField v-slot="{ componentField }" name="title">
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Enter Title" v-bind="componentField" />
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
          <div class="flex w-full flex-col gap-2">
            <FormField v-slot="{ componentField }" type="radio" name="status">
              <FormItem class="space-y-3">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <RadioGroup class="flex flex-col space-y-1" v-bind="componentField">
                    <FormItem class="flex items-center space-y-0 gap-x-3">
                      <FormControl>
                        <RadioGroupItem value="ACTIVE" />
                      </FormControl>
                      <FormLabel class="font-normal">Active</FormLabel>
                    </FormItem>
                    <FormItem class="flex items-center space-y-0 gap-x-3">
                      <FormControl>
                        <RadioGroupItem value="INACTIVE" />
                      </FormControl>
                      <FormLabel class="font-normal">Inactive</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            </FormField>
          </div>
        </div>
        <DialogFooter>
          <DialogClose as-child>
            <div class="flex gap-2">
              <Button type="button" variant="secondary">Close</Button>
              <Button type="submit" form="addTask">Create Task</Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </form>
</template>
