import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().required('Title is required'),
    link: Yup.string()
      .url('Invalid URL format')
      .required('Link is required'),
    image: Yup.string().url('Invalid URL format'), // Optional field for image
  });

  export {validationSchema}