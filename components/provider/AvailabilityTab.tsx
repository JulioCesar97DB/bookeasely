import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Switch } from "../ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const AvailabilityTab = () => {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">Availability Schedule</h3>
        <p className="text-muted-foreground">
          Set your working hours and days off
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Working Hours</CardTitle>
          <CardDescription>
            Set your availability for each day of the week
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <div
              key={day}
              className="flex items-center justify-between p-4 border border-border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <Switch defaultChecked={day !== "Sunday"} />
                <span className="font-medium w-20">{day}</span>
              </div>
              <div className="flex items-center gap-4">
                <Select defaultValue="09:00">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="08:00">8:00 AM</SelectItem>
                    <SelectItem value="09:00">9:00 AM</SelectItem>
                    <SelectItem value="10:00">10:00 AM</SelectItem>
                  </SelectContent>
                </Select>
                <span>to</span>
                <Select defaultValue="17:00">
                  <SelectTrigger className="w-24">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="16:00">4:00 PM</SelectItem>
                    <SelectItem value="17:00">5:00 PM</SelectItem>
                    <SelectItem value="18:00">6:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </>
  );
};

export default AvailabilityTab;
