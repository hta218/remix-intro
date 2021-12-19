import { Outlet } from "remix"

function Posts() {
  return (
    <div>
      <h1>Posts route</h1>
      <Outlet />
    </div>
  )
}

export default Posts