import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import CardList from "@/components/CardList/CardList";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import EditUser from "@/components/EditUser/EditUser";
import LocationBar from "@/components/LocationBar/LocationBar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import UserChart from "@/components/UserChart/UserChart";
const SingleUser = () => {
  return (
    <div>
      <LocationBar />

      <div className="flex sm:flex-col xl:flex-row mt-4 gap-4">
        <div className="w-full xl:w-1/3 space-y-6">
          <div className="bg-primary-foreground p-2 rounded-lg flex flex-col ">
            <h3 className="text-xl font-semibold">User information</h3>
            <div className="bg-primary-foreground p-2 rounded-lg flex items-center gap-5">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck className=" rounded-full bg-blue-300 border-l border-blue-500" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified user</h1>
                  <p className="text-muted-foreground text-sm">
                    This user has been verified
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Citrus className=" rounded-full bg-orange-300 border-l border-orenge-500" />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-muted-foreground text-sm">
                    This user has been popular in the community
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Shield className=" rounded-full bg-yellow-300 border-l border-yellow-500 " />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-muted-foreground text-sm">
                    This user has been popular in the community
                  </p>
                </HoverCardContent>
              </HoverCard>
              <HoverCard>
                <HoverCardTrigger>
                  <Candy className=" rounded-full bg-green-300 border-l border-green-500 " />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Popular</h1>
                  <p className="text-muted-foreground text-sm">
                    This user has been popular in the community
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">User information</h3>
              <Sheet>
                <Button asChild>
                  <SheetTrigger>Edit user</SheetTrigger>
                </Button>
                <SheetContent>
                  <EditUser />
                </SheetContent>
              </Sheet>
            </div>
            <div className="space-y-4 mt-4">
              <div className="flex flex-col gap-2 mb-8">
                <p className="text-sm text-muted-foreground ">
                  User completation
                </p>
                <Progress value={33} />
              </div>
              <div className="flex gap-2 text-sm">
                <span>Username:</span>
                <span>Ferfco</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span>email:</span>
                <span>Ferfco@gmail.com</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span>Phone number:</span>
                <span>54 9 11 32323232</span>
              </div>
              <div className="flex gap-2 text-sm">
                <span>User role:</span>
                <Badge>Admin</Badge>
              </div>
            </div>
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        <div className="w-full xl:w-2/3 space-y-6">
          <div className="bg-primary-foreground p-4 rounded-lg">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="https://img.freepik.com/premium-vector/bald-empty-face-icon-avatar-vector-illustration_601298-13391.jpg" />
                <AvatarFallback>Ferfco</AvatarFallback>
              </Avatar>
              <h1 className="text-sm font-semibold">Ferfco</h1>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              fvwrtvwr vwtvwg wrgvwrb qecqrcqrcqc
            </p>
          </div>

          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-lg font-semibold mb-2">User activity</h1>
            <UserChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
