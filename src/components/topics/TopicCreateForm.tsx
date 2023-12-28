"use client"
import { useFormState } from "react-dom"

import * as actions from "@/actions"
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react"

function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  })
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Topic</Button>
      </PopoverTrigger>
      <PopoverContent className="p-4">
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input
              placeholder="Topic name"
              label="Name"
              name="name"
              labelPlacement="outside"
            />
            <Textarea
              label="Description"
              name="description"
              labelPlacement="outside"
              placeholder="Describe your topic"
            />
            <Button type="submit" color="primary">
              Create
            </Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default TopicCreateForm
