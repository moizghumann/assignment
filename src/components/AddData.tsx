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
      <div className=' flex flex-col items-start gap-3 w-full my-10'>

        {/* name input field */}
        <div className=' flex flex-col items-start'>
          <label className='text-start text-4xl font-bold italic text-[#264653] pb-3' htmlFor='name'>
            Name
          </label>
          <input type='text'
            className=' border-[#e76f51] border-2 rounded-2xl w-96 pb-4 mb-5 focus:outline-none'
            id='name'
            {...register('name')} />
          {errors.name &&
            <span>{errors.name.message}</span>}
        </div>


        {/* email input field */}
        <div className=' flex flex-col items-start'>
          <label className='text-start text-4xl font-bold italic text-[#264653] pb-3' htmlFor='email'>
            Email
          </label>
          <input type='text'
            className=' border-[#e76f51] border-2 rounded-2xl w-96 pb-4 mb-5 focus:outline-none'
            id='email'
            {...register('email')} />
          {errors.email &&
            <span>{errors.email.message}</span>}
        </div>

        {/* body input field */}
        <div className=' flex flex-col items-start'>
          <label className='text-start text-4xl font-bold italic text-[#264653] pb-3' htmlFor='body'>
            Body
          </label>
          <input type='text'
            className=' border-[#e76f51] border-2 rounded-2xl w-96 pb-10 mb-5 focus:outline-none'
            id='body'
            {...register('body')} />
          {errors.body &&
            <span>{errors.body.message}</span>}
        </div>

        <button type='submit'
          className="inline-block rounded-2xl bg-[#2a9d8f] px-8 py-3 text-lg font-medium text-white hover:border-4 hover:border-[#264653] hover:text-2xl  border-[3px] border-[#264653] transition hover:rotate-2 hover:scale-110 focus:ring active:bg-indigo-500 focus:outline-none"
        >
          ADD
        </button>

      </div>
    </form>
  )
}

export default AddData