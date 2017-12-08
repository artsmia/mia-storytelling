const Story = `
  type Story {
    id: ID
    title: String
    description: String
    template: TemplateEnum
    visibility: VisibilityEnum
    contents: [Content]
    previewImage: Image
    updatedAt: String
  }
`

export default Story