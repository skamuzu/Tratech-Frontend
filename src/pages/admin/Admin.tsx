import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
} from "@/components/ui/input-group";
import { Search, Plus, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { Suspense } from "react";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";

const Admin = () => {
  const { user } = useUser();

  const Cards = [
    { title: "Total Users", value: 1250, progression: +5.2 },
    { title: "Total Instructors", value: 48, progression: +1.5 },
    { title: "Total Courses", value: 75, progression: +10 },
    { title: "Total Enrollments", value: 4321, progression: -2.1 },
  ];
  return (
    <div className="w-full">
      <div className="flex flex-row gap-2 border-b p-4 px-8 items-center justify-between">
        <div className="flex-1 pl-4">
          <InputGroup className="h-12 w-1/2 text-2xl">
            <InputGroupInput placeholder="Search courses, users ..." />
            <InputGroupAddon>
              <Search className="w-6! h-6!" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex flex-row items-center gap-4 flex-1 justify-end">
          <Button className="h-12 text-lg flex items-center">
            <Plus className="w-8! h-8!" />
            Add New Course
          </Button>
          <Button variant={"outline"} className="h-12">
            <Bell className="w-6! h-6!" />
          </Button>
          <img
            src={user?.imageUrl}
            alt="User image"
            className="w-10 h-10 aspect-square rounded-full"
          />
        </div>
      </div>
      <div className="flex w-full justify-around p-8 gap-6">
        {Cards.map((card) => (
          <Card className="w-1/4">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-6xl font-bold">
              {card.value.toLocaleString()}
            </CardContent>
            <CardFooter
              className={`text-xl space-x-2 ${
                card.progression > 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {card.progression > 0 ? <ArrowUp /> : <ArrowDown />}
              {card.progression}% this week
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Admin;
