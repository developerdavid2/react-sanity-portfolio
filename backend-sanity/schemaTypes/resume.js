export default {
  name: 'resume',
  title: 'Resume',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'A short title or description for the resume (optional)',
    },
    {
      name: 'file',
      title: 'Resume File',
      type: 'file',
      options: {
        accept: '.pdf', // Restricts file upload to PDFs
      },
      validation: (Rule) => Rule.required().error('Resume file is required'),
    },
    {
      name: 'uploadedAt',
      title: 'Uploaded At',
      type: 'datetime',
      description: 'The date and time when this resume was uploaded',
      initialValue: () => new Date().toISOString(),
    },
  ],
}
