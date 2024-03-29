import PostCreateForm from "@/components/posts/PostCreateForm"

interface TopicShowPageProps {
  params: {
    slug: string
  }
}
function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">{slug}</h1>
      </div>
      <div>
        <PostCreateForm />
      </div>
    </div>
  )
}

export default TopicShowPage
