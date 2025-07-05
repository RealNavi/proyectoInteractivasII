import { createFileRoute } from '@tanstack/react-router'
import CalendarScreen from '../components/pages/CalendarScreen'
//import {useQuery} from "@tanstack/react-query";


export const Route = createFileRoute('/calendar')({
  component: RouteComponent,
})

function RouteComponent(){
 /* const {data,isLoading,error} = useQuery({
    queryKey:['reminders'],
    queryFn: async () => {
      const response = await fetch('http://medical.test/api/reminder/index');
      if(!response.ok){
        throw new Error('Network response was not ok');
      }
      return response.json();
    },
  });

  if(isLoading){
    return <div>Loading...</div>
  };

  if(error){
    return <div>Error: {error.message}</div>
  };
*/

  return (<CalendarScreen/>);
}
