"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Form from "@/components/Form"
import { Session } from "next-auth"



const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const creatPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const response = await fetch('/api/prompt/new', {
                method: 'POST',
                body: JSON.stringify({
                    prompt: post.prompt,
                    userId: Session.user.id,
                    tag: post.tag
                })
            })
            if (response.ok) Router.push('/')
        } catch (error) {
            console.log(error);
        }finally{
            setSubmitting(false)
        }

    }



    return (
        <>
            <Form
                type="Create"
                post={post}
                setPost={setPost}
                submitting={submitting}
                handleSubmit={creatPrompt}
            />
        </>
    )
}

export default CreatePrompt