import AppAreaChart from "@/components/AppAreaChart/AppAreaChart";
import AppBarChart from "@/components/AppBarChart/AppBarChart";
import AppPIeChart from "@/components/AppPieChart/AppPIeChart";
import CardList from "@/components/CardList/CardList";
import ToDoList from "@/components/ToDoList/ToDoList";

const Home = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 xl:col-span-3 2xl:grid-cols-3 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-2 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-1">
        <AppPIeChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-1">
        <CardList title={"Latest transactions"} />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-1 xl:col-span-1 2xl:col-span-2 max-h-[600px] ">
        <ToDoList />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg col-span-1">
        <CardList title={"Popular content"} />
      </div>
    </div>
  );
};

export default Home;
