import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Calendar } from "lucide-react";

const CalendarTab = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Calendar View</CardTitle>
        <CardDescription>
          Manage your appointments and availability
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-96 flex items-center justify-center border border-dashed border-border rounded-lg">
          <div className="text-center space-y-2">
            <Calendar className="h-12 w-12 text-muted-foreground mx-auto" />
            <p className="text-muted-foreground">
              Calendar component would go here
            </p>
            <p className="text-sm text-muted-foreground">
              Integration with calendar library needed
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarTab;
