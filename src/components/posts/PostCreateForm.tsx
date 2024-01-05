import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react"

import FormButton from "../common/FormButton"

function PostCreateForm() {
  // useFormState()
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create a Post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action="">
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Post</h3>
            <Input
              name="title"
              placeholder="Title"
              label="Title"
              labelPlacement="outside"
            />
            <Input
              name="content"
              placeholder="Content"
              label="Content"
              labelPlacement="outside"
            />
            <FormButton>Create Post</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  )
}

export default PostCreateForm
