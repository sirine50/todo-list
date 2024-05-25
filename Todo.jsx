export default function Todo(props) {
  return (
    <div className='list'>
         <p>{props.todo}</p>
        <button onClick={() => props.onClick(props.id)}>Delete</button>
    </div>
  )
}