'use client';
import React, { useState, useRef, useCallback } from "react";

interface Conversation {
    role: string
    content: string
}

export default function Form() {

  const [value, setValue] = React.useState<string>("")
  const [conversation, setConversation] = React.useState<Conversation[]>([])
  const inputRef = useRef<HTMLInputElement>(null)

  const handleInput = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value)
    },
    []
  )

  const handleKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const chatHistory = [...conversation, { role: "user", content: value }]
      const response = await fetch("/api/openAIChat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: chatHistory }),
      })

      const data = await response.json()
      console.log(data.result.choices[0].message.content)
      setValue("")
      setConversation([
        ...chatHistory,
        { role: "assistant", content: data.result.choices[0].message.content },
      ])
    }
  }

  const handleRefresh = () => {
    inputRef.current?.focus()
    setValue("")
    setConversation([])
  }
    return (
        <>
        <div className="bg-white dark:bg-gray-900 mb-4"></div>
            <section className="bg-white dark:bg-gray-900">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
                    Ingredientes</h2>
                <form >
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-center">
                            <input id="message" className="block p-2.5 w-full text-center text-gray-900 font-bold bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Escriba en este espacio los ingredientes que necesita para la receta"
                                value={value}
                                onChange={handleInput}
                                onKeyDown={handleKeyDown} />
                        </div>
                    </div>
                    <div className="flex justify-center items-center mb-6">
                        <button type="submit" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-bold rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2 text-xl"
                            onClick={handleRefresh}>
                            Generar receta
                        </button>
                    </div>

                </form>

                <h3 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">
                    Receta</h3>
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    {conversation.map((item, index) =>
                        <React.Fragment key={index}>
                            <br />
                            {item.content}
                            <br />
                        </React.Fragment>
                    )}

                    <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400 text-center">
                        <textarea id="message" className="block p-2.5 w-full text-center text-gray-900 font-bold bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Aqui aparecera su receta"></textarea>
                    </div>
                </div>
            </section>
        </>
    )
}