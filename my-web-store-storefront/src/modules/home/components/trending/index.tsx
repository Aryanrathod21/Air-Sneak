import React from 'react';

type Props = {
    className: string;
};

const Trending = (props: Props) => {
    // Example image URL (replace with your actual image URL)
    const imageUrl = 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5fc6a13d-7526-4cd8-9327-26cff85c9b28/mercurial-vapor-15-elite-low-top-football-boot-9Mbrnv.png'; 

    return (
        <section className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 h-fit w-full text-black py-16 gap-4'>
            <div className='flex justify-center flex-col gap-2'>
                <p className='font-bold text-2xl'>Hello I'm Aryan Rathod</p>
                <p className='font-semibold text-lg'>Full-stack Developer</p>
                <p className='font-normal max-w-lg'>
                    I'm currently pursuing a degree in Computer Engineering at LDRP-ITR College in Gandhinagar and hail from Mahuva, Bhavnagar. I specialize in front-end development with expertise in Next.js, Tailwind CSS, and React.js. While I've primarily worked with Firebase for backend services, I'm eager to expand my knowledge in backend technologies like MongoDB and SQL. Passionate about continuous learning, I aim to become a full-stack developer.
                </p>
                {/* Example button */}
                {/* <button onClick={openResume} className='mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-red-600 flex items-center w-fit'>
                    Resume <FaLongArrowAltRight className='ml-2' />
                </button> */}
            </div>
            <div className='relative flex justify-center items-center'>
                {/* Example for displaying an image from URL */}
                <div className='h-full bg-gray-200 rounded-lg overflow-hidden'>
                    <img src={imageUrl} alt='Sample Image' className='object-cover h-full w-full' />
                </div>
            </div>
        </section>
    );
};

export default Trending;
