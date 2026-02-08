import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
import { Calendar1, ChevronUp, Home, Inbox, Search, User2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const AppSidebar = () => {
  const items = [
    { title: "Home", url: "/", icon: Home },
    { title: "Inbox", url: "#", icon: Inbox },
    { title: "Calendar", url: "#", icon: Calendar1 },
    { title: "Search", url: "#", icon: Search },
    { title: "Users", url: "/users", icon: Search },
  ];
  return (
    <SidebarInset>
      <Sidebar>
        <SidebarHeader>
          <SidebarGroupLabel>Application</SidebarGroupLabel>

          <SidebarMenuItem>
            <SidebarMenuButton>
              <Link to="/" className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>FERFCO Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarMenu>
            {items.map((i) => (
              <SidebarMenuItem key={i.title}>
                <SidebarMenuButton>
                  {/* <SidebarMenuButton asChild> */}
                  <Link to={i.url} className="flex items-center gap-2">
                    <i.icon className="h-4 w-4" />
                    <span>{i.title}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="text-xs text-muted-foreground">
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 w-full px-4 py-3 text-sm text-muted-foreground rounded-md hover:bg-accent hover:text-accent-foreground">
                    <button className="flex items-center gap-2 w-full px-4 py-3 text-sm text-muted-foreground rounded-md hover:bg-accent hover:text-accent-foreground">
                      <Home className="h-4 w-4 flex-shrink-0" />
                      <span>FERFCO Dashboard</span>
                    </button>
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </SidebarInset>
  );
};

export default AppSidebar;
