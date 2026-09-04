function App() {
  return (
    <body className="flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-2.5 shadow-2xl">
        <ul className="flex flex-col items-start justify-center">
          <li>Room</li>
          <li>5 people are around right now</li>
        </ul>

        <div className = "flex flex-col items-center justify-start">
          <Card/>
          <div className ="card flex gap-1">
            <img src="" alt="" className="w-full h-full object-cover rounded-4xl"></img>
            <ul>
              <li>Dale Houston</li>
              <li>Software Engineer</li>
            </ul>
          </div>        
        </div>
      </div>
    </body>

  );
}

export default App;