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
      <div className=' flex flex-col items-start gap-3 w-full my-10 mb-40 vsm:mt-0'>

        {/* name input field */}
        <div className=' flex flex-col items-start'>
          <label className='text-start md:text-4xl font-bold italic text-[#264653] md:pb-2 vsm:text-3xl vsm:pb-1' htmlFor='name'>
            Name
          </label>
          <input type='text'
            className=' border-[#264653] text-[#264653] text-base font-semibold rounded-2xl md:w-96 py-2 px-4 mb-5 focus:outline-none placeholder:italic placeholder:text-[#264653] placeholder:text-base placeholder:font-semibold placeholder:opacity-60 bg-[#f6bd60] border-[3px] vsm:w-full '
            placeholder='naval ravikant'
            id='name'
            {...register('name')} />
          {errors.name &&
            <span>{errors.name.message}</span>}
        </div>


        {/* email input field */}
        <div className=' flex flex-col items-start'>
          <label className='text-start md:text-4xl font-bold italic text-[#264653] md:pb-2 vsm:text-3xl vsm:pb-1' htmlFor='email'>
            Email
          </label>
          <input type='text'
            className=' border-[#264653] text-[#264653] text-base font-semibold rounded-2xl md:w-96 py-2 px-4 mb-5 focus:outline-none placeholder:italic placeholder:text-[#264653] placeholder:text-base placeholder:font-semibold placeholder:opacity-60 bg-[#f6bd60] border-[3px] vsm:w-60'
            placeholder='naval@athens.com'
            id='email'
            {...register('email')} />
          {errors.email &&
            <span>{errors.email.message}</span>}
        </div>

        {/* body input field */}
        <div className=' flex flex-col items-start'>
          <label className='text-start md:text-4xl font-bold italic text-[#264653] md:py-2 vsm:text-3xl vsm:pb-1' htmlFor='body'>
            Body
          </label>
          <input type='text'
            className=' border-[#264653] text-[#264653] text-base font-semibold rounded-2xl md:w-[570px] py-2 pb-12 px-4 mb-5 focus:outline-non placeholder:italic placeholder:text-[#264653] placeholder:text-base placeholder:font-semibold placeholder:opacity-60 bg-[#f6bd60] border-[3px] vsm:w-60 focus:outline-none whitespace-normal placeholder:whitespace-normal'
            placeholder='greatest angel investor + modern day philosopher and entreprenuer...'
            id='body'
            {...register('body')} />
          {errors.body &&
            <span>{errors.body.message}</span>}
        </div>

        <div className=' h-full'>
          <button type='submit'
            className=" absolute inline-block rounded-2xl bg-[#2a9d8f] px-8 py-3 text-lg font-medium text-white hover:border-4 hover:border-[#264653] hover:text-2xl  border-[4px] border-[#264653] transition duration-300 ease-in-out hover:rotate-2 hover:scale-110 focus:ring focus:outline-none"
          >
            ADD
          </button>
        </div>

      </div>
    </form>
  )
}

export default AddData