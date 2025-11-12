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
  CardDescription,
} from "@/components/ui/card";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Line, LineChart, CartesianGrid, XAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Admin = () => {
  const { user } = useUser();

  const Cards = [
    { title: "Total Users", value: 1250, progression: +5.2 },
    { title: "Total Instructors", value: 48, progression: +1.5 },
    { title: "Total Courses", value: 75, progression: +10 },
    { title: "Total Enrollments", value: 4321, progression: -2.1 },
  ];

  const chartData = [
    { month: "January", desktop: 186 },
    { month: "February", desktop: 305 },
    { month: "March", desktop: 237 },
    { month: "April", desktop: 73 },
    { month: "May", desktop: 209 },
    { month: "June", desktop: 214 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <div className="w-full">
      <div className="flex flex-row gap-4 border-b p-4 px-8 items-center justify-between">
        <div className="flex-1 pl-4">
          <InputGroup className="h-12 w-1/2 text-2xl">
            <InputGroupInput placeholder="Search courses, users ..." />
            <InputGroupAddon>
              <Search className="w-6! h-6!" />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex flex-row items-center gap-8 flex-1 justify-end">
          <Button className="h-12 text-lg flex items-center">
            <Plus className="w-8! h-8!" />
            Add New Content
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
      <div className="flex w-full justify-around p-8 gap-8">
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
      <div className="grid grid-flow-col grid-rows-2 gap-8 p-4 px-8">
        <Card className="row-span-1">
          <CardHeader className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <CardTitle>New Signups & Active Students</CardTitle>
              <CardDescription>
                Platform growth over last 30 days
              </CardDescription>
            </div>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select a fruit" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px] w-full">
              <LineChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Line
                  dataKey="desktop"
                  type="bump"
                  stroke="var(--color-desktop)"
                  strokeWidth={6}
                  dot={false}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>
        <Card className="row-span-1">
          <CardHeader>
            <CardTitle>Second Section</CardTitle>
          </CardHeader>
          <CardContent>Hello</CardContent>
        </Card>

        <Card className="col-span-1 row-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Admin;
