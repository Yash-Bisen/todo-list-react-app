
function Todolist(props){
    return(
        
        <><div className="todo_style">
          <i className=" fa-times fa-sharp fa-solid fa-circle-xmark" aria-hidden="true"
            onClick={()=>{props.onSelect(props.id)}}
          />
          <li className="list_style">{props.text}</li>
         </div>
         </>
    );
}

export default Todolist;