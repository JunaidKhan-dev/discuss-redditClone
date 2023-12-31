interface TopicShowPageProps {
  params: {
    slug: string
  }
}
function TopicShowPage({ params }: TopicShowPageProps) {
  const { slug } = params
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  )
}

export default TopicShowPage
