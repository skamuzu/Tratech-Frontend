import useActions from "@/services/queries/actionQueries";
import { Spinner } from "@/components/ui/spinner";
import ActivityItem from "./ActivityItem";
import { Activity, AlertTriangle } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

const ActivityFeed = () => {
  const { data: actions, isLoading, isError, error, refetch } = useActions();

  if (isLoading) return <Spinner className="text-blue-500 size-10" />;

  if (isError) {
  return (
    <Empty className="h-full">
      <EmptyHeader>
        <EmptyMedia
          variant="icon"
          className="text-red-600 rounded-full w-20 h-20 flex items-center justify-center"
        >
          <AlertTriangle className="w-12 h-12" />
        </EmptyMedia>

        <EmptyTitle>Unable to Load Activity</EmptyTitle>

        <EmptyDescription>
          We couldn’t connect to the server. Please check your connection and
          try again.
        </EmptyDescription>

        <Button onClick={() => refetch()} className="mt-4">
          Retry
        </Button>
      </EmptyHeader>
    </Empty>
  );
}


  if (actions?.length == 0) {
    return (
      <Empty className="h-full">
        <EmptyHeader>
          <EmptyMedia
            variant="icon"
            className="text-blue-600 rounded-full w-20 h-20"
          >
            <Activity className="w-12! h-12!" />
          </EmptyMedia>

          <EmptyTitle>No Recent Activity</EmptyTitle>

          <EmptyDescription>
            Everything looks quiet right now. New activity will appear here once
            users start interacting with the platform.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    );
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
