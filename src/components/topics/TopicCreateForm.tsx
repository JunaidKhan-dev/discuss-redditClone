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

import FormButton from "../common/FormButton"

function TopicCreateForm() {
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  })

  return (
    <Popover placement="left" className="">
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
              isInvalid={!!formState.errors.name}
              errorMessage={formState.errors.name?.join(", ")}
            />

            <Textarea
              label="Description"
              name="description"
              labelPlacement="outside"
              placeholder="Describe your topic"
              isInvalid={!!formState.errors.description}
              errorMessage={formState.errors.description?.join(", ")}
            />
            {formState.errors._form && (
              <div className="p-2 bg-red-200 border border-red-400 rounded">
                {formState.errors._form.join(", ")}
              </div>
            )}
            <FormButton>Create</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default TopicCreateForm
