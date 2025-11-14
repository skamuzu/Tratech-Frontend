import { UserIcon, BookOpenIcon, CheckIcon } from "lucide-react";
import { type ActionI } from "@/types/api";
import { formatDistanceToNow } from "date-fns";
import { cn } from "@/lib/utils";

const baseIcon = "w-12 h-12 p-3 rounded-full";

const modelIconMap: Record<string, React.JSX.Element> = {
  User: <UserIcon className={cn(baseIcon, "text-blue-500 bg-blue-950")} />,

  Course: (
    <BookOpenIcon className={cn(baseIcon, "text-green-500 bg-green-950")} />
  ),

  Lesson: (
    <CheckIcon className={cn(baseIcon, "text-purple-500 bg-purple-950")} />
  ),
};

// Capitalize helper
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const ActivityItem = ({ action }: { action: ActionI }) => {
  const ActorIcon = modelIconMap[action.model_name];

  const timeAgo = capitalize(
    formatDistanceToNow(new Date(action.timestamp), {
      addSuffix: true,
    })
  );

  return (
    <div className="flex items-center gap-3 text-xl">
      {ActorIcon}
      <div className="flex flex-col">
        <p>
          <span className="font-bold">{action.actor_name}</span> {action.verb}{" "}
          {action.target_name}
        </p>

        <p className="text-ring">{timeAgo}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
