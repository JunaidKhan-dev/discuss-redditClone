import Link from "next/link"

import { db } from "@/db"
import paths from "@/paths"
import { Chip } from "@nextui-org/react"
import { Topic } from "@prisma/client"

const TopicList = async () => {
  const topics = await db.topic.findMany()
  console.log("TOPICS", topics)
  const renderedTopics: JSX.Element[] = topics.map((topic: Topic) => {
    return (
      <div key={topic.id}>
        <Link href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    )
  })
  return <div className="flex flex-wrap gap-4 my-2">{renderedTopics}</div>
}

export default TopicList
