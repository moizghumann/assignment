import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string(),
  email: z.string(),
  body: z.string()
});

type FormData = z.infer<typeof schema>;

interface FormProps {
  onSubmit: (data: FormData) => void;
}

const AddData = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({ resolver: zodResolver(schema) });


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className=' mb-4 grid place-items-center gap-3'>

        {/* name input field */}
        <label className=' font-medium text-start text-lg  text-white' htmlFor='name'>
          Name
        </label>
        <input type='text'
          id='name'
          {...register('name')} />
        {errors.name &&
          <span>{errors.name.message}</span>}

        {/* email input field */}
        <label className=' font-medium text-left text-lg  text-white' htmlFor='email'>
          Email
        </label>
        <input type='text'
          id='email'
          {...register('email')} />
        {errors.email &&
          <span>{errors.email.message}</span>}

        {/* body input field */}
        <label className=' font-medium text-left text-lg  text-white' htmlFor='body'>
          Body
        </label>
        <input type='text'
          id='body'
          {...register('body')} />
        {errors.body &&
          <span>{errors.body.message}</span>}

      </div>

      <button type='submit' className=' text-white'>Add</button>
    </form>
  )
}

export default AddData