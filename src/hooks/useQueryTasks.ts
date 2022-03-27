import { useQuery } from 'react-query'
import axios from 'axios'
import { Task } from '../types/types'

export const useQueryTasks = () => {
  const getTasks = async () => {
    const { data } = await axios.get<Task[]>(
      `${process.env.REACT_APP_REST_URL}/tasks`
    )
    return data
  }

  return useQuery<Task[], Error>({
    queryKey: "task",
    queryFn: getTasks,
    staleTime: 0,
  })
}
