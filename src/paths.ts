const paths = {
  home() {
    return "/"
  },
  topicShow(topicSlug: string) {
    return `/topics/${topicSlug}`
  },
  postShow(topicSlug: string, postId: string) {
    return `/topics/${topicSlug}/posts/${postId}`
  },
  postCreate(topicSlug: string) {
    return `/topics/${topicSlug}/posts/new`
  },
}

export default paths
