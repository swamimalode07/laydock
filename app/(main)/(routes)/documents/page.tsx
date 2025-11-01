"use client"
import React from 'react'
import Image from 'next/image'
import { useUser } from '@clerk/nextjs'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import { toast } from 'sonner'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'

const DocumentsPage = () => {

  const {user,isLoaded,isSignedIn }=useUser()

  
  const create=useMutation(api.documents.create)  
  if (!isLoaded) return null;

  const onCreatehandler=()=>{
      if (!isSignedIn) return toast.error("Please sign in first!");
    const promise=create({
      title:"Untitled"
    })
    toast.promise(promise,{
      loading:"creating a new zeropage",
      success:"Note created successfully",
      error:"Failed to create a new page"
    })
  }

  return (
    <div className='h-full flex flex-col items-center justify-center space-y-4'>
      <Image
      src="https://images.ctfassets.net/spoqsaf9291f/5rPwO8AjIUq0Xgt6Adaft6/d057f0bcd71e9a0182f61bcc9a34cf03/agent-builder.gif"
      height={300}
      width={300}
      alt="empty"
      className='dark:hidden'
       />
       <Image
      src="https://images.ctfassets.net/spoqsaf9291f/5rPwO8AjIUq0Xgt6Adaft6/d057f0bcd71e9a0182f61bcc9a34cf03/agent-builder.gif"
      height={300}
      width={300}
      alt="empty"
      className='hidden dark:block'
       />

       <h2 className='text-lg font-medium'>
        Welcome to {user?.firstName}&apos;
       </h2>
       <Button onClick={onCreatehandler}>
        <PlusCircle className='h-4 w-2 mr-2'/>
        Create your note
       </Button>
    
    </div>
  ) 
}

export default DocumentsPage