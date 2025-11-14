import useActions from "@/services/queries/actionQueries";
import { Spinner } from "@/components/ui/spinner";
import ActivityItem from "./ActivityItem";

const ActivityFeed = () => {
  const { data: actions, isLoading, isError, error } = useActions();

  if (isLoading) return <Spinner className="text-blue-500" />;

  if (isError) {
    console.error(error);
    return <p>Error loading actions</p>;
  }

  return (
    <>
      {actions?.map((action) => (
        <ActivityItem action={action}></ActivityItem>
      ))}
    </>
  );
};

export default ActivityFeed;
