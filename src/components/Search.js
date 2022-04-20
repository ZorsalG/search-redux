import { useDispatch, useSelector } from "react-redux"

export function Search() {
  const users = useSelector(state => state)
  const dispatch = useDispatch()

  const showData = (id) => {
    dispatch()
  }
  return (
    <div>
      <input type="text" />
      <button onClick={() => dispatch()}>Search</button>
    </div>
  )
}