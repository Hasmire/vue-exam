<script setup lang="ts">
import { Button } from '@/components/ui/button'
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
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
          <Label for="status" class="text-right">Status</Label>
          <RadioGroup default-value="comfortable" class="flex gap-4">
            <div class="flex items-center space-x-2">
              <RadioGroupItem id="r1" value="default" />
              <Label for="r1">Active</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem id="r2" value="comfortable" />
              <Label for="r2">Inactive</Label>
            </div>
          </RadioGroup>
        </div>
      </div>
      <DialogFooter>
        <DialogClose as-child>
          <div class="flex gap-2">
            <Button type="button" variant="secondary">Close</Button>
            <Button type="submit">Create Task</Button>
          </div>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
