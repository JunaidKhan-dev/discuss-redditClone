import TopicCreateForm from "@/components/topics/TopicCreateForm"
import TopicList from "@/components/topics/TopicList"
import { Divider } from "@nextui-org/react"

export default function Home() {
  return (
    <main className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-xl m-2">Top Posts</h1>
      </div>
      <div className="border shadow p-4">
        <TopicCreateForm />
        <Divider className="border shadow my-2" />
        <h2>Topics</h2>
        <TopicList />
      </div>
    </main>
  )
}
