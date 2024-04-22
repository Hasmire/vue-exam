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
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
</script>

<template>
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
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="name" class="text-right"> Title </Label>
          <Input id="name" value="Pedro Duarte" class="col-span-3" />
        </div>
        <div class="grid grid-cols-4 items-center gap-4">
          <Label for="message" class="text-right">Your message</Label>
          <Textarea id="message" placeholder="Type your message here." class="col-span-3" />
        </div>
      </div>
      <DialogFooter>
        <DialogClose as-child>
          <div class="flex gap-2">
            <Button type="button" variant="secondary">Close</Button>
            <Button type="submit"> Save changes </Button>
          </div>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>

  <div class="mt-4 text-xl font-semibold">List of Tasks</div>
  <div class="flex flex-wrap justify-center gap-4 mt-4 w-2/4">
    <div v-for="i in 10" :key="i">
      <Card class="w-[450px]">
        <CardHeader>
          <CardTitle>Task Title</CardTitle>
          <CardDescription>ID #{i}</CardDescription>
        </CardHeader>
        <CardContent>
          <div>Lorem ipsum</div>
        </CardContent>
        <CardFooter class="flex justify-end gap-6 px-6 pb-6">
          <Button variant="destructive">Delete</Button>
          <Button>Update</Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>
