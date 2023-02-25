export default function ChatPage() {
  return (
    <main className="flex items-center justify-center">
      <input 
        className="absolute bottom-8 | px-4 py-3 | rounded-md | bg-zinc-700 | w-[800px] h-auto | outline-none | border border-zinc-600 | break-words"
      />

      <div
        id='chat'
        className="absolute top-0 | h-full"
      >
        
      </div>
    </main>
  )
}