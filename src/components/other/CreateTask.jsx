

const CreateTask = () => {
  return (
    <div>

       <div>
        <form className='flex  w-full flex-wrap bg-[#1c1c1c]  p-5 items-start justify-between'>

          <div className='w-1/2'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
          <input className="text-sm py-1 px-2 3-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4"  type="text" placeholder='Make a UI Design'  />
         
      
            <div>

          <h3>Date</h3>
          <input  className="text-sm py-1 px-2 3-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type="date" />
          </div>
          <div>

          <h3>Assign to</h3>
          <input className="text-sm py-1 px-2 3-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type="text" placeholder='employee name' />
          </div>
          <div>
          <h3>Category</h3>
          <input className="text-sm py-1 px-2 3-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" type="text" placeholder='Design,Dev etc' />
          </div>
          </div>
          <div className='w-1/2 flex flex-col items-start'>
          <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
          <textarea className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border border-gray-400 mb-4" name=''id='' cols="30" rows="10"></textarea>
          
          <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-8 rounded text-sm mt-4 '>Create Task</button>
          </div>
        </form>
      </div>
      
    </div>

    
  )
}

      
    

export default CreateTask;
